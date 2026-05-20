


import React, { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Productoverview.scss";
import { Rating } from "react-simple-star-rating";
import { Briefcase, Heart, Minus, Plus, ShoppingCart, CheckCircle, AlertCircle, X, MapPin, Share2, Truck, ShieldCheck, CreditCard, Headphones } from "lucide-react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { SimilarProduct } from "../SimilarProduct/SimilarProduct";
import plcaeholderImg from "../../../assets/images/placeholder.png";

// Flavour-specific images for Maximum Cardio product
import grapeImg from "../../../assets/images/grape.png";
import peachImg from "../../../assets/images/peach.png";
import pinacoladaImg from "../../../assets/images/pinacolada.png";

// Spinner Component
const Spinner = ({ size = "medium", color = "#007bff" }) => {
  const sizeMap = {
    small: "20px",
    medium: "40px",
    large: "60px"
  };

  const spinnerStyle = {
    width: sizeMap[size],
    height: sizeMap[size],
    border: "3px solid #f3f3f3",
    borderTop: `3px solid ${color}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    display: "inline-block"
  };

  return (
    <div className="spinner-container" style={{ textAlign: "center", padding: "20px" }}>
      <div style={spinnerStyle}></div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Toast Component
const Toast = ({ message, type, onClose, show }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`toast toast--${type}`}>
      <div className="toast__content">
        <div className="toast__icon">
          {type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
        </div>
        <span className="toast__message">{message}</span>
        <button className="toast__close" onClick={onClose}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

// Full Screen Loader Component
const FullScreenLoader = ({ show, message = "Adding to cart..." }) => {
  if (!show) return null;

  return (
    <div className="fullscreen-loader">
      <div className="fullscreen-loader__backdrop">
        <div className="fullscreen-loader__content">
          <div className="fullscreen-loader__spinner"></div>
          <p className="fullscreen-loader__message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export const Productoverview = () => {
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [addingToCart, setAddingToCart] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedFlavour, setSelectedFlavour] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  // Flavour options for Maximum Cardio product only
  const MAXIMUM_CARDIO_FLAVOURS = ['Orange', 'Grape', 'Peach', 'Pina-Colada'];
  const isMaximumCardio = product?.name?.toLowerCase().includes('maximum cardio');

  // Flavour-specific images mapping for Maximum Cardio (Orange uses backend image)
  const FLAVOUR_IMAGES = {
    'Grape': grapeImg,
    'Peach': peachImg,
    'Pina-Colada': pinacoladaImg
  };

  const { pid } = useParams();
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const cancelTokenRef = useRef();

  console.log("product", product);

  const getImageUrl = useCallback((imagePath) => {
    if (!imagePath) return plcaeholderImg;
    if (imagePath.startsWith("http")) return imagePath;
    // Normalize the path and use BASE_URL from environment
    const normalizedPath = imagePath.replace(/\\/g, "/").replace(/^\/+/, "");
    return `${BASE_URL}/${normalizedPath}`;
  }, [BASE_URL]);

  const fetchReviews = useCallback(async () => {
    if (!pid) return;
    try {
      const response = await axios.get(`${BASE_URL}/api/reviews/product/${pid}`);
      if (response.data.success) {
        setReviews(response.data.reviews || []);
        setRating(response.data.averageRating || 0);
        setTotalReviews(response.data.totalReviews || 0);
      }
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  }, [pid, BASE_URL]);

  const showToast = useCallback((message, type = "success") => {
    setToast({ show: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast({ show: false, message: "", type: "" });
  }, []);

  const checkTokenAndRedirect = useCallback(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      showToast("Please log in to perform this action", "error");
      navigate("/auth/login");
      return false;
    }
    return token;
  }, [navigate, showToast]);

  const fetchWithCancel = useCallback(async (url, config) => {
    if (cancelTokenRef.current) {
      cancelTokenRef.current.cancel('Request cancelled due to new request');
    }

    cancelTokenRef.current = axios.CancelToken.source();

    try {
      const response = await axios.get(url, {
        ...config,
        cancelToken: cancelTokenRef.current.token
      });
      return response;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request cancelled:', error.message);
        return null;
      }
      throw error;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Component unmounted');
      }
    };
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!pid || pid === "undefined") {
        setError("Invalid product ID");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("userToken");
        const response = await fetchWithCancel(
          `${BASE_URL}/api/user/get-single-product/${pid}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response) return; // Request was cancelled

        const { product, similarProducts = [] } = response.data;
        if (!product) {
          setError("Product not found");
          setLoading(false);
          return;
        }

        setProduct(product);
        setSimilarProducts(Array.isArray(similarProducts) ? similarProducts : []);
        // Auto-select first variant if product has variants
        if (product.variants && product.variants.length > 0) {
          setSelectedVariant(product.variants[0]);
        }
        if (product.images?.length > 0) {
          setMainImage(getImageUrl(product.images[0]));
        }

        if (token) {
          // Fetch wishlist status only if user is logged in
          try {
            const wishlistRes = await axios.get(`${BASE_URL}/api/auth/wishlist`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            const wishlistItems = wishlistRes.data.wishlist || [];
            const isInWishlist = wishlistItems.some(item => item._id === product._id);
            setIsWishlisted(isInWishlist);
          } catch (err) {
            console.error("Error fetching wishlist:", err);
            setIsWishlisted(false);
          }
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem("userToken");
          setError("Please log in to view product details");
          navigate("/auth/login");
        } else if (err.response?.status === 400) {
          setError("Invalid product ID format");
        } else if (err.response?.status === 404) {
          setError("Product not found");
        } else {
          setError(err.response?.data?.message || "Failed to load product");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    fetchReviews();
  }, [pid, navigate, getImageUrl, fetchWithCancel, fetchReviews]);

  // Reset or cap quantity when variant changes
  useEffect(() => {
    if (!product) return;

    const currentStock = selectedVariant ? selectedVariant.stock : product.stock;

    if (currentStock > 0 && quantity > currentStock) {
      setQuantity(currentStock);
      showToast(`Quantity adjusted to available stock (${currentStock})`, "info");
    }
  }, [selectedVariant, product, quantity, showToast]);

  const handleRating = useCallback((rate) => {
    setRating(rate);
  }, []);

  const handleQuantityChange = useCallback((action) => {
    const currentStock = selectedVariant ? selectedVariant.stock : product?.stock;

    if (action === "increment" && currentStock > quantity) {
      setQuantity(prev => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }, [product, quantity, selectedVariant]);

  const handleImageClick = useCallback((image) => {
    setMainImage(image);
  }, []);

  const handleAddToCart = useCallback(async () => {
    const token = checkTokenAndRedirect();
    if (!token) return;

    if (!product) return;

    // Determine effective stock
    const currentStock = selectedVariant ? selectedVariant.stock : product.stock;

    if (currentStock === 0) {
      showToast("Product is out of stock", "error");
      return;
    }

    if (quantity > currentStock) {
      showToast(`Only ${currentStock} items available in stock`, "error");
      return;
    }

    // Require flavour selection for Maximum Cardio
    if (isMaximumCardio && !selectedFlavour) {
      showToast("Please select a flavour before adding to cart", "error");
      return;
    }

    setAddingToCart(true);

    try {
      const payload = {
        productId: product._id,
        quantity,
        websiteRole: 'retailer'
      };

      if (selectedVariant) {
        payload.variantId = selectedVariant._id;
      }

      // Add flavour for Maximum Cardio product
      if (isMaximumCardio && selectedFlavour) {
        payload.flavour = selectedFlavour;
      }

      await axios.post(
        `${BASE_URL}/api/user/add-to-cart`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const cartItem = {
        _id: `${product._id}_${selectedVariant?._id || 'default'}_${Date.now()}`,
        product: {
          _id: product._id,
          name: product.name,
          sellPrice: selectedVariant?.price ?? product.sellPrice ?? product.variants?.[0]?.price ?? 0,
          images: product.images,
          stock: selectedVariant?.stock ?? product.stock ?? 0,
        },
        quantity,
        variantId: selectedVariant?._id || null,
        variantDetails: selectedVariant ? {
          variantName: selectedVariant.variantName,
          price: selectedVariant.price,
          stock: selectedVariant.stock,
          sku: selectedVariant.sku
        } : null,
        flavour: (isMaximumCardio && selectedFlavour) ? selectedFlavour : null
      };

      const existingCart = JSON.parse(localStorage.getItem("localCart") || "[]");
      const itemIndex = existingCart.findIndex((item) =>
        item.product._id === product._id &&
        item.variantId === cartItem.variantId &&
        item.flavour === cartItem.flavour
      );

      if (itemIndex > -1) {
        existingCart[itemIndex].quantity += quantity;
      } else {
        existingCart.push(cartItem);
      }

      localStorage.setItem("localCart", JSON.stringify(existingCart));

      window.dispatchEvent(new Event("cartUpdated"));
      showToast(
        `${quantity} ${quantity === 1 ? "item" : "items"} added to cart successfully!`,
        "success"
      );
    } catch (err) {
      console.error("Error adding to cart:", err);
      showToast(err.response?.data?.message || "Failed to add to cart", "error");
    } finally {
      setAddingToCart(false);
    }
  }, [product, quantity, selectedVariant, selectedFlavour, isMaximumCardio, showToast, checkTokenAndRedirect, BASE_URL]);

  const handleBuyNow = useCallback(() => {
    const token = checkTokenAndRedirect();
    if (!token) return;

    if (!product || product.stock === 0) {
      showToast("Product is out of stock", "error");
      return;
    }

    if (quantity > product.stock) {
      showToast(`Only ${product.stock} items available in stock`, "error");
      return;
    }

    console.log(`Buying ${quantity} of ${product.name} now`);
    navigate("/checkout", { state: { productId: pid, quantity } });
  }, [pid, product, quantity, navigate, showToast, checkTokenAndRedirect]);

  const handleWishlist = useCallback(async () => {
    const token = checkTokenAndRedirect();
    if (!token) return;

    try {
      if (isWishlisted) {
        await axios.delete(`${BASE_URL}/api/auth/wishlist/${product._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsWishlisted(false);
        showToast("Removed from wishlist", "success");
        window.dispatchEvent(new Event("wishlistUpdated"));
      } else {
        await axios.post(
          `${BASE_URL}/api/auth/wishlist`,
          { productId: product._id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setIsWishlisted(true);
        showToast("Added to wishlist", "success");
        window.dispatchEvent(new Event("wishlistUpdated"));
      }
    } catch (err) {
      console.error("Wishlist error:", err);
      showToast(err.response?.data?.message || "Wishlist action failed", "error");
    }
  }, [product, isWishlisted, showToast, checkTokenAndRedirect]);

  const totalPrice = useMemo(() => {
    if (!product) return "0.00";
    const price = selectedVariant ? selectedVariant.price : product.sellPrice;
    return (price * quantity).toFixed(2);
  }, [product, selectedVariant, quantity]);

  const tabs = [
    { key: "description", label: "Description", content: product?.description },
    { key: "additional", label: "Additional Information", content: product?.additional },
    { key: "ingredient", label: "Ingredient", content: product?.ingredient },
    { key: "disclaimer", label: "Disclaimer", content: product?.disclaimer },
  ];

  return (
    <div className="product-overview" >
      <FullScreenLoader show={addingToCart} message="Adding to cart..." />
      <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />

      {loading && <Spinner size="large" color="#007bff" />}
      {error && <p className="error">{error}</p>}
      {!loading && !error && product && (
        <>
          <div className="product-overview__container">
            {/* Gallery Section - Thumbnails Left, Main Right */}
            <div className="product-overview__gallery-section">
              <div className="thumbnail-gallery-vertical">
                {product.images?.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail-item ${mainImage === getImageUrl(image) ? "active" : ""}`}
                    onClick={() => handleImageClick(getImageUrl(image))}
                  >
                    <img
                      src={getImageUrl(image)}
                      alt={`${product.name} preview ${index + 1}`}
                      onError={(e) => { e.target.src = plcaeholderImg; }}
                    />
                  </div>
                ))}
              </div>

              <div className="main-image-container">
                <img
                  src={
                    // For Maximum Cardio, use flavour-specific image if available
                    isMaximumCardio && selectedFlavour && FLAVOUR_IMAGES[selectedFlavour]
                      ? FLAVOUR_IMAGES[selectedFlavour]
                      : (mainImage || plcaeholderImg)
                  }
                  alt={product.name}
                  className="main-product-image"
                  onError={(e) => { e.target.src = plcaeholderImg; }}
                />
              </div>
            </div>

            {/* Product Info Section */}
            <div className="product-overview__info-section">
              <div className="product-header-row">
                <div className="header-left">
                  <h4 className="brand-name">Rays Products</h4>
                  <h1 className="product-title">{product.name}</h1>
                </div>
                <div className="header-actions">
                  <button
                    className={`action-btn-icon ${isWishlisted ? "active" : ""}`}
                    onClick={handleWishlist}
                    title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                  >
                    <Heart size={22} fill={isWishlisted ? "#dc2626" : "none"} color={isWishlisted ? "#dc2626" : "#4b5563"} />
                  </button>
                  <button
                    className="action-btn-icon"
                    onClick={() => {
                      navigator.share({
                        title: product.name,
                        text: `Check out ${product.name}`,
                        url: window.location.href
                      }).catch(() => {
                        navigator.clipboard.writeText(window.location.href);
                        showToast('Link copied to clipboard!', 'success');
                      });
                    }}
                    title="Share"
                  >
                    <Share2 size={22} color="#4b5563" />
                  </button>
                </div>
              </div>

              <div className="product-meta-row">
                <span className="product-category">{product.category?.name || "Premium Supplement"}</span>
                {(selectedVariant ? selectedVariant.bin_location : product.bin_location) && (
                  <span className="bin-location-badge">
                    <MapPin size={14} /> Bin: {selectedVariant ? selectedVariant.bin_location : product.bin_location}
                  </span>
                )}
              </div>

              <div className="rating-section-large">
                <Rating
                  initialValue={rating}
                  readonly={true}
                  size={20}
                  allowFraction={true}
                  fillColor="#1a1a1a"
                />
                <span className="review-count">({totalReviews} reviews)</span>
              </div>

              <div className="product-info-tabs" style={{ marginTop: '30px' }}>
                <div className="tabs-header"
                  style={{
                    display: 'inline-flex',
                    flexWrap: 'nowrap',
                    padding: '6px',
                    background: '#f3f4f6',
                    borderRadius: '50px',
                    position: 'relative',
                    gap: '8px',
                    marginBottom: '24px',
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    maxWidth: '100%'
                  }}
                >
                  {tabs.map((tab) => (
                    tab.content && (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                        style={{
                          position: 'relative',
                          padding: '10px 24px',
                          background: 'transparent',
                          border: 'none',
                          color: activeTab === tab.key ? '#fff' : '#6b7280',
                          fontWeight: activeTab === tab.key ? '600' : '500',
                          cursor: 'pointer',
                          fontSize: '0.95rem',
                          zIndex: 2,
                          transition: 'color 0.2s',
                          borderRadius: '50px',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}
                      >
                        {activeTab === tab.key && (
                          <motion.div
                            layoutId="activeTabProduct"
                            className="tab-background"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(135deg, #84cc16 0%, #4d7c0f 100%)',
                              borderRadius: '50px',
                              zIndex: -1,
                              boxShadow: '0 4px 15px rgba(77, 124, 15, 0.3)'
                            }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        {tab.label}
                      </button>
                    )
                  ))}
                </div>

                <div
                  className="tab-content"
                  style={{
                    minHeight: '150px',
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10, x: 20 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, y: -10, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {(() => {
                        const tab = tabs.find(t => t.key === activeTab);
                        if (!tab || !tab.content) return null;

                        const items = tab.content.split(/[•\n]/).filter(item => item.trim().length > 0);

                        return (
                          <div className="info-content-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {items.length > 0 ? (
                              items.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
                                  <div style={{ marginTop: '4px', minWidth: '18px' }}>
                                    <CheckCircle size={16} color="#008744" fill="#e6f7ef" />
                                  </div>
                                  <span style={{ color: '#000000ff', fontSize: '0.95rem', lineHeight: '1.4', fontWeight: "500" }}>
                                    {item.trim()}
                                  </span>
                                </div>
                              ))
                            ) : (
                              <p style={{ lineHeight: '1.6', color: '#444' }}>{tab.content}</p>
                            )}
                          </div>
                        );
                      })()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Buy Box Section */}
              <div className="buy-box-container">
                <div className="stock-status-row">
                  <span className={`status-text ${(selectedVariant ? selectedVariant.stock : product.stock) > 0 ? "in-stock" : "out-of-stock"}`}>
                    {(selectedVariant ? selectedVariant.stock : product.stock) > 0
                      ? `In Stock`
                      : "Out of Stock"}
                  </span>
                </div>

                <div className="purchase-option selected" style={{ cursor: 'default' }}>
                  <div className="option-header">
                    <div className="radio-circle selected"></div>
                    <span className="option-title">Price</span>
                  </div>
                  <div className="price-display">
                    <span className="current-price">${selectedVariant ? selectedVariant.price.toFixed(2) : product.sellPrice.toFixed(2)}</span>
                  </div>
                </div>



                {/* Variants if available */}
                {product.variants && product.variants.length > 0 && (
                  <div className="variants-selection mt-4">
                    <h4 className="text-sm font-bold mb-2 text-[#000000]">Available Options:</h4>
                    <div className="flex flex-wrap font-semibold gap-2 text-[#000000]">
                      {product.variants.map((variant) => (
                        <button
                          key={variant._id}
                          onClick={() => setSelectedVariant(variant)}
                          className={`variant-pill ${selectedVariant?._id === variant._id ? 'active' : ''}`}
                        >
                          {variant.variantName}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Flavour selector for Maximum Cardio only */}
                {isMaximumCardio && (
                  <div className="flavour-selection" style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '10px', color: '#374151' }}>Select Flavour:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {MAXIMUM_CARDIO_FLAVOURS.map((flavour) => (
                        <button
                          key={flavour}
                          onClick={() => setSelectedFlavour(flavour)}
                          style={{
                            padding: '10px 18px',
                            borderRadius: '8px',
                            border: selectedFlavour === flavour ? '2px solid #77a13d' : '2px solid #e5e7eb',
                            backgroundColor: selectedFlavour === flavour ? '#f0f7e6' : '#fff',
                            color: selectedFlavour === flavour ? '#77a13d' : '#4b5563',
                            fontWeight: selectedFlavour === flavour ? '600' : '500',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {flavour}
                        </button>
                      ))}
                    </div>
                    {!selectedFlavour && (
                      <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '8px' }}>Please select a flavour to add to cart</p>
                    )}
                  </div>
                )}

                <div className="actions-row">
                  <div className="quantity-control">
                    <button
                      onClick={() => handleQuantityChange("decrement")}
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange("increment")}
                      disabled={quantity >= (selectedVariant?.stock ?? product.stock)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    className="add-to-cart-btn-primary"
                    onClick={handleAddToCart}
                    disabled={(selectedVariant ? selectedVariant.stock : product.stock) === 0 || addingToCart}
                  >
                    <ShoppingCart size={18} style={{ marginRight: '8px' }} />
                    {addingToCart ? "Adding..." : "Add to Cart"}
                  </button>
                </div>

                <div className="guarantee-badges">
                  <div className="badge-item">
                    <CheckCircle size={16} />
                    <span>100% Money-Back Guarantee</span>
                  </div>
                </div>

              </div>
            </div>
          </div>


          {/* Benefits Feature Strip */}
          <div className="benefits-strip" style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '60px auto 40px',
            padding: '30px 20px',
            backgroundColor: '#fff',
            borderTop: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            {[
              { icon: Truck, title: "FREE SHIPPING", subtitle: "Free On Oder Over $99" },
              { icon: ShieldCheck, title: "GUARANTEE", subtitle: "30 Days Money Back" },
              { icon: CreditCard, title: "SAFE PAYMENT", subtitle: "Safe your online payment" },
              { icon: Headphones, title: "ONLINE SUPORT", subtitle: "We Have Support 24/7" }
            ].map((item, index) => (
              <div key={index} className="benefit-item" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flex: '1 1 200px'
              }}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10, color: "#e97717" }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  style={{ marginBottom: '15px' }}
                >
                  <item.icon size={32} color="#f97316" />
                </motion.div>
                <h4 style={{
                  margin: '0 0 5px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#00934f',
                  textTransform: 'uppercase'
                }}>
                  {item.title}
                </h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#000000', fontWeight: '500' }}>
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          <SimilarProduct similarProducts={similarProducts} getImageUrl={getImageUrl} />

          {/* Reviews Section */}
          <div className="product-reviews-section" style={{ width: '95%', margin: '40px auto', maxWidth: '1200px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
              Customer Reviews
            </h3>

            {reviews.length === 0 ? (
              <p style={{ color: '#666', fontStyle: 'italic' }}>No reviews yet. Be the first to review this product!</p>
            ) : (
              <div className="reviews-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {reviews.map((review, index) => (
                  <div key={review._id || index} className="review-card" style={{
                    backgroundColor: '#fff',
                    padding: '24px',
                    borderRadius: '8px',
                    border: '1px solid #eee',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}>
                    <div className="review-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="avatar-placeholder" style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          backgroundColor: '#f0f0f0',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontWeight: '600',
                          color: '#555',
                          fontSize: '1.1rem'
                        }}>
                          {review.user?.name?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600', color: '#333' }}>{review.user?.name || 'Anonymous User'}</h4>
                          <span style={{ fontSize: '0.85rem', color: '#888' }}>
                            {new Date(review.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                          </span>
                        </div>
                      </div>
                      <Rating
                        initialValue={review.rating}
                        readonly={true}
                        size={20}
                        allowFraction={true}
                        fillColor="#1a1a1a"
                      />
                    </div>
                    <p style={{ margin: 0, color: '#444', lineHeight: '1.6', fontSize: '1rem' }}>{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>


        </>
      )}
    </div>
  );
};