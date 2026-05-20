

import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Share2, Heart } from "lucide-react";
import PorductBgImg1 from "../../../assets/images/bg/bottle.jpg";
import FeatureBgImg1 from "../../../assets/images/bg/FeatureBg1.jpg";
import FeatureBgImg2 from "../../../assets/images/bg/FeatureBg2.jpg";
import SloganImg from "../../../assets/images/bg/SloganImg1.png";

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

export const Productsection = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState(null);
  const [wishlistIds, setWishlistIds] = useState(new Set());
  const [wishlistLoading, setWishlistLoading] = useState(false);
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

  // Build query parameters for fetching new arrivals
  const buildQueryParams = useCallback((page = 1, limit = 10) => {
    const queryParams = new URLSearchParams({
      role: "retailer",
      page: page.toString(),
      limit: limit.toString(),
      sortBy: "createdAt-desc",
    });
    return queryParams;
  }, []);

  // Fetch products
  const fetchProducts = useCallback(
    async (page = 1, limit = 10) => {

      try {
        setError("");
        const queryParams = buildQueryParams(page, limit);

        const response = await fetchWithCancel(
          `${BASE_URL}/api/retailer/get-tirtho-retailer?role=retailer`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response) return;

        const { products, currentPage, totalPages, totalProducts } = response.data;

        setProducts(Array.isArray(products) ? products : []);

        if (Array.isArray(products) && products.length === 0) {
          setError("No new arrivals found.");
        }
      } catch (err) {
        console.error("Error fetching products:", err.response?.data, "Status:", err.response?.status);
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem("userToken");
          setError("Failed to load products. Please try again.");
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
      setWishlistLoading(true);
      const response = await axios.get(`${BASE_URL}/api/auth/wishlist`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const wishlistItems = response.data.wishlist || [];
      const ids = new Set(wishlistItems.map(item => item._id));
      setWishlistIds(ids);
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    } finally {
      setWishlistLoading(false);
    }
  }, [BASE_URL, getToken]);

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  // Listen for wishlist updates from other components
  useEffect(() => {
    const handleWishlistUpdate = () => {
      fetchWishlist();
    };
    window.addEventListener("wishlistUpdated", handleWishlistUpdate);
    return () => {
      window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
    };
  }, [fetchWishlist]);

  // Animation effect
  useEffect(() => {
    if (isInView && Array.isArray(products) && products.length > 0 && !loading) {
      animate(
        ".PS__ProductCardWrapper",
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
      if (!imagePath) return "https://via.placeholder.com/300x300?text=No+Image";
      if (imagePath.startsWith("http")) return imagePath;

      let cleanPath = imagePath.replace(/\\/g, "/");
      if (!cleanPath.startsWith("/")) {
        cleanPath = "/" + cleanPath;
      }

      const fullUrl = `${BASE_URL}${cleanPath}`;
      return fullUrl;
    },
    [BASE_URL]
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
          sellPrice: product.sellPrice,
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
        // alert("Removed from wishlist");
      } else {
        await axios.post(
          `${BASE_URL}/api/auth/wishlist`,
          { productId: product._id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        // alert("Added to wishlist");
      }
      // Dispatch event to update other components if needed
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Wishlist error:", err);
      // Revert on error
      fetchWishlist();
      alert(err.response?.data?.message || "Wishlist action failed");
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

  const productList = useMemo(() => {
    return products.map((product, index) => (
      <div
        key={product._id}
        className="PS__ProductCardWrapper product-card"
        onClick={() => navigate(`/products-details/${product._id}`)}
        style={{
          cursor: "pointer",
          transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          background: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          overflow: "hidden",
          height: "470px",
          position: "relative",
          transformOrigin: "center",
          width: "100%",
          border: "1px solid #e5e7eb",
          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
        }}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            navigate(`/products-details/${product._id}`);
          }
        }}
        onMouseEnter={(e) => {
          if (window.innerWidth > 768) {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
            e.currentTarget.style.borderColor = "#e97717";
            const img = e.currentTarget.querySelector('.product-image');
            if (img) img.style.transform = "scale(1.08)";

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
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
          e.currentTarget.style.borderColor = "#e5e7eb";
          const img = e.currentTarget.querySelector('.product-image');
          if (img) img.style.transform = "scale(1)";

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
        }}
      >


        <div
          className="product-image-container"
          style={{
            width: "100%",
            height: "220px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fafafa",
            position: "relative",
            borderRadius: "16px 16px 0 0"
          }}
        >
          <img
            className="product-image"
            src={getImageUrl(product.images?.[0])}
            alt={product.name || "Product image"}
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
            }}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              transition: "transform 0.3s ease",
              position: "relative",
              zIndex: 2
            }}
          />
{/* 
          {product.stock === 0 && (
            <div
              style={{
                position: "absolute",
                top: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#ef4444",
                color: "white",
                padding: "4px 10px",
                borderRadius: "8px",
                fontSize: "10px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                zIndex: 3
              }}
            >
              Out of Stock
            </div>
          )} */}

          <button
            className="share-btn"
            onClick={(e) => handleShare(e, product)}
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              right: "auto",
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
              zIndex: 10,
              opacity: 0, // Hidden by default
              transform: "translateY(10px) scale(0.9)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
              zIndex: 20, // Increased z-index
              opacity: 0, // Hidden by default
              transform: "translateY(10px) scale(0.9)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "0.05s",
              color: (wishlistIds instanceof Set && wishlistIds.has(product._id)) ? "#ef4444" : "#4b5563"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fee2e2";
              e.currentTarget.style.transform = "translateY(0) scale(1.1)";
              e.currentTarget.style.opacity = "1"; // Ensure opacity is set
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
            title={(wishlistIds instanceof Set && wishlistIds.has(product._id)) ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <Heart size={18} fill={(wishlistIds instanceof Set && wishlistIds.has(product._id)) ? "#ef4444" : "none"} />
          </button>
        </div>

        <div
          style={{
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            height: "250px",
            position: "relative",
            zIndex: 2
          }}
        >
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #e97717, #f59e42)",
            padding: "5px 12px",
            borderRadius: "8px",
            width: "fit-content",
            boxShadow: "0 2px 8px rgba(233, 119, 23, 0.25)"
          }}>
            <p style={{
              color: "#fff",
              fontSize: "10px",
              margin: 0,
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.8px"
            }}>
              {product.category?.name || "NEW"}
            </p>
          </div>

          <h4 style={{
            color: "#1f2937",
            fontSize: "14px",
            fontWeight: "600",
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            lineHeight: "1.5",
            minHeight: "63px",
            maxHeight: "63px"
          }}>
            {product.name}
          </h4>

          <div style={{ marginTop: "auto", paddingTop: "8px" }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px"
            }}>
              <h3 style={{
                fontSize: "22px",
                fontWeight: "700",
                margin: 0,
                color: "#e97717",
                letterSpacing: "-0.5px"
              }}>
                ${(product.sellPrice ?? product.variants?.[0]?.price ?? 0).toFixed(2)}
              </h3>

              {product.stock > 0 && (
                <div style={{
                  background: "#f0fdf4",
                  color: "#16a34a",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  fontSize: "11px",
                  fontWeight: "600",
                  border: "1px solid #bbf7d0"
                }}>
                  {product.stock} left
                </div>
              )}
            </div>
            <button
              className="add-to-cart-btn"
              onClick={(e) => handleAddToCart(e, product)}
              disabled={product.stock === 0 || addingToCart === product._id}
              style={{
                width: "100%",
                padding: "11px",
                background: product.stock === 0 || addingToCart === product._id ? "#e5e7eb" : "linear-gradient(135deg, #77a13d, #6b9532)",
                color: product.stock === 0 || addingToCart === product._id ? "#9ca3af" : "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: product.stock === 0 || addingToCart === product._id ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.3s ease",
                boxShadow: product.stock === 0 || addingToCart === product._id ? "none" : "0 4px 12px rgba(119, 161, 61, 0.3)",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
              onMouseEnter={(e) => {
                if (product.stock > 0 && addingToCart !== product._id) {
                  e.target.style.background = "linear-gradient(135deg, #6b9532, #5d7f2a)";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 20px rgba(119, 161, 61, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                if (product.stock > 0 && addingToCart !== product._id) {
                  e.target.style.background = "linear-gradient(135deg, #77a13d, #6b9532)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 12px rgba(119, 161, 61, 0.3)";
                }
              }}
            >
              <ShoppingCart size={16} />
              {addingToCart === product._id ? 'Adding...' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>


      </div >
    ));
  }, [products, getImageUrl, navigate, addingToCart, handleAddToCart, handleShare, handleWishlist, wishlistIds]);

  return (
    <div
      style={{
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        background: "transparent",
        minHeight: "100vh",


      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          marginBottom: "3rem",
          zIndex: -1
        }}
      >
        <img
          // src={PorductBgImg} 
          alt="wholesale-retailer.com"
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.2
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",

            background: "rgba(0,0,0,0.3)",

          }}
        />
      </div>

      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          padding: "16px"
        }}
        className="product-section-container"
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "16px",
            marginBottom: "16px",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.2)"
          }}
          className="product-section-wrapper"
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent 50%)",
              pointerEvents: "none"
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "16px",
              paddingBottom: "12px",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              position: "relative",
              gap: "12px"
            }}
          >
            <h3
              style={{
                fontSize: "clamp(18px, 4vw, 24px)",
                fontWeight: "600",
                color: "#1f2937",
                margin: 0,
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                letterSpacing: "0.5px",
                textAlign: "center",
                marginTop: "clamp(1rem, 3vw, 3rem)"
              }}
            >
              New Arrivals - Retailer
            </h3>
            <button
              onClick={() => navigate("/products")}
              style={{
                background: "linear-gradient(135deg, #e97717 0%, #e97717 100%)",
                color: "#fff",
                padding: "clamp(8px, 2vw, 10px) clamp(16px, 3vw, 20px)",
                borderRadius: "12px",
                border: "2px solid rgba(255,255,255,0.3)",
                cursor: "pointer",
                fontSize: "clamp(12px, 2vw, 14px)",
                fontWeight: "700",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                width: "fit-content",
                marginBottom: "1rem"
              }}
              className="see-all-btn"
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0px)";
                e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
              }}
              onTouchStart={(e) => {
                e.target.style.transform = "scale(0.95)";
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
                padding: "40px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                backdropFilter: "blur(10px)"
              }}
              role="status"
              aria-live="polite"
            >
              <div
                style={{
                  width: "clamp(30px, 5vw, 40px)",
                  height: "clamp(30px, 5vw, 40px)",
                  border: "4px solid rgba(255,255,255,0.3)",
                  borderTop: "4px solid white",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite"
                }}
              ></div>
              <span
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden"
                }}
              >
                Loading products...
              </span>
            </div>
          )}

          {error && (
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                border: "2px solid rgba(239, 68, 68, 0.3)",
                backdropFilter: "blur(10px)"
              }}
              role="alert"
            >
              <p style={{ color: "#dc2626", fontSize: "16px", margin: 0, fontWeight: "600" }}>
                {error}
              </p>
            </div>
          )}

          {!loading && Array.isArray(products) && products.length === 0 && !error && (
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                border: "2px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)"
              }}
              role="status"
            >
              <p style={{ color: "#374151", fontSize: "16px", margin: 0, fontWeight: "600" }}>
                No new arrivals available
              </p>
            </div>
          )}

          {!loading && Array.isArray(products) && products.length > 0 && (
            <div
              ref={scope}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "20px",
                padding: "16px"
              }}
              className="products-grid-responsive"
            >
              {productList}
            </div>
          )}
        </div>


        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginTop: "24px"
          }}
          className="feature-cards-grid"
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ zIndex: 1 }}>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 16px 0"
              }}>
                Boost Your Best: Unleash Peak Performance!
              </h3>
              <button
                onClick={() => navigate("/products")}
                style={{
                  background: "#3b82f6",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                }}
                onTouchStart={(e) => {
                  e.target.style.transform = "scale(0.95)";
                }}
                onTouchEnd={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                Shop Now
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={SloganImg}
                alt="wholesale-retailer.com"
                loading="lazy"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div>
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                marginBottom: "24px",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1
                }}
              >
                <img
                  src={FeatureBgImg1}
                  alt="FeatureBgImg1"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.2
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.3)"
                  }}
                />
              </div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row"
              }}>
                <div style={{ zIndex: 1 }}>
                  <p style={{ color: "#6b7280", fontSize: "14px", margin: "0 0 8px 0" }}>
                    Energize, Strengthen, Thrive.
                  </p>
                  <h3 style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#1f2937",
                    margin: "0 0 16px 0"
                  }}>
                    Power Up Your Day: Fuel Your Strength!
                  </h3>
                  <button
                    onClick={() => navigate("/products")}
                    style={{
                      background: "#3b82f6",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "600",
                      transition: "all 0.2s ease",
                    }}
                    onTouchStart={(e) => {
                      e.target.style.transform = "scale(0.95)";
                    }}
                    onTouchEnd={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    Shop Now
                  </button>
                </div>
                <div>
                  <img
                    src={PorductBgImg1}
                    alt="wholesale-retailer.com"
                    loading="lazy"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1
                }}
              >
                <img
                  src={FeatureBgImg2}
                  alt="FeatureBgImg2"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.2
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.3)"
                  }}
                />
              </div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row"
              }}>
                <div>
                  <img
                    src={PorductBgImg1}
                    alt="wholesale-retailer.com"
                    loading="lazy"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div style={{ zIndex: 1 }}>
                  <p style={{ color: "#6b7280", fontSize: "14px", margin: "0 0 8px 0" }}>
                    Unleash Your Inner Power.
                  </p>
                  <h3 style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#1f2937",
                    margin: "0 0 16px 0"
                  }}>
                    Elevate Your Energy: Thrive with Vitality!
                  </h3>
                  <button
                    onClick={() => navigate("/products")}
                    style={{
                      background: "#3b82f6",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "600",
                      transition: "all 0.2s ease",
                    }}
                    onTouchStart={(e) => {
                      e.target.style.transform = "scale(0.95)";
                    }}
                    onTouchEnd={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }


          
          /* Desktop - 5 columns */
          @media (min-width: 1600px) {
            .products-grid-responsive {
              grid-template-columns: repeat(5, 1fr) !important;
            }
          }

          /* Large Desktop - 4 columns */
          @media (max-width: 1599px) and (min-width: 1280px) {
            .products-grid-responsive {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }

          /* Laptop - 3 columns */
          @media (max-width: 1279px) and (min-width: 1024px) {
            .products-grid-responsive {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 18px !important;
            }
          }

          /* Tablet - 2 columns */
          @media (max-width: 1023px) and (min-width: 768px) {
            .products-grid-responsive {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 16px !important;
              padding: 12px !important;
            }
            .PS__ProductCardWrapper {
              height: 490px !important;
            }
          }

          /* Small Tablet - 2 columns */
          @media (max-width: 767px) and (min-width: 600px) {
            .products-grid-responsive {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 14px !important;
              padding: 10px !important;
            }
            .PS__ProductCardWrapper {
              height: 480px !important;
            }
          }

          /* Mobile - 1 column */
          @media (max-width: 599px) {
            .products-grid-responsive {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
              padding: 12px !important;
            }
            .PS__ProductCardWrapper {
              height: 480px !important;
              max-width: 500px;
              margin: 0 auto !important;
            }
            .product-image-container {
              height: 200px !important;
            }
            .PS__ProductCardWrapper > div[style*="height: 250px"] {
              height: 280px !important;
            }
            .PS__ProductCardWrapper > div[style*="padding: 18px"] {
              padding: 16px !important;
            }
          }

          /* Additional responsive adjustments */
          @media (max-width: 1023px) {
            div[style*="gridTemplateColumns: repeat(auto-fit, minmax(300px, 1fr))"] {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 767px) {
            div[style*="display: flex"][style*="justifyContent: space-between"] img {
              max-width: 120px !important;
            }
            div[style*="display: flex"][style*="justifyContent: space-between"] h3 {
              font-size: 18px !important;
            }
          }

          @media (max-width: 480px) {
            div[style*="display: flex"][style*="justifyContent: space-between"] h3 {
              font-size: 16px !important;
            }
            h3[style*="fontSize"] {
              font-size: 18px !important;
            }
            h4[style*="fontSize: 14px"] {
              font-size: 13px !important;
            }
          }

          /* Responsive container adjustments */
          @media (max-width: 1279px) {
            .product-section-container {
              padding: 12px !important;
            }
          }

          @media (max-width: 1023px) {
            .product-section-wrapper {
              padding: 14px !important;
            }
            .feature-cards-grid {
              gap: 16px !important;
            }
          }

          @media (max-width: 767px) {
            .feature-cards-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
            div[style*="display: flex"][style*="justifyContent: space-between"] {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
            }
          }

          @media (max-width: 599px) {
            .product-section-container {
              padding: 8px !important;
            }
            .product-section-wrapper {
              padding: 12px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Productsection;