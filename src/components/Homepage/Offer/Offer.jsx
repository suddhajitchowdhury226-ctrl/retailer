

import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Share2, Heart, ShoppingCart } from "lucide-react";

// Custom hook for API calls
const useProductsAPI = (BASE_URL) => {
  const cancelTokenRef = useRef();

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

  return { fetchWithCancel };
};

export const Offer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [wishlistIds, setWishlistIds] = useState(new Set());
  const [addingToCart, setAddingToCart] = useState(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { fetchWithCancel } = useProductsAPI(BASE_URL);

  // Memoized token getter
  const getToken = useCallback(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      return null;
    }
    return token;
  }, [navigate]);

  // Build query parameters for fetching best deals
  const buildQueryParams = useCallback((page = 1, limit = 4) => {
    const queryParams = new URLSearchParams({
      role: "retailer",
      page: page.toString(),
      limit: limit.toString(),
      sortBy: "purchaseCount-desc", // Fetch most purchased products for "Best Deals"
    });
    return queryParams;
  }, []);

  // Fetch products
  const fetchProducts = useCallback(
    async (page = 1, limit = 8) => {
      const token = getToken();
      // if (!token) return;

      try {
        setError("");
        const queryParams = buildQueryParams(page, limit);

        const response = await fetchWithCancel(
          `${BASE_URL}/api/retailer/get-tirtho-retailer?role=retailer`,
          {
            headers: {
              // Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response) return;

        const { products, currentPage, totalPages, totalProducts } = response.data;

        // Use products instead of data
        setProducts(Array.isArray(products) ? products : []);

        if (Array.isArray(products) && products.length === 0) {
          setError("No new arrivals found.");
        }
      } catch (err) {
        console.error("Error fetching products:", err.response?.data, "Status:", err.response?.status);
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem("userToken");
          setError("Failed to load products. Please try again.");
          // navigate("/auth/login");
        } else {
          setError(err.response?.data?.message || "Failed to load products. Please try again.");
        }
        setProducts([]);
      } finally {
        setLoading(false);
      }
    },
    [BASE_URL, navigate, getToken, buildQueryParams, fetchWithCancel]
  );

  // Initial load
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Fetch Wishlist
  const fetchWishlist = useCallback(async () => {
    const token = getToken();
    if (!token) return;

    try {
      const response = await axios.get(`${BASE_URL}/api/auth/wishlist`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const wishlistItems = response.data.wishlist || [];
      const ids = new Set(wishlistItems.map(item => item._id));
      setWishlistIds(ids);
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  }, [BASE_URL, getToken]);

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  // Listen for wishlist updates
  useEffect(() => {
    const handleWishlistUpdate = () => {
      fetchWishlist();
    };
    window.addEventListener("wishlistUpdated", handleWishlistUpdate);
    return () => {
      window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
    };
  }, [fetchWishlist]);

  const handleWishlist = useCallback(async (e, product) => {
    e.stopPropagation();
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/auth/login");
      return;
    }

    const isWishlisted = wishlistIds.has(product._id);

    // Optimistic update
    setWishlistIds(prev => {
      const newSet = new Set(prev);
      if (isWishlisted) {
        newSet.delete(product._id);
      } else {
        newSet.add(product._id);
      }
      return newSet;
    });

    try {
      if (isWishlisted) {
        await axios.delete(`${BASE_URL}/api/auth/wishlist/${product._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(
          `${BASE_URL}/api/auth/wishlist`,
          { productId: product._id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Wishlist error:", err);
      fetchWishlist();
      // alert(err.response?.data?.message || "Wishlist action failed");
    }
  }, [BASE_URL, navigate, wishlistIds, fetchWishlist]);

  const handleShare = useCallback((e, product) => {
    e.stopPropagation();
    const productUrl = `${window.location.origin}/products-details/${product._id}`;

    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name}`,
        url: productUrl,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(productUrl)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => console.error("Could not copy text: ", err));
    }
  }, []);

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
          sellPrice: (product.sellPrice ?? product.variants?.[0]?.price ?? 0),
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
      // alert("Added to cart successfully!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add to cart");
    } finally {
      setAddingToCart(null);
    }
  }, [BASE_URL, navigate]);

  // Animation effect
  useEffect(() => {
    if (isInView && Array.isArray(products) && products.length > 0 && !loading) {
      animate(
        ".Offer__ProductCardWrapper",
        {
          opacity: [0, 1],
          y: ["1vh", "0vh"],
        },
        {
          duration: 0.6,
          ease: "backInOut",
          type: "spring",
          mass: 2.5,
          power: 10,
          delay: stagger(0.25),
        }
      );
    }
  }, [isInView, products, animate, loading]);

  const getImageUrl = useCallback(
    (imagePath) => {
      if (!imagePath) return "https://via.placeholder.com/150";
      return imagePath.startsWith("http") ? imagePath : `${BASE_URL}/${imagePath.replace(/\\/g, "/")}`;
    },
    [BASE_URL]
  );

  const productList = useMemo(() => {
    return products.map((product) => (
      <div
        key={product._id}
        className="Offer__ProductCardWrapper product-card"
        onClick={() => navigate(`/products-details/${product._id}`)}
        style={{
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "white",
          borderRadius: "clamp(12px, 3vw, 16px)", // Responsive border radius
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          overflow: "hidden",
          height: "clamp(260px, 75vw, 320px)", // Responsive height
          position: "relative",
          transformOrigin: "center",
          touchAction: "manipulation", // Optimize for touch
          display: "flex", // Add flex layout
          flexDirection: "column", // Stack children vertically
        }}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            navigate(`/products-details/${product._id}`);
          }
        }}
        onMouseEnter={(e) => {
          if (window.innerWidth > 768) { // Apply hover only on non-touch devices
            e.currentTarget.style.transform = "scale(1.05) translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
            e.currentTarget.style.zIndex = "10";

            const shareBtn = e.currentTarget.querySelector('.share-btn');
            if (shareBtn) {
              shareBtn.style.opacity = "1";
              shareBtn.style.transform = "translateY(0) scale(1)";
            }

            const wishlistBtn = e.currentTarget.querySelector('.wishlist-btn');
            if (wishlistBtn) {
              wishlistBtn.style.opacity = "1";
              wishlistBtn.style.transform = "translateY(0) scale(1)";
            }

            const addToCartBtn = e.currentTarget.querySelector('.add-to-cart-btn');
            if (addToCartBtn) {
              addToCartBtn.style.opacity = "1";
              addToCartBtn.style.transform = "translateX(-50%) translateY(0) scale(1)";
            }

            const image = e.currentTarget.querySelector('.product-image');
            if (image) {
              image.style.transform = "scale(1.1)";
            }

            const imageOverlay = e.currentTarget.querySelector('.image-overlay');
            if (imageOverlay) {
              imageOverlay.style.opacity = "1";
            }
          }
        }}
        onMouseLeave={(e) => {
          if (window.innerWidth > 768) {
            e.currentTarget.style.transform = "scale(1) translateY(0px)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
            e.currentTarget.style.zIndex = "1";

            const shareBtn = e.currentTarget.querySelector('.share-btn');
            if (shareBtn) {
              shareBtn.style.opacity = "0";
              shareBtn.style.transform = "translateY(10px) scale(0.9)";
            }

            const wishlistBtn = e.currentTarget.querySelector('.wishlist-btn');
            if (wishlistBtn) {
              wishlistBtn.style.opacity = "0";
              wishlistBtn.style.transform = "translateY(10px) scale(0.9)";
            }

            const addToCartBtn = e.currentTarget.querySelector('.add-to-cart-btn');
            if (addToCartBtn) {
              addToCartBtn.style.opacity = "0";
              addToCartBtn.style.transform = "translateX(-50%) translateY(20px) scale(0.9)";
            }

            const image = e.currentTarget.querySelector('.product-image');
            if (image) {
              image.style.transform = "scale(1)";
            }

            const imageOverlay = e.currentTarget.querySelector('.image-overlay');
            if (imageOverlay) {
              imageOverlay.style.opacity = "0";
            }
          }
        }}
        onTouchStart={(e) => {
          e.currentTarget.style.transform = "scale(0.98)"; // Subtle press effect for touch
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {/* Gradient overlay for premium look */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(119, 161, 61, 0.02) 0%, rgba(233, 119, 23, 0.02) 100%)",
            pointerEvents: "none",
            zIndex: 1
          }}
        />

        <div
          style={{
            width: "100%",
            height: "clamp(140px, 45vw, 200px)", // Responsive image container height
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
            position: "relative"
          }}
        >
          <img
            src={getImageUrl(product.images?.[0])}
            alt={product.name || "Product image"}
            className="product-image"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: "clamp(8px, 2vw, 12px)", // Responsive border radius
              transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smooth transition
              position: "relative",
              zIndex: 2
            }}
          />

          {/* Black customized overlay */}
          <div
            className="image-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)", // Darker overlay
              backdropFilter: "blur(2px)", // Blur effect
              opacity: 0,
              transition: "opacity 0.3s ease",
              zIndex: 10,
              pointerEvents: "none"
            }}
          />

          <button
            className="share-btn"
            onClick={(e) => handleShare(e, product)}
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "white",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 20,
              opacity: 0,
              transform: "translateY(10px) scale(0.9)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              transitionDelay: "0.1s", // Delay for sequential animation
              color: "#4b5563"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e97717";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateY(0) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "#4b5563";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
            title="Share Product"
          >
            <Share2 size={18} />
          </button>

          <button
            className="wishlist-btn"
            onClick={(e) => handleWishlist(e, product)}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "white",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 20,
              opacity: 0,
              transform: "translateY(10px) scale(0.9)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              transitionDelay: "0.15s", // Delay for sequential animation
              color: (wishlistIds instanceof Set && wishlistIds.has(product._id)) ? "#ef4444" : "#4b5563"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fee2e2";
              e.currentTarget.style.transform = "translateY(0) scale(1.1)";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
            title={(wishlistIds instanceof Set && wishlistIds.has(product._id)) ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <Heart size={18} fill={(wishlistIds instanceof Set && wishlistIds.has(product._id)) ? "#ef4444" : "none"} />
          </button>

          <button
            className="add-to-cart-btn"
            onClick={(e) => handleAddToCart(e, product)}
            disabled={product.stock === 0 || addingToCart === product._id}
            style={{
              position: "absolute",
              bottom: "12px", // Position at bottom
              left: "50%",
              transform: "translateX(-50%) translateY(20px) scale(0.9)", // Start slightly lower
              background: "white",
              border: "none",
              borderRadius: "50%",
              width: "40px", // Slightly larger
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: product.stock === 0 ? "not-allowed" : "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              zIndex: 20,
              opacity: 0,
              transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)", // More pronounced spring effect
              transitionDelay: "0.2s", // Delay for sequential animation
              color: "#16a34a"
            }}
            onMouseEnter={(e) => {
              if (product.stock > 0) {
                e.currentTarget.style.background = "#16a34a";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateX(-50%) translateY(0) scale(1.2)"; // Increased scale
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(22, 163, 74, 0.4)"; // Stronger shadow
              }
            }}
            onMouseLeave={(e) => {
              if (product.stock > 0) {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#16a34a";
                e.currentTarget.style.transform = "translateX(-50%) translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
              }
            }}
            title="Add to Cart"
          >
            {addingToCart === product._id ? (
              <div style={{
                width: "16px",
                height: "16px",
                border: "2px solid #16a34a",
                borderTop: "2px solid transparent",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
              }} />
            ) : (
              <ShoppingCart size={18} />
            )}
          </button>
        </div>

        <div
          style={{
            padding: "clamp(10px, 3vw, 16px)", // Responsive padding
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1, // Let it grow to fill remaining space
            minHeight: "clamp(100px, 30vw, 120px)", // Use minHeight instead of height
            position: "relative",
            zIndex: 2
          }}
        >
          {/* Stock indicator */}
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0", // Right to 0px of the card border
              background: product.stock > 0 ?
                "linear-gradient(135deg, #10b981, #059669)" :
                "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
              padding: "2px 4px",
              borderBottomLeftRadius: "12px", // Modern rounded corner only on bottom-left
              fontSize: "10px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              boxShadow: "-2px 2px 8px rgba(0,0,0,0.15)", // Shadow on the left
              zIndex: 3
            }}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </div>

          <div>
            <p style={{
              color: "#77a13d",
              fontSize: "clamp(10px, 3vw, 12px)", // Responsive font size
              margin: "0 0 clamp(4px, 1.5vw, 6px) 0",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}>
              {product.category?.name || "Unknown"}
            </p>
            <h4 style={{
              color: "#1f2937",
              fontSize: "clamp(14px, 4vw, 16px)", // Responsive font size
              fontWeight: "700",
              margin: "0 0 clamp(6px, 2vw, 8px) 0",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              lineHeight: "1.2"
            }}>
              {product.name}
            </h4>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div style={{
              background: "linear-gradient(135deg, #e97717, #77a13d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              <h3 style={{
                fontSize: "clamp(16px, 5vw, 20px)", // Responsive font size
                fontWeight: "800",
                margin: 0,
                background: "linear-gradient(135deg, #e97717, #77a13d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                ${(product.sellPrice ?? product.variants?.[0]?.price ?? 0).toFixed(2)}
              </h3>
            </div>

            {/* Purchase count indicator */}
            {product.purchaseCount && (
              <div style={{
                background: "rgba(119, 161, 61, 0.1)",
                color: "#77a13d",
                padding: "clamp(3px, 1vw, 4px) clamp(6px, 2vw, 8px)",
                borderRadius: "8px",
                fontSize: "clamp(9px, 2.5vw, 11px)", // Responsive font size
                fontWeight: "600"
              }}>
                {product.purchaseCount} sold
              </div>
            )}
          </div>
        </div>

        {/* Hover effect overlay */}
        <div
          className="card-hover-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(233, 119, 23, 0.05) 0%, rgba(119, 161, 61, 0.05) 100%)",
            opacity: window.innerWidth <= 768 ? 0.1 : 0, // Subtle effect on mobile
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
            zIndex: 2
          }}
        />
      </div>
    ));
  }, [products, getImageUrl, navigate, wishlistIds, handleShare, handleWishlist]);


  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0 auto",
        padding: "clamp(12px, 4vw, 24px)", // Responsive padding
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh"
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #77a13d 0%, #314b0e 100%)",
          borderRadius: "clamp(10px, 3vw, 20px)", // Responsive border radius
          padding: "clamp(12px, 4vw, 32px)", // Responsive padding
          boxShadow: "0 20px 60px rgba(119, 161, 61, 0.15), 0 8px 32px rgba(49, 75, 14, 0.1)",
          marginBottom: "clamp(12px, 4vw, 32px)", // Responsive margin
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.2)"
        }}
      >
        {/* Enhanced glassmorphism overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08), transparent 40%)",
            pointerEvents: "none"
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "clamp(12px, 4vw, 32px)", // Responsive margin
            paddingBottom: "clamp(10px, 3vw, 20px)", // Responsive padding
            borderBottom: "2px solid rgba(255,255,255,0.2)",
            position: "relative",
            flexDirection: window.innerWidth <= 768 ? "column" : "row", // Stack on mobile
            gap: window.innerWidth <= 768 ? "12px" : "0", // Responsive gap
            textAlign: window.innerWidth <= 768 ? "center" : "left" // Center text on mobile
          }}
        >
          <h2 style={{
            fontSize: "clamp(18px, 5.5vw, 28px)", // Responsive font size
            fontWeight: "700",
            color: "white",
            margin: 0,
            textShadow: "0 4px 8px rgba(0,0,0,0.2)",
            letterSpacing: "-0.5px"
          }}>
            Today's Best Deals - Retail
          </h2>
          <button
            onClick={() => navigate("/products")}
            style={{
              background: "linear-gradient(135deg, #e97717 0%, #e97717 100%)",
              color: "#fff",
              padding: "clamp(8px, 2.5vw, 12px) clamp(12px, 4vw, 24px)", // Responsive padding
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "clamp(12px, 3.5vw, 14px)", // Responsive font size
              fontWeight: "700",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              touchAction: "manipulation" // Optimize for touch
            }}
            onMouseEnter={(e) => {
              if (window.innerWidth > 768) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth > 768) {
                e.target.style.transform = "translateY(0px)";
                e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
              }
            }}
            onTouchStart={(e) => {
              e.target.style.transform = "scale(0.98)"; // Subtle press effect
            }}
            onTouchEnd={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            See All
          </button>
        </div>

        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "clamp(30px, 8vw, 60px)", // Responsive padding
              background: "rgba(255,255,255,0.1)",
              borderRadius: "clamp(10px, 3vw, 20px)", // Responsive border radius
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)"
            }}
            role="status"
            aria-live="polite"
          >
            <div style={{
              width: "clamp(30px, 8vw, 50px)", // Responsive spinner size
              height: "clamp(30px, 8vw, 50px)",
              border: "5px solid rgba(255,255,255,0.3)",
              borderTop: "5px solid white",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }}></div>
            <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
              Loading products...
            </span>
          </div>
        )}

        {!loading && error && (
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "clamp(10px, 3vw, 20px)", // Responsive border radius
              padding: "clamp(12px, 4vw, 32px)", // Responsive padding
              textAlign: "center",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              border: "2px solid rgba(239, 68, 68, 0.3)",
              backdropFilter: "blur(10px)"
            }}
            role="alert"
          >
            <p style={{
              color: "white",
              fontSize: "clamp(14px, 4vw, 18px)", // Responsive font size
              margin: 0,
              fontWeight: "600"
            }}>
              {error}
            </p>
          </div>
        )}

        {!loading && Array.isArray(products) && products.length === 0 && !error && (
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "clamp(10px, 3vw, 20px)", // Responsive border radius
              padding: "clamp(12px, 4vw, 32px)", // Responsive padding
              textAlign: "center",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              border: "2px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)"
            }}
            role="status"
          >
            <p style={{
              color: "white",
              fontSize: "clamp(14px, 4vw, 18px)", // Responsive font size
              margin: 0,
              fontWeight: "600"
            }}>
              No best deals available
            </p>
          </div>
        )}

        {!loading && Array.isArray(products) && products.length > 0 && (
          <div
            ref={scope}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(clamp(180px, 40vw, 260px), 1fr))", // Responsive grid
              gap: "clamp(12px, 3vw, 24px)", // Responsive gap
              padding: "clamp(10px, 3vw, 20px)" // Responsive padding
            }}
          >
            {productList}
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .product-card:hover .card-hover-overlay {
            opacity: 1;
          }
          
          @media (max-width: 768px) {
            .Offer__ProductCardWrapper {
              height: clamp(240px, 70vw, 300px) !important; // Adjusted for mobile
            }
            
            .product-card img {
              max-width: 85% !important; // Smaller images on mobile
              max-height: 85% !important;
            }
            
            .product-card .card-hover-overlay {
              opacity: 0.1; // Subtle effect on mobile
            }
          }
          
          @media (max-width: 480px) {
            .Offer__ProductCardWrapper {
              height: clamp(220px, 65vw, 280px) !important; // Further adjust for small screens
            }
            
            .product-card img {
              max-width: 80% !important; // Even smaller images
              max-height: 80% !important;
            }
            
            .product-card {
              border-radius: 10px !important; // Slightly smaller radius
            }
          }
        `}
      </style>
    </div>
  );
};

export default Offer;