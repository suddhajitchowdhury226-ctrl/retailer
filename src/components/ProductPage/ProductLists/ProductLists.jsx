


import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import { useDeepCompareEffect } from "react-use";
import { Search, ShoppingCart } from "lucide-react";
import plcaeholderImg from "../../../assets/images/placeholder.png";
import popupImg from "../../../assets/pop-up-img.png";

// Custom hook for managing filters
const useFilters = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  const updateFilter = useCallback((name, value, isArray = false) => {
    setFilters((prev) => {
      if (isArray) {
        const currentValues = Array.isArray(prev[name]) ? prev[name] : [];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];
        return { ...prev, [name]: newValues };
      }
      return { ...prev, [name]: value };
    });
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  return { filters, updateFilter, resetFilters };
};

// Custom hook for API calls
const useProductsAPI = (BASE_URL) => {
  const cancelTokenRef = useRef();
  const activeRequestRef = useRef(null);

  const fetchWithCancel = useCallback(async (url, config) => {
    if (cancelTokenRef.current && activeRequestRef.current !== url) {
      cancelTokenRef.current.cancel('Request cancelled due to new request');
    }

    cancelTokenRef.current = axios.CancelToken.source();
    activeRequestRef.current = url;

    try {
      const response = await axios.get(url, { ...config, cancelToken: cancelTokenRef.current.token });
      return response;
    } catch (error) {
      if (axios.isCancel(error)) return null;
      throw error;
    } finally {
      activeRequestRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Component unmounted');
      }
    };
  }, []);

  return { fetchWithCancel };
};

