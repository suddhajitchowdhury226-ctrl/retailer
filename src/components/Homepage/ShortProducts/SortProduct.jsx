
import React, { useEffect, useState, useCallback, useRef } from "react";
import "./SortProduct.scss";
import { PillBottle } from "lucide-react";
import { stagger, useAnimate, useInView } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-content">
      <div className="loader-spinner"></div>
      <p className="loader-text">Loading categories...</p>
    </div>
  </div>
);

const useCategoriesAPI = (BASE_URL) => {
  const cancelTokenRef = useRef();

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

  useEffect(() => {
    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel("Component unmounted");
      }
    };
  }, []);

  return { fetchWithCancel };
};

export const SortProduct = () => {
  const [categories, setCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { fetchWithCancel } = useCategoriesAPI(BASE_URL);

  const getToken = useCallback(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      setError("Please log in to view categories");
      return null;
    }
    return token;
  }, [navigate]);

  const fetchCategories = useCallback(async () => {
    const token = getToken();

    try {
      setError("");
      setLoading(true);
      const response = await fetchWithCancel(`${BASE_URL}/api/user/retailer-categories`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response) return;

      const data = Array.isArray(response.data) ? response.data : [];
      const sortedCategories = data.sort((a, b) => a.name.localeCompare(b.name));

      setAllCategories(sortedCategories);
      setCategories(sortedCategories.slice(0, 8));

      if (data.length === 0) {
        setError("No categories found.");
      }
    } catch (err) {
      console.error("Error fetching categories:", err.response?.data, "Status:", err.response?.status);
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem("userToken");
        setError("Please log in to view categories");
      } else {
        setError(err.response?.data?.message || "Failed to load categories. Please try again.");
      }
      setCategories([]);
      setAllCategories([]);
    } finally {
      setLoading(false);
    }
  }, [BASE_URL, getToken, fetchWithCancel]);

  const handleViewAll = useCallback(() => {
    setShowAll(true);
    setCategories(allCategories);
  }, [allCategories]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (isInView && Array.isArray(categories) && categories.length > 0 && !loading) {
      animate(
        ".categoryBtn",
        {
          opacity: [0, 1],
          y: ["2vh", "0vh"],
        },
        {
          duration: 0.6,
          ease: "backInOut",
          type: "spring",
          mass: 2.5,
          power: 8,
          delay: stagger(0.25),
        }
      );
    }
  }, [isInView, categories, animate, loading]);

  return (
    <>
      {loading && <PageLoader />}
      <div ref={scope} className="SortProduct__mainWrapper">
      <div className="SP__mainContentWrapper">
        <div className="SP__headerWrapper">
          {loading ? (
            <div style={{
              background: "#e0e0e0",
              borderRadius: "8px",
              height: "40px",
              width: "300px",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                animation: "shimmer 1.5s ease-in-out infinite"
              }}></div>
            </div>
          ) : (
            <h2>Shop by Category - Retail</h2>
          )}
          {!loading && !error && categories.length > 0 && !showAll && allCategories.length > 8 && (
            <button
              onClick={handleViewAll}
              className="viewAllBtn"
            >
              View All Categories
            </button>
          )}
        </div>
        {loading && (
          <div className="SP__categoryBTNWrapper" role="status" aria-live="polite">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="skeleton-btn"
                style={{
                  background: "#e0e0e0",
                  borderRadius: "10px",
                  padding: "6px 15px",
                  minHeight: "40px",
                  minWidth: "120px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                  animation: `shimmer 1.5s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`
                }}></div>
                <div style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "4px",
                  background: "#d0d0d0"
                }}></div>
                <div style={{
                  flex: 1,
                  height: "14px",
                  borderRadius: "4px",
                  background: "#d0d0d0"
                }}></div>
              </div>
            ))}
            <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
              Loading categories...
            </span>
          </div>
        )}
        {!loading && error && (
          <div
            className="SP__categoryBTNWrapper"
            style={{
              textAlign: "center",
              padding: "24px",
              background: "#fef2f2",
              borderRadius: "8px",
              border: "1px solid #fee2e2",
            }}
            role="alert"
          >
            <p style={{ color: "#dc2626", fontSize: "16px", margin: 0 }}>{error}</p>
          </div>
        )}
        {!loading && !error && Array.isArray(categories) && categories.length === 0 && (
          <div
            className="SP__categoryBTNWrapper"
            style={{
              textAlign: "center",
              padding: "24px",
              background: "#f9fafb",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
            role="status"
          >
            <p style={{ color: "#374151", fontSize: "16px", margin: 0 }}>
              No categories available
            </p>
          </div>
        )}
        {!loading && !error && Array.isArray(categories) && categories.length > 0 && (
          <div className="SP__categoryBTNWrapper">
            {categories.map((category, id) => (
              <button
                key={category._id}
                className="categoryBtn"
                onClick={() => navigate(`/products?category=${category._id}`)}
              >
                <span>
                  <PillBottle size={20} color="white" />
                </span>
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .skeleton-btn {
            flex-shrink: 0;
          }
        `}
      </style>  
    </div>
    </>
  );
};

export default SortProduct;