import React, { useEffect, useState, useCallback, useRef } from "react";
import "./SimilarProduct.scss";
import { stagger, useAnimate, useInView } from "framer-motion";
import { Itemcard } from "../../common/UI/Itemcard/Itemcard";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CheckCircle, AlertCircle, X, Share2 } from "lucide-react";

const Toast = ({ message, type, onClose, show }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`toast-notification toast-${type}`}>
      <div className="toast-icon">
        {type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
      </div>
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={onClose}>
        <X size={16} />
      </button>
    </div>
  );
};

export const SimilarProduct = ({ similarProducts = [], getImageUrl }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const navigate = useNavigate();
  const { pid } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [wishlistedProducts, setWishlistedProducts] = useState(new Set());
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const cancelTokenRef = useRef();

  const showToast = useCallback((message, type = "success") => {
    setToast({ show: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast({ show: false, message: "", type: "" });
  }, []);

  const fetchWithCancel = useCallback(async (url, config) => {
    if (cancelTokenRef.current) {
      cancelTokenRef.current.cancel("Request cancelled due to new request");
    }

    cancelTokenRef.current = axios.CancelToken.source();

    try {
      const response = await axios.get(url, {
        ...config,
        cancelToken: cancelTokenRef.current.token,
      });
      return response;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request cancelled:", error.message);
        return null;
      }
      throw error;
    }
  }, []);

  const handleProductClick = useCallback((productId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/products-details/${productId}`);
  }, [navigate]);

  const handleAddToCart = useCallback(async (product) => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      showToast("Please log in to add items to cart", "error");
      setTimeout(() => navigate("/auth/login"), 1500);
      return;
    }

    try {
      await axios.post(
        `${BASE_URL}/api/user/add-to-cart`,
        { productId: product._id, quantity: 1, websiteRole: 'retailer' },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const cartItem = {
        _id: `${product._id}_${Date.now()}`,
        product: { _id: product._id, name: product.name, sellPrice: product.sellPrice, images: product.images, stock: product.stock },
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
      showToast("Added to cart successfully!", "success");
    } catch (err) {
      console.error("Error adding to cart:", err);
      showToast(err.response?.data?.message || "Failed to add to cart", "error");
    }
  }, [BASE_URL, navigate, showToast]);

  const handleWishlist = useCallback(async (product) => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      showToast("Please log in to manage wishlist", "error");
      setTimeout(() => navigate("/auth/login"), 1500);
      return;
    }

    try {
      const isWishlisted = wishlistedProducts.has(product._id);

      if (isWishlisted) {
        await axios.delete(`${BASE_URL}/api/auth/wishlist/${product._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setWishlistedProducts(prev => {
          const newSet = new Set(prev);
          newSet.delete(product._id);
          return newSet;
        });
        showToast("Removed from wishlist", "success");
      } else {
        await axios.post(
          `${BASE_URL}/api/auth/wishlist`,
          { productId: product._id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setWishlistedProducts(prev => new Set(prev).add(product._id));
        showToast("Added to wishlist", "success");
      }
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Wishlist error:", err);
      showToast(err.response?.data?.message || "Wishlist action failed", "error");
    }
  }, [BASE_URL, navigate, wishlistedProducts, showToast]);

  const handleShare = useCallback(async (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    const shareData = {
      title: product.name,
      text: `Check out ${product.name} on Rays Healthy Living!`,
      url: `${window.location.origin}/products-details/${product._id}`
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        showToast("Link copied to clipboard!", "success");
      } catch (err) {
        console.error('Failed to copy:', err);
        showToast("Failed to copy link", "error");
      }
    }
  }, [showToast]);

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

        const { product } = response.data;
        if (!product) {
          setError("Product not found");
          setLoading(false);
          return;
        }

        setProduct(product);
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

    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel("Component unmounted");
      }
    };
  }, [pid, navigate, fetchWithCancel]);

  useEffect(() => {
    console.log("Rendering SimilarProduct with similarProducts:", similarProducts);

    if (isInView && Array.isArray(similarProducts) && similarProducts.length > 0) {
      animate(
        ".product-card",
        {
          opacity: [0, 1],
          y: [30, 0],
          scale: [0.95, 1],
        },
        {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: stagger(0.08, { startDelay: 0.1 }),
        }
      );
    }
  }, [isInView, similarProducts, animate]);



  return (
    <div className="similar-products">
      <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />
      {loading && <p className="loading">Loading product details...</p>}
      {error && <p className="error">{error}</p>}

      <div className="section-header">
        <h2 className="section-title">
          <span className="title-text">Customers also viewed</span>
          <span className="title-accent"></span>
        </h2>
        {Array.isArray(similarProducts) && similarProducts.length > 4 && (
          <button className="view-all-btn">
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      {!Array.isArray(similarProducts) || similarProducts.length === 0 ? (
        <div className="no-products">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="empty-icon">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
            <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>No similar products available</p>
        </div>
      ) : (
        <div ref={scope} className="product-grid">
          {similarProducts.map((product, index) => (
            <div
              key={product._id}
              className="product-card"
              onClick={() => handleProductClick(product._id)}
              style={{ opacity: 0 }}
              onMouseEnter={(e) => {
                const shareBtn = e.currentTarget.querySelector('.share-btn-similar');
                if (shareBtn) {
                  shareBtn.style.opacity = "1";
                  shareBtn.style.transform = "translateY(0) scale(1)";
                }
              }}
              onMouseLeave={(e) => {
                const shareBtn = e.currentTarget.querySelector('.share-btn-similar');
                if (shareBtn) {
                  shareBtn.style.opacity = "0";
                  shareBtn.style.transform = "translateY(10px) scale(0.9)";
                }
              }}
            >
              <div className="card-content">
                <div className="product-badge">
                  {product.stock > 5 && <span className="badge popular">Popular</span>}
                  {product.stock <= 5 && product.stock > 0 && <span style={{ fontSize: "12px", padding: "2px 4px" }} className="badge limited">Limited</span>}
                </div>

                <button
                  className="share-btn-similar"
                  onClick={(e) => handleShare(e, product)}
                  style={{
                    position: "absolute",
                    top: "32px",
                    left: "30px",
                    backgrund: "white",
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
                <Itemcard
                  id={product._id}
                  image={getImageUrl(product.images?.[0] || "")}
                  company={product.category?.name || product.category || "IMMUNE SYSTEM SUPPORT"}
                  title={product.name}
                  price={product.sellPrice}
                  stock={product.stock > 0 ? "In Stock" : "Out of Stock"}
                  isWishlisted={wishlistedProducts.has(product._id)}
                  onWishlist={() => handleWishlist(product)}
                  onAddToCart={() => handleAddToCart(product)}
                />
                <div className="quick-actions">
                  <button className="action-btn" onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleWishlist(product);
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={wishlistedProducts.has(product._id) ? "red" : "none"}>
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="action-btn primary" onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleAddToCart(product);
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 2L3 6v6c0 3.31 2.69 6 6 6h6c3.31 0 6-2.69 6-6V6l-6-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 7v10m-5-5h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};