export const ProductLists = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(() => !sessionStorage.getItem('disclaimerAccepted'));
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  const [subcategoryCounts, setSubcategoryCounts] = useState({});
  const [brandCounts, setBrandCounts] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isFiltersReady, setIsFiltersReady] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [addingToCart, setAddingToCart] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 12,
  });
  const [isPaginationLoading, setIsPaginationLoading] = useState(false);
  const [initialQueryParams, setInitialQueryParams] = useState({ brand: null, category: null });
  const isFetching = useRef(false);
  const lastFetchRef = useRef({ filters: null, page: null });

  const { filters, updateFilter, resetFilters } = useFilters({
    categories: [],
    subcategories: [],
    brands: [],
    minPrice: "0",
    maxPrice: "1000",
    sortBy: "All",
    search: "",
  });

  const [scope, animate] = useAnimate();
  const productListRef = useRef(null);
  const isInView = useInView(productListRef, { once: true, margin: "0px 0px -100px 0px" });
  const navigate = useNavigate();
  const location = useLocation();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { fetchWithCancel } = useProductsAPI(BASE_URL);

  // Fetch categories, brands, and product counts on mount
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const [categoriesResponse, brandsResponse, countsResponse] = await Promise.all([
          axios.get(`${BASE_URL}/api/user/retailer-categories`),
          axios.get(`${BASE_URL}/api/user/get-brands`),
          axios.get(`${BASE_URL}/api/user/product-counts`)
        ]);
        setCategories(Array.isArray(categoriesResponse.data) ? categoriesResponse.data : []);
        setBrands(Array.isArray(brandsResponse.data) ? brandsResponse.data : []);
        if (countsResponse && countsResponse.data.success) {
          setCategoryCounts(countsResponse.data.categoryCounts || {});
          setSubcategoryCounts(countsResponse.data.subcategoryCounts || {});
          setBrandCounts(countsResponse.data.brandCounts || {});
          console.log('Product counts:', countsResponse.data);
        } else {
          console.warn('No valid counts response:', countsResponse?.data);
        }
        setIsInitialized(true);
      } catch (err) {
        console.error('Error fetching initial data:', err.message, err.response?.data);
        setCategories([]);
        setBrands([]);
        setCategoryCounts({});
        setSubcategoryCounts({});
        setBrandCounts({});
        setError("Failed to load initial data");
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [BASE_URL, fetchWithCancel]);

  // Capture initial query parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const brandName = params.get("brand");
    const categoryId = params.get("category");
    const pageNum = params.get("page");

    setInitialQueryParams({ brand: brandName, category: categoryId });

    // Restore page number from URL
    if (pageNum) {
      const page = parseInt(pageNum);
      if (!isNaN(page) && page > 0) {
        setPagination((prev) => ({ ...prev, currentPage: page }));
      }
    }

    if (brandName || categoryId) {
      setLoading(true);
    } else {
      setIsFiltersReady(true);
    }
  }, [location.search]);

  // Handle brand and category query parameters from URL
  useEffect(() => {
    if (!isInitialized || (!initialQueryParams.brand && !initialQueryParams.category)) return;

    const { brand: brandName, category: categoryId } = initialQueryParams;
    let hasChanges = false;

    if (categoryId && categories.length > 0) {
      const selectedCategory = categories.find((cat) => cat._id === categoryId);
      if (selectedCategory && !filters.categories.includes(selectedCategory._id)) {
        updateFilter('categories', selectedCategory._id, true);
        setExpandedCategories((prev) => ({ ...prev, [selectedCategory._id]: true }));
        hasChanges = true;
      }
    }

    if (brandName && brands.length > 0) {
      const selectedBrand = brands.find((brand) => brand.name.toLowerCase() === brandName.toLowerCase());
      if (selectedBrand && !filters.brands.includes(selectedBrand._id)) {
        updateFilter('brands', selectedBrand._id, true);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      setPagination((prev) => ({ ...prev, currentPage: 1 }));
      setIsFiltersReady(true);
    }

    setInitialQueryParams({ brand: null, category: null });
  }, [isInitialized, initialQueryParams, categories, brands, filters.categories, filters.brands, updateFilter]);

  const validatePriceRange = useCallback((minPrice, maxPrice) => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    if (minPrice && maxPrice && min > max) return "Minimum price cannot be greater than maximum price";
    if ((minPrice && min < 0) || (maxPrice && max < 0)) return "Price cannot be negative";
    return null;
  }, []);

  const buildQueryParams = useCallback((filters, page, limit) => {
    const queryParams = new URLSearchParams({
      role: "retailer",
      page: page.toString(),
      limit: limit.toString(),
    });

    if (filters.categories.length > 0) {
      filters.categories.forEach((cat) => queryParams.append("category", cat));
    }
    if (filters.subcategories.length > 0) {
      filters.subcategories.forEach((sub) => queryParams.append("subcategory", sub));
    }
    if (filters.brands.length > 0) {
      filters.brands.forEach((brand) => queryParams.append("brand", brand));
    }
    if (filters.minPrice && parseFloat(filters.minPrice) >= 0) queryParams.append("minPrice", filters.minPrice);
    if (filters.maxPrice && parseFloat(filters.maxPrice) >= 0) queryParams.append("maxPrice", filters.maxPrice);
    if (filters.sortBy && filters.sortBy !== "All") queryParams.append("sortBy", filters.sortBy);
    if (filters.search && filters.search.trim()) queryParams.append("search", filters.search.trim());

    return queryParams;
  }, []);

  const generateNoProductsMessage = useCallback((filters, categories, brands) => {
    const filterParts = [];
    if (filters.categories.length > 0) {
      const selectedCategories = categories.filter((cat) => filters.categories.includes(cat._id));
      if (selectedCategories.length > 0) {
        filterParts.push(`categories "${selectedCategories.map((cat) => cat.name).join(', ')}"`);
      }
    }
    if (filters.subcategories.length > 0) {
      const selectedCategory = categories.find((cat) => filters.categories.includes(cat._id));
      if (selectedCategory) {
        const selectedSubcategories = selectedCategory.subcategories.filter((sub) =>
          filters.subcategories.includes(sub._id)
        );
        if (selectedSubcategories.length > 0) {
          filterParts.push(`subcategories "${selectedSubcategories.map((sub) => sub.name).join(', ')}"`);
        }
      }
    }
    if (filters.brands.length > 0) {
      const selectedBrands = brands.filter((b) => filters.brands.includes(b._id));
      if (selectedBrands.length > 0) {
        filterParts.push(`brands "${selectedBrands.map((b) => b.name).join(', ')}"`);
      }
    }
    if (filters.minPrice !== "0" || filters.maxPrice !== "1000") {
      let priceRange = "";
      if (filters.minPrice !== "0" && filters.maxPrice !== "1000") priceRange = `$${filters.minPrice} - $${filters.maxPrice}`;
      else if (filters.minPrice !== "0") priceRange = `above $${filters.minPrice}`;
      else if (filters.maxPrice !== "1000") priceRange = `below $${filters.maxPrice}`;
      filterParts.push(`price range ${priceRange}`);
    }
    return filterParts.length > 0 ? `No products found for ${filterParts.join(" and ")}.` : "No products found";
  }, []);

  const fetchFilteredProducts = useCallback(
    async (currentFilters, page = 1, limit = 12, showFilterLoading = false) => {
      if (isFetching.current) return;

      const filtersStr = JSON.stringify(currentFilters);
      const lastFiltersStr = JSON.stringify(lastFetchRef.current.filters);
      if (filtersStr === lastFiltersStr && page === lastFetchRef.current.page) return;

      isFetching.current = true;

      try {
        const priceError = validatePriceRange(currentFilters.minPrice, currentFilters.maxPrice);
        if (priceError) {
          setError(priceError);
          setProducts([]);
          return;
        }
        if (showFilterLoading) {
          setIsFiltering(true);
        } else if (page > 1) {
          setIsPaginationLoading(true);
        }
        setError('');

        const queryParams = buildQueryParams(currentFilters, page, limit);
        const apiUrl = `${BASE_URL}/api/retailer/filter-products?${queryParams.toString()}`;
        console.log(`Fetching retailer products: ${apiUrl}`);

        const response = await fetchWithCancel(apiUrl, { headers: { 'Content-Type': 'application/json' } });
        if (!response) return;

        const { success, products: productList, currentPage, totalPages, totalProducts } = response.data;

        if (!success) {
          setError(response.data.message || 'Failed to load products');
          setProducts([]);
          return;
        }

        setProducts(Array.isArray(productList) ? productList : []);
        setPagination((prev) => ({
          ...prev,
          currentPage: currentPage || 1,
          totalPages: totalPages || 1,
          totalItems: totalProducts || 0,
          itemsPerPage: limit,
        }));

        lastFetchRef.current = { filters: { ...currentFilters }, page };

        if (Array.isArray(productList) && productList.length === 0) {
          setError(generateNoProductsMessage(currentFilters, categories, brands));
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load products.');
        setProducts([]);
      } finally {
        setIsFiltering(false);
        setLoading(false);
        setIsPaginationLoading(false);
        isFetching.current = false;
      }
    },
    [BASE_URL, categories, brands, validatePriceRange, buildQueryParams, generateNoProductsMessage, fetchWithCancel]
  );

  // Initial product fetch after filters are ready
  useEffect(() => {
    if (isFiltersReady && !isFetching.current) {
      fetchFilteredProducts(filters, pagination.currentPage, pagination.itemsPerPage, false);
    }
  }, [isFiltersReady, filters, pagination.currentPage, pagination.itemsPerPage]);

  const debouncedFetchRef = useRef(
    debounce((filters, page, limit) => {
      fetchFilteredProducts(filters, page, limit, true);
    }, 800)
  );

  useDeepCompareEffect(() => {
    if (isFiltersReady && !isFetching.current) {
      debouncedFetchRef.current(filters, pagination.currentPage, pagination.itemsPerPage);
    }
  }, [isFiltersReady, filters, pagination.currentPage]);

  const handleFilterChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "minPrice" || name === "maxPrice") {
      if (value === "" || (!isNaN(value) && parseFloat(value) >= 0)) {
        updateFilter(name, value);
      }
    } else {
      updateFilter(name, value);
    }
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, [updateFilter]);

  const handleCategoryChange = useCallback((categoryId) => {
    setProducts([]);
    setLoading(true);
    updateFilter('categories', categoryId, true);
    if (!filters.categories.includes(categoryId)) {
      const category = categories.find((cat) => cat._id === categoryId);
      if (category && category.subcategories && category.subcategories.length > 0) {
        const subcategoryIds = category.subcategories.map((sub) => sub._id);
        const newSubcategories = filters.subcategories.filter((subId) => !subcategoryIds.includes(subId));
        setFilters((prev) => ({ ...prev, subcategories: newSubcategories }));
      }
    } else {
      setExpandedCategories((prev) => ({ ...prev, [categoryId]: true }));
    }
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, [updateFilter, filters.categories, categories]);

  const handleSubcategoryChange = useCallback((subcategoryId) => {
    if (!subcategoryId || typeof subcategoryId !== 'string' || subcategoryId.length !== 24) {
      console.warn('Invalid subcategory ID:', subcategoryId);
      return;
    }

    const isValidSubcategory = categories.some((cat) =>
      cat.subcategories.some((sub) => sub._id === subcategoryId && filters.categories.includes(cat._id))
    );
    if (!isValidSubcategory) {
      console.warn('Subcategory not found in selected categories:', subcategoryId);
      return;
    }

    setProducts([]);
    setLoading(true);
    updateFilter('subcategories', subcategoryId, true);
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, [updateFilter, filters.categories, categories]);

  const handleBrandChange = useCallback(
    (brandId) => {
      setProducts([]);
      setLoading(true);
      updateFilter('brands', brandId, true);
      setPagination((prev) => ({ ...prev, currentPage: 1 }));
    },
    [updateFilter]
  );

  const handlePriceRangeChange = useCallback(
    (min, max) => {
      setProducts([]);
      setLoading(true);
      updateFilter('minPrice', min.toString());
      updateFilter('maxPrice', max.toString());
      setPagination((prev) => ({ ...prev, currentPage: 1 }));
    },
    [updateFilter]
  );

  const handleSliderChange = useCallback(
    (e, type) => {
      const value = parseInt(e.target.value);
      let newMin = parseInt(filters.minPrice) || 0;
      let newMax = parseInt(filters.maxPrice) || 1000;

      if (type === "min") {
        newMin = Math.min(value, newMax);
      } else {
        newMax = Math.max(value, newMin);
      }

      handlePriceRangeChange(newMin, newMax);
    },
    [filters.minPrice, filters.maxPrice, handlePriceRangeChange]
  );

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      updateFilter('search', searchTerm);
      setPagination((prev) => ({ ...prev, currentPage: 1 }));
    }, 500),
    [updateFilter]
  );

  const handleSearchChange = useCallback((e) => {
    const searchTerm = e.target.value;
    debouncedSearch(searchTerm);
  }, [debouncedSearch]);

  const clearFilters = useCallback(() => {
    resetFilters();
    setExpandedCategories({});
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
    setError("");
    setProducts([]);
    setLoading(true);
    navigate("/products");
  }, [resetFilters, navigate]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const handlePageChange = useCallback(
    (newPage) => {
      if (newPage >= 1 && newPage <= pagination.totalPages && !isPaginationLoading) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setPagination((prev) => ({ ...prev, currentPage: newPage }));

        // Update URL with page number
        const params = new URLSearchParams(location.search);
        params.set('page', newPage.toString());
        navigate(`${location.pathname}?${params.toString()}`, { replace: true });
      }
    },
    [pagination.totalPages, isPaginationLoading, location.search, location.pathname, navigate]
  );

  const handleAddToCart = useCallback(async (e, product) => {
    e.stopPropagation();
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/auth/login");
      return;
    }

    if (product.stock === 0) return;

    setAddingToCart(product._id);

    try {
      await axios.post(
        `${BASE_URL}/api/user/add-to-cart`,
        { productId: product._id, quantity: 1, websiteRole: 'retailer' },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const cartItem = {
        _id: `${product._id}_${Date.now()}`,
        product: {
          _id: product._id,
          name: product.name,
          sellPrice: product.buyPrice,
          images: product.images,
          stock: product.stock,
        },
        quantity: 1,
      };

      const existingCart = JSON.parse(localStorage.getItem("localCart") || "[]");
      const itemIndex = existingCart.findIndex((item) => item.product._id === product._id);

      if (itemIndex > -1) {
        existingCart[itemIndex].quantity += 1;
      } else {
        existingCart.push(cartItem);
      }

      localStorage.setItem("localCart", JSON.stringify(existingCart));
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error("Error adding to cart:", err);
    } finally {
      setAddingToCart(null);
    }
  }, [BASE_URL, navigate]);

  const toggleCategoryExpand = useCallback((categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  }, []);

  const getImageUrl = useCallback(
    (imagePath) => {
      if (!imagePath) return plcaeholderImg;
      // Check if it's already a full URL (starts with http:// or https://)
      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
      }
      // Use production API URL for images
      return `https://api.rayonewholesale.com/${imagePath}`;
    },
    []
  );

  useEffect(() => {
    if (isInView && !loading && !isFiltering && Array.isArray(products) && products.length > 0 && productListRef.current) {
      const productCards = productListRef.current.querySelectorAll('.PS__ProductCardWrapper');
      if (productCards.length > 0) {
        animate(
          '.PS__ProductCardWrapper',
          { opacity: [0, 1], y: ['1vh', '0vh'] },
          { duration: 0.6, ease: 'backInOut', type: 'spring', mass: 2.5, power: 10, delay: stagger(0.25) }
        );
      }
    }
  }, [isInView, products, loading, isFiltering, animate]);

  const productList = useMemo(() => {
    return products.map((product) => (
      <div
        key={product._id}
        className="PS__ProductCardWrapper product-card"
        onClick={() => navigate(`/products-details/${product._id}`)}
      >
        <div className="product-image-container">
          <img
            src={product.images && product.images.length > 0 && product.images[0] ? getImageUrl(product.images[0]) : plcaeholderImg}
            alt={product.name || "Product image"}
            className="product-image"
            onError={(e) => { e.target.src = plcaeholderImg; }}
          />
          {product.discount && (
            <div className="discount-badge">
              -{product.discount}%
            </div>
          )}
        </div>
        <div className="product-info">
          <div className="product-category">
            {product.category?.name || "Unknown"} / {product.subcategory?.name || "Unknown"}
          </div>
          <h4 className="product-name">
            {product.name.length > 35 ? `${product.name.substring(0, 35)}...` : product.name}
          </h4>
          <div className="product-footer">
            <div className="price-section">
              <span className="current-price">${product.buyPrice?.toFixed(2) || '0.00'}</span>
              {product.originalPrice && product.originalPrice > product.buyPrice && (
                <span className="original-price">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            {product.purchaseCount && product.purchaseCount > 0 && (
              <div className="purchase-count">
                {product.purchaseCount} sold
              </div>
            )}
          </div>
          {product.rating && (
            <div className="rating-section">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-text">({product.rating})</span>
            </div>
          )}
          <button
            className="add-to-cart-btn"
            onClick={(e) => handleAddToCart(e, product)}
            disabled={product.stock === 0 || addingToCart === product._id}
          >
            <ShoppingCart size={16} />
            {addingToCart === product._id ? 'Adding...' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    ));
  }, [products, getImageUrl, navigate, addingToCart, handleAddToCart]);

  const hasActiveFilters = useMemo(
    () =>
      filters.categories.length > 0 ||
      filters.subcategories.length > 0 ||
      filters.brands.length > 0 ||
      filters.minPrice !== "0" ||
      filters.maxPrice !== "1000" ||
      filters.sortBy !== "All" ||
      (filters.search && filters.search.trim() !== ""),
    [filters]
  );

  const handleDisclaimerAccept = () => {
    sessionStorage.setItem('disclaimerAccepted', 'true');
    setShowDisclaimer(false);
  };

  const handleDisclaimerExit = () => {
    navigate('/');
  };

  return (
    <div className="container">
      {/* Medical Disclaimer Popup */}
      {showDisclaimer && (
        <div className="disclaimer-overlay">
          <div className="disclaimer-modal">
            {/* Header with gradient */}
            <div className="disclaimer-header">
              <button
                onClick={handleDisclaimerExit}
                className="disclaimer-close"
              >✕</button>
              <img
                src={popupImg}
                alt="Ray's Healthy Living"
                className="disclaimer-logo"
              />
              <h2 className="disclaimer-title">
                Medical Responsibility<br />&amp; Health Awareness Notice
              </h2>
            </div>

            {/* Gold divider */}
            <div className="disclaimer-divider" />

            {/* Content */}
            <div className="disclaimer-body">
              <p>
                At <strong style={{ color: '#2d5016' }}>Ray's Healthy Living</strong>, we respect the medical profession.
              </p>
              <p>
                Medical doctors are trained to diagnose, interpret lab results,
                understand pathology, and manage disease safely and effectively.
              </p>
              <div className="disclaimer-highlight-list">
                {['We do not diagnose.', 'We do not treat.', 'We do not cure disease.'].map((text, i) => (
                  <span key={i}>{text}</span>
                ))}
              </div>
              <p>
                All information and products provided are for <strong>educational</strong> and<br />
                <strong>wellness support purposes only.</strong>
              </p>
              <p>
                If you are experiencing pain, discomfort, persistent symptoms, or uncertainty
                about your health, <strong>consult a licensed healthcare provider</strong> before using any supplement.
              </p>
              <p style={{ fontWeight: '700', fontSize: '15px', color: '#2d5016', marginBottom: '20px' }}>
                Your doctor is your primary health authority.
              </p>

              {/* Checkbox */}
              <label className="disclaimer-agreement">
                <input
                  type="checkbox"
                  checked={disclaimerChecked}
                  onChange={(e) => setDisclaimerChecked(e.target.checked)}
                />
                I have read and understand this notice.
              </label>

              {/* Continue Button */}
              <button
                onClick={handleDisclaimerAccept}
                disabled={!disclaimerChecked}
                className="disclaimer-action-btn"
              >
                Continue to Product
              </button>

              {/* Exit link */}
              <div>
                <span
                  onClick={handleDisclaimerExit}
                  className="disclaimer-exit-link"
                >
                  Exit / Return to Store
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={toggleSidebar}
        className="mobile-hamburger"
      >
        {isSidebarOpen ? "<" : ">"}
      </button>
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}
      <div className="sidebar" >
        <div className="sidebar-content">
          <div className="filters-header">
            <h3>Filters</h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="clear-filters"
              >
                Clear All
              </button>
            )}
          </div>
          <h4 className="filter-sectionss">Categories</h4>
          <div className="filter-section">

            {categories
              .filter((category) => categoryCounts[category._id] > 0)
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((category) => (
                <div key={category._id}>
                  <div className="category-item">
                    <label className="filter-option">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category._id)}
                        onChange={() => handleCategoryChange(category._id)}
                      />
                      <span>{category.name} ({categoryCounts[category._id] || 0})</span>
                    </label>
                    {category.subcategories?.length > 0 && (
                      <svg
                        onClick={() => toggleCategoryExpand(category._id)}
                        className="plus-icon"
                        fill="none"
                        stroke="#374151"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        style={{ transform: expandedCategories[category._id] ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                  {category.subcategories?.length > 0 && expandedCategories[category._id] && (
                    <div className="subcategory-list">
                      {category.subcategories
                        .filter((subcategory) => (subcategoryCounts[subcategory._id] || 0) > 0)
                        .map((subcategory) => (
                          <label key={subcategory._id} className="filter-option">
                            <input
                              type="checkbox"
                              checked={filters.subcategories.includes(subcategory._id)}
                              onChange={() => handleSubcategoryChange(subcategory._id)}
                              disabled={!filters.categories.includes(category._id)}
                            />
                            <span>{subcategory.name} ({subcategoryCounts[subcategory._id] || 0})</span>
                          </label>
                        ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
          <h4 className="filter-sectionss">Brands</h4>
          <div className="filter-section">

            {brands
              .filter((brand) => (brandCounts[brand._id] || 0) > 0)
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((brand) => (
                <label key={brand._id} className="filter-option">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand._id)}
                    onChange={() => handleBrandChange(brand._id)}
                  />
                  <span>{brand.name} ({brandCounts[brand._id] || 0})</span>
                </label>
              ))}
          </div>
          <div className="filter-section">
            <h4>Price Range</h4>
            <div className="price-inputs">
              <div>
                <label>Min ($)</label>
                <input
                  name="minPrice"
                  placeholder="0"
                  type="number"
                  min="0"
                  max="1000"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
              </div>
              <div>
                <label>Max ($)</label>
                <input
                  name="maxPrice"
                  placeholder="1000"
                  type="number"
                  min="0"
                  max="1000"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
            <div className="price-slider">
              <div className="slider-track">
                <div
                  className="slider-range"
                  style={{
                    left: `${(parseInt(filters.minPrice) / 1000) * 100}%`,
                    width: `${((parseInt(filters.maxPrice) - parseInt(filters.minPrice)) / 1000) * 100}%`
                  }}
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={filters.minPrice}
                  onChange={(e) => handleSliderChange(e, "min")}
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={filters.maxPrice}
                  onChange={(e) => handleSliderChange(e, "max")}
                />
              </div>
              <div className="slider-labels">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          </div>
          <div className="filter-section">
            <h4>Sort By</h4>
            <select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleFilterChange}
            >
              <option value="All">Default</option>
              <option value="createdAt-desc">Newest</option>
              <option value="createdAt-asc">Oldest</option>
              <option value="purchaseCount-desc">Most Purchased</option>
              <option value="buyPrice-asc">Price: Low to High</option>
              <option value="buyPrice-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div ref={scope} className="main-content">
        {/* Search Input */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {isPaginationLoading && (
          <div className="pagination-overlay">
            <div className="pagination-loader-center">
              <div className="loader-spinner"></div>
              <p>Loading products...</p>
            </div>
          </div>
        )}

        {(loading || isFiltering) && (
          <div className="loader">
            <div className="spinner" />
          </div>
        )}
        {!loading && !isFiltering && error && (
          <div className="error-message">
            <p>{error}</p>
            {hasActiveFilters && <button onClick={clearFilters}>Clear Filters</button>}
          </div>
        )}
        {!loading && !isFiltering && Array.isArray(products) && products.length === 0 && !error && (
          <div className="no-products">No products available</div>
        )}
        {!loading && !isFiltering && Array.isArray(products) && products.length > 0 && (
          <>
            <div className="products-info">
              <p>Showing {products.length} of {pagination.totalItems} products{hasActiveFilters && " (filtered)"}</p>
            </div>
            <div ref={productListRef} className="products-grid">
              {productList}
            </div>
          </>
        )}
        {!loading && pagination.totalPages > 1 && (
          <nav className="pagination">
            <button
              disabled={pagination.currentPage === 1 || isFiltering || isPaginationLoading}
              onClick={() => handlePageChange(1)}
              className="pagination-btn"
              title="First Page"
            >
              ««
            </button>
            <button
              disabled={pagination.currentPage === 1 || isFiltering || isPaginationLoading}
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              className="pagination-btn"
            >
              Previous
            </button>

            <div className="page-numbers">
              <button
                onClick={() => handlePageChange(1)}
                className={`page-btn ${pagination.currentPage === 1 ? 'active' : ''}`}
                disabled={isFiltering || isPaginationLoading}
              >
                1
              </button>

              {pagination.currentPage > 3 && <span className="dots">...</span>}

              {pagination.currentPage > 2 && (
                <button
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  className="page-btn"
                  disabled={isFiltering || isPaginationLoading}
                >
                  {pagination.currentPage - 1}
                </button>
              )}

              {pagination.currentPage !== 1 && pagination.currentPage !== pagination.totalPages && (
                <button
                  className="page-btn active"
                  disabled
                >
                  {pagination.currentPage}
                </button>
              )}

              {pagination.currentPage < pagination.totalPages - 1 && (
                <button
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  className="page-btn"
                  disabled={isFiltering || isPaginationLoading}
                >
                  {pagination.currentPage + 1}
                </button>
              )}

              {pagination.currentPage < pagination.totalPages - 2 && <span className="dots">...</span>}

              {pagination.totalPages > 1 && (
                <button
                  onClick={() => handlePageChange(pagination.totalPages)}
                  className={`page-btn ${pagination.currentPage === pagination.totalPages ? 'active' : ''}`}
                  disabled={isFiltering || isPaginationLoading}
                >
                  {pagination.totalPages}
                </button>
              )}
            </div>

            <button
              disabled={pagination.currentPage === pagination.totalPages || isFiltering || isPaginationLoading}
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              className="pagination-btn"
            >
              Next
            </button>
            <button
              disabled={pagination.currentPage === pagination.totalPages || isFiltering || isPaginationLoading}
              onClick={() => handlePageChange(pagination.totalPages)}
              className="pagination-btn"
              title="Last Page"
            >
              »»
            </button>

            <div className="page-jump">
              <span>Go to:</span>
              <input
                type="number"
                min="1"
                max={pagination.totalPages}
                placeholder={pagination.currentPage}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const page = parseInt(e.target.value);
                    if (page >= 1 && page <= pagination.totalPages) {
                      handlePageChange(page);
                      e.target.value = '';
                    }
                  }
                }}
                className="page-input"
              />
            </div>
          </nav>
        )}
      </div>
      <style>
        {`
          /* Medical Disclaimer Pop-up Styles */
          .disclaimer-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            backdrop-filter: blur(6px);
            animation: disclaimerFadeIn 0.3s ease-out;
          }

          .disclaimer-modal {
            background-color: #fff;
            border-radius: 16px;
            max-width: 600px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            animation: disclaimerModalScale 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            position: relative;
            font-family: inherit;
          }

          .disclaimer-header {
            background: linear-gradient(135deg, #2d5016 0%, #4a7c28 50%, #6b8f3c 100%);
            padding: 25px 30px;
            text-align: center;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            color: #fff;
          }

          @media (max-width: 600px) {
            .disclaimer-header {
              flex-direction: column;
              padding: 20px;
              gap: 15px;
            }
          }

          .disclaimer-close {
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: #fff;
            font-size: 22px;
            cursor: pointer;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
          }

          .disclaimer-close:hover {
            background-color: rgba(255, 255, 255, 0.3);
          }

          .disclaimer-logo {
            width: 80px;
            height: 80px;
            object-fit: contain;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.95);
            padding: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          @media (max-width: 600px) {
            .disclaimer-logo {
              width: 65px;
              height: 65px;
            }
          }

          .disclaimer-title {
            font-size: 22px;
            font-weight: 700;
            margin: 0;
            font-family: 'Georgia', serif;
            line-height: 1.3;
            text-align: left;
            color: #fff;
          }

          @media (max-width: 600px) {
            .disclaimer-title {
              font-size: 18px;
              text-align: center;
            }
          }

          .disclaimer-divider {
            height: 3px;
            background: linear-gradient(90deg, transparent, #c9a54e, transparent);
          }

          .disclaimer-body {
            padding: 25px 35px;
            text-align: center;
          }

          @media (max-width: 600px) {
            .disclaimer-body {
              padding: 20px;
            }
          }

          .disclaimer-body p {
            margin-bottom: 15px;
            line-height: 1.6;
            color: #333;
            font-size: 14px;
          }

          .disclaimer-highlight-list {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 18px 0;
            flex-wrap: wrap;
          }

          .disclaimer-highlight-list span {
            font-weight: 700;
            font-size: 13px;
            color: #1a1a1a;
            padding: 4px 10px;
            background-color: #f1f3f5;
            border-radius: 4px;
            border: 1px solid #e9ecef;
          }

          @media (max-width: 480px) {
            .disclaimer-highlight-list span {
              font-size: 11px;
              padding: 3px 8px;
            }
          }

          .disclaimer-agreement {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin: 20px 0;
            cursor: pointer;
            user-select: none;
            font-weight: 600;
            color: #2d5016;
            font-size: 14px;
          }

          .disclaimer-agreement input {
            width: 18px;
            height: 18px;
            accent-color: #2d5016;
            cursor: pointer;
          }

          .disclaimer-action-btn {
            width: 100%;
            max-width: 350px;
            padding: 14px 28px;
            background-color: #2d5016;
            color: #fff;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 12px;
          }

          .disclaimer-action-btn:hover:not(:disabled) {
            background-color: #1e3b0e;
            transform: translateY(-1px);
          }

          .disclaimer-action-btn:disabled {
            background-color: #ced4da;
            cursor: not-allowed;
            opacity: 0.8;
          }

          .disclaimer-exit-link {
            color: #de7921;
            font-weight: 600;
            text-decoration: underline;
            cursor: pointer;
            font-size: 14px;
            transition: color 0.2s;
          }

          .disclaimer-exit-link:hover {
            color: #c46416;
          }

          @keyframes disclaimerFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes disclaimerModalScale {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }

          .container {
            display: flex;
            min-height: 100vh;
            background: #f5f7fa;
            width: 100% !important;
            max-width: none !important;
            margin: 0;
            padding: 0;
            gap: 0;
          }

          .mobile-hamburger {
            position: fixed;
            left: ${isSidebarOpen ? '18rem' : '0'};
            top: 50%;
            transform: translateY(-50%);
            z-index: 1001;
            background: #77a13d;
            color: white;
            border: none;
            border-radius: ${isSidebarOpen ? '8px 0 0 8px' : '0 8px 8px 0'};
            padding: 0.75rem 0.5rem;
            cursor: pointer;
            display: none;
            transition: left 0.3s ease;
            font-size: 1.5rem;
          }

          .sidebar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 999;
            display: none;
          }

          .sidebar {
            width: 280px;
            min-width: 280px;
            background: white;
            border-right: 1px solid #e5e7eb;
            overflow-y: auto;
            height: 100vh;
            position: sticky;
            top: 0;
          }

          .sidebar-content {
            padding: 1.5rem 1rem;
          }

          .filters-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }

          .filters-header h3 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1f2937;
            margin: 0;
          }

          .clear-filters {
            background: #ef4444;
            color: white;
            padding: 0.375rem 0.625rem;
            border-radius: 0.375rem;
            border: none;
            cursor: pointer;
            font-size: 0.875rem;
          }

          .filter-section {
            margin-bottom: 1rem;
            max-height: 12.5rem;
            overflow-y: auto;
            padding-right: 0.5rem;
          }

           .filter-section h4{
            font-size: 0.875rem;
            font-weight: 600;
            color: #374151;
            margin-bottom: 0.5rem;
          }

          .filter-sectionss{
            font-size: 0.875rem;
            font-weight: 600;
            color: #374151;
            margin-bottom: 0.5rem;
          }

          .filter-option {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.25rem 0;
            cursor: pointer;
          }

          .filter-option input {
            width: 0.875rem;
            height: 0.875rem;
            accent-color: #77a13d;
          }

          .filter-option span {
            font-size: 0.8125rem;
            color: #374151;
          }

          .category-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.25rem 0;
          }

          .plus-icon {
            width: 1rem;
            height: 1rem;
            cursor: pointer;
            transition: transform 0.2s ease;
          }

          .subcategory-list {
            margin-left: 1rem;
            margin-top: 0.25rem;
            max-height: ${expandedCategories ? '500px' : '0'};
            opacity: ${expandedCategories ? '1' : '0'};
            transition: max-height 0.3s ease, opacity 0.3s ease;
            overflow: hidden;
          }

          .subcategory-list .filter-option input {
            width: 0.75rem;
            height: 0.75rem;
          }

          .subcategory-list .filter-option span {
            font-size: 0.75rem;
            color: #4b5563;
          }

          .subcategory-list .filter-option input:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }

          .price-inputs {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
          }

          .price-inputs div {
            flex: 1;
          }

          .price-inputs label {
            display: block;
            font-size: 0.75rem;
            color: #6b7280;
            margin-bottom: 0.25rem;
          }

          .price-inputs input {
            width: 100%;
            padding: 0.375rem 0.625rem;
            border-radius: 0.375rem;
            border: 1px solid #d1d5db;
            font-size: 0.875rem;
          }

          .price-slider {
            position: relative;
            margin-top: 1rem;
          }

          .slider-track {
            position: relative;
            height: 0.375rem;
            background: #d1d5db;
            border-radius: 0.1875rem;
          }

          .slider-range {
            position: absolute;
            height: 0.375rem;
            background: #77a13d;
            border-radius: 0.1875rem;
          }

          .price-slider input[type="range"] {
            position: absolute;
            width: 100%;
            height: 0.375rem;
            background: transparent;
            outline: none;
            cursor: pointer;
            z-index: 2;
            margin: 0;
            top: 0;
            left: 0;
            opacity: 0;
          }

          .slider-labels {
            display: flex;
            justify-content: space-between;
            font-size: 0.75rem;
            color: #6b7280;
            margin-top: 0.5rem;
          }

          .filter-section select {
            width: 100%;
            padding: 0.5rem;
            border-radius: 0.375rem;
            border: 1px solid #d1d5db;
            font-size: 0.875rem;
          }

          .main-content {
            flex: 1;
            padding: 2rem;
            background: #f5f7fa;
            min-width: 0;
            // margin-top:100px !important; ;
          }

          .search-container {
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
          }

          .search-input-wrapper {
            position: relative;
            width: 100%;
            max-width: 600px;
          }

          .search-input {
            width: 100%;
            padding: 0.75rem 1rem 0.75rem 2.5rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            font-size: 1rem;
            background: white;
            transition: border-color 0.2s, box-shadow 0.2s;
          }

          .search-input:focus {
            outline: none;
            border-color: #77a13d;
            box-shadow: 0 0 0 3px rgba(119, 161, 61, 0.1);
          }

          .search-input::placeholder {
            color: #9ca3af;
          }

          .search-icon {
            position: absolute;
            left: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            color: #6b7280;
            pointer-events: none;
          }

          .loader {
            text-align: center;
            padding: 1.25rem;
          }

          .spinner {
            border: 0.25rem solid #f3f4f6;
            border-top: 0.25rem solid #77a13d;
            border-radius: 50%;
            width: 2.5rem;
            height: 2.5rem;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }

          .error-message {
            background: #fef2f2;
            padding: 1.5rem;
            text-align: center;
          }

          .error-message p {
            color: #dc2626;
            margin: 0 0 0.5rem 0;
            font-size: 1rem;
          }

          .error-message button {
            background: #ef4444;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            border: none;
            cursor: pointer;
            font-size: 0.875rem;
          }

          .no-products {
            background: white;
            padding: 1.5rem;
            text-align: center;
            font-size: 1rem;
          }

          .products-info {
            margin-bottom: 1.5rem;
            padding: 0;
            background: transparent;
            font-size: 0.875rem;
            color: #374151;
          }

          .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
          }

          /* Enhanced Product Card Styles */
          .product-card {
            cursor: pointer;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            overflow: hidden;
            transition: all 0.3s ease;
            border: 1px solid #f3f4f6;
            height: auto;
            min-height: 22rem;
          }

          .product-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border-color: #77a13d;
          }

          .product-image-container {
            position: relative;
            width: 100%;
            height: 14rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f9fafb;
            border-bottom: 1px solid #f3f4f6;
          }

          .product-image {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            transition: transform 0.3s ease;
            border-radius: 0.5rem;
          }

          .product-card:hover .product-image {
            transform: scale(1.05);
          }

          .discount-badge {
            position: absolute;
            top: 0.75rem;
            right: 0.75rem;
            background: #ef4444;
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 0.5rem;
            font-size: 0.75rem;
            font-weight: 600;
            z-index: 1;
          }

          .product-info {
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .product-category {
            color: #77a13d;
            font-size: 0.75rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.025em;
            margin: 0;
          }

          .product-name {
            color: #1f2937;
            font-size: 1rem;
            font-weight: 600;
            margin: 0;
            line-height: 1.4;
            min-height: 2.8rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .product-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
          }

          .price-section {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }

          .current-price {
            font-size: 1.375rem;
            font-weight: 700;
            color: #1f2937;
          }

          .original-price {
            font-size: 0.875rem;
            color: #9ca3af;
            text-decoration: line-through;
          }

          .purchase-count {
            background: rgba(119, 161, 61, 0.1);
            color: #77a13d;
            padding: 0.375rem 0.75rem;
            border-radius: 2rem;
            font-size: 0.75rem;
            font-weight: 600;
          }

          .rating-section {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.5rem;
          }

          .stars {
            display: flex;
            gap: 0.125rem;
          }

          .star {
            color: #d1d5db;
            font-size: 1rem;
          }

          .star.filled {
            color: #fbbf24;
          }

          .rating-text {
            font-size: 0.75rem;
            color: #6b7280;
          }

          .add-to-cart-btn {
            width: 100%;
            margin-top: 0.75rem;

            padding: 0.625rem;
            background: #77a13d;
           
            color: white;
            border: none;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: background 0.2s ease;
          }

          .add-to-cart-btn:hover:not(:disabled) {
            background: #6b9532;
          }

          .add-to-cart-btn:disabled {
            background: #d1d5db;
            cursor: not-allowed;
          }

          .pagination-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(4px);
          }

          .pagination-loader-center {
            background: white;
            padding: 2.5rem 3rem;
            border-radius: 1rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            animation: fadeIn 0.3s ease;
          }

          .loader-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #f3f4f6;
            border-top: 4px solid #77a13d;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }

          .pagination-loader-center p {
            margin: 0;
            font-size: 1.125rem;
            font-weight: 600;
            color: #374151;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .pagination {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1.5rem;
            align-items: center;
            flex-wrap: wrap;
          }

          .pagination-btn {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
            transition: all 0.2s ease;
            min-width: 2.5rem;
          }

          .pagination-btn:hover:not(:disabled) {
            background: #f3f4f6;
            border-color: #9ca3af;
          }

          .pagination-btn:disabled {
            background: #f3f4f6;
            cursor: not-allowed;
            color: #9ca3af;
          }

          .page-numbers {
            display: flex;
            gap: 0.25rem;
            align-items: center;
          }

          .page-btn {
            padding: 0.5rem 0.75rem;
            border-radius: 0.5rem;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
            transition: all 0.2s ease;
            min-width: 2.5rem;
            height: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .page-btn:hover:not(:disabled) {
            background: #f3f4f6;
            border-color: #9ca3af;
          }

          .page-btn.active {
            background: #77a13d;
            border-color: #77a13d;
            color: white;
          }

          .page-btn.active:hover {
            background: #6b9532;
            border-color: #6b9532;
          }

          .page-btn:disabled {
            background: #f3f4f6;
            cursor: not-allowed;
            color: #9ca3af;
          }

          .dots {
            padding: 0 0.5rem;
            color: #6b7280;
            font-weight: 500;
          }

          .page-jump {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-left: 1rem;
            padding-left: 1rem;
            border-left: 1px solid #d1d5db;
          }

          .page-jump span {
            font-size: 0.875rem;
            color: #6b7280;
            white-space: nowrap;
          }

          .page-input {
            width: 4rem;
            padding: 0.5rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            text-align: center;
          }

          .page-input:focus {
            outline: none;
            border-color: #77a13d;
            box-shadow: 0 0 0 3px rgba(119, 161, 61, 0.1);
          }

          input[type="range"]::-webkit-slider-thumb {
            width: 1rem;
            height: 1rem;
            background: #77a13d;
            border-radius: 50%;
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -0.3125rem;
            z-index: 3;
          }

          input[type="range"]::-moz-range-thumb {
            width: 1rem;
            height: 1rem;
            background: #77a13d;
            border-radius: 50%;
            cursor: pointer;
            border: none;
            z-index: 3;
          }

          input[type="range"]::-webkit-slider-runnable-track {
            background: transparent;
            height: 0.375rem;
            border-radius: 0.1875rem;
          }

          input[type="range"]::-moz-range-track {
            background: transparent;
            height: 0.375rem;
            border-radius: 0.1875rem;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .sidebar::-webkit-scrollbar {
            width: 0.375rem;
          }

          .sidebar::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          .sidebar::-webkit-scrollbar-thumb {
            background: #77a13d;
            border-radius: 0.1875rem;
          }

          .filter-section::-webkit-scrollbar {
            width: 0.375rem;
          }

          .filter-section::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          .filter-section::-webkit-scrollbar-thumb {
            background: #77a13d;
            border-radius: 0.1875rem;
          }

          @media (max-width: 1024px) {
            .container {
              flex-direction: column;
            }

            .sidebar {
              width: 100%;
              max-width: 20rem;
              position: fixed;
              top: 0;
              transform: ${isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)'};
              z-index: 1000;
              height: 100vh;
            }

            .mobile-hamburger {
              display: flex;
            }

            .sidebar-overlay {
              display: ${isSidebarOpen ? 'block' : 'none'};
            }

            .main-content {
              max-width: 100vw;
              padding: 1rem;
            }

            .search-container {
              margin-bottom: 1rem;
            }

            .search-input-wrapper {
              max-width: 100%;
            }

            .search-input {
              font-size: 0.875rem;
              padding: 0.625rem 1rem 0.625rem 2.25rem;
            }

            .search-icon {
              left: 0.625rem;
            }

            .products-grid {
              grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
              gap: 1rem;
            }

            .product-card {
              min-height: 18rem;
            }

            .product-image-container {
              height: 11rem;
            }

            .product-info {
              padding: 1rem;
            }

            .product-name {
              font-size: 0.9375rem;
              min-height: 2.4rem;
            }

            .current-price {
              font-size: 1.125rem;
            }
          }

          @media (max-width: 640px) {
            .products-grid {
              grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
              gap: 0.75rem;
            }

            .product-card {
              min-height: 16rem;
            }

            .product-image-container {
              height: 9.5rem;
            }

            .PS__ProductCardWrapper p {
              font-size: 0.6875rem;
            }

            .PS__ProductCardWrapper h4 {
              font-size: 0.875rem;
            }

            .PS__ProductCardWrapper h3 {
              font-size: 1rem;
            }

            .filters-header h3 {
              font-size: 1.125rem;
            }

            .filter-section h4 {
              font-size: 0.8125rem;
            }

            .filter-option span {
              font-size: 0.75rem;
            }

            .price-inputs input {
              font-size: 0.8125rem;
            }

            .filter-section select {
              font-size: 0.8125rem;
            }

            .pagination-btn, .page-btn {
              padding: 0.375rem 0.75rem;
              font-size: 0.8125rem;
              min-width: 2rem;
              height: 2rem;
            }

            .page-numbers {
              gap: 0.125rem;
            }

            .dots {
              font-size: 0.8125rem;
            }
          }

          @media (max-width: 480px) {
            .products-grid {
              grid-template-columns: 1fr;
            }

            .product-card {
              min-height: 14rem;
            }

            .product-image-container {
              height: 8rem;
            }

            .main-content {
              padding: 0.75rem;
            }

            .sidebar {
              max-width: 16rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProductLists;