

import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Footer.scss";
import {
  ArrowRightLeft,
  ArrowUp,
  CreditCard,
  LifeBuoy,
  Mail,
  Phone,
  Repeat2,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../../assets/images/logos/WholesaleLogo2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const useCategoriesAPI = (BASE_URL) => {
  const cancelTokenRef = useRef();
  const activeRequestRef = useRef(null);

  const fetchWithCancel = useCallback(async (url, config) => {
    if (cancelTokenRef.current && activeRequestRef.current !== url) {
      cancelTokenRef.current.cancel("Request cancelled due to new request");
    }

    cancelTokenRef.current = axios.CancelToken.source();
    activeRequestRef.current = url;

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
    } finally {
      activeRequestRef.current = null;
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

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5555";
  const { fetchWithCancel } = useCategoriesAPI(BASE_URL);

  // const getToken = useCallback(() => {
  //   const token = localStorage.getItem("userToken");
  //   if (!token) {
  //     setError("Please log in to view categories");
  //     return null;
  //   }
  //   return token;
  // }, []);

  const fetchCategories = useCallback(async () => {
    // const token = getToken();
    // if (!token) return;

    try {
      setError("");
      setLoading(true);
      const response = await fetchWithCancel(`${BASE_URL}/api/user/retailer-categories`);
      if (!response) return;

      const data = Array.isArray(response.data) ? response.data : [];
      const sortedCategories = data.sort((a, b) => a.name.localeCompare(b.name));
      setCategories(sortedCategories.slice(0, 12));
      if (data.length === 0) {
        setError("No categories found.");
      }
    } catch (err) {
      console.error("Error fetching categories:", err.response?.data, "Status:", err.response?.status);
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem("userToken");
        setError("Please log in to view categories");
        navigate("/login");
      } else {
        setError(err.response?.data?.message || "Failed to load categories. Please try again.");
      }
      setCategories([]);
    } finally {
      setLoading(false);
    }
  }, [BASE_URL, fetchWithCancel, navigate]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Split categories into two groups of 6
  const firstColumnCategories = categories.slice(0, 6);
  const secondColumnCategories = categories.slice(6, 12);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="Footer__mainWrapper">
      <div className="Footer__ContentWrapper">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:portrait:grid-cols-2 grid-cols-2 md:landscape:grid-cols-4 w-full gap-3">
          <div className="flex justify-start items-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:portrait:gap-5 md:landscape:gap-5 gap-2">
            <div className="text-[var(--color-seconday)]">
              <Truck size={40} />
            </div>
            <div className="flex flex-col gap-0">
              <h4 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[1.3dvw] md:landscape:text-[1.3dvw] text-[3.8dvw] font-[600] text-[#fff] mainFont uppercase">
                Free Shipping
              </h4>
              <p className="text-white font-[400] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1dvw] md:landscape:text-[1dvw] text-[2.5dvw]">
                On Orders Over $99
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:portrait:gap-5 md:landscape:gap-5 gap-2">
            <div className="text-[var(--color-seconday)]">
              <Repeat2 size={40} />
            </div>
            <div className="flex flex-col gap-0">
              <h4 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[1.3dvw] md:landscape:text-[1.3dvw] text-[3.8dvw] font-[600] text-[#fff] mainFont uppercase">
                GUARANTEE
              </h4>
              <p className="text-white font-[400] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1dvw] md:landscape:text-[1dvw] text-[2.5dvw]">
                30 Days Money Back
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:portrait:gap-5 md:landscape:gap-5 gap-2">
            <div className="text-[var(--color-seconday)]">
              <CreditCard size={40} />
            </div>
            <div className="flex flex-col gap-0">
              <h4 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[1.3dvw] md:landscape:text-[1.3dvw] text-[3.8dvw] font-[600] text-[#fff] mainFont uppercase">
                SAFE PAYMENT
              </h4>
              <p className="text-white font-[400] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1dvw] md:landscape:text-[1dvw] text-[2.5dvw]">
                Safe your online payment
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:portrait:gap-5 md:landscape:gap-5 gap-2">
            <div className="text-[var(--color-seconday)]">
              <LifeBuoy size={40} />
            </div>
            <div className="flex flex-col gap-0">
              <h4 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[1.3dvw] md:landscape:text-[1.3dvw] text-[3.8dvw] font-[600] text-[#fff] mainFont uppercase">
                ONLINE SUPPORT
              </h4>
              <p className="text-white font-[400] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1dvw] md:landscape:text-[1dvw] text-[2.5dvw]">
                We Have Support 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="w-full grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:portrait:grid-cols-2 md:landscape:grid-cols-4 grid-cols-1 gap-8 border-t border-white py-5">
          <div className="Footer__leftWrapper">
            <div className="2xl:w-[20dvw] xl:w-[20dvw] lg:w-[20dvw] md:portrait:w-[20dvw] md:landscape:w-[20dvw] w-[60dvw] h-auto my-5">
              <img src={Logo} alt="logo" />
            </div>
            <p className="text-white paraFont 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1dvw] md:landscape:text-[1dvw] text-[3.5dvw] my-3">
              Use of Ray’s Healthy Living (RHL) products and results may vary
              with each individual. Vitamins, herbs, supplements, minerals, home
              grown formulas, and alternative health products on this site have
              not been assessed by the U.S. Food and Drug Administration (FDA).
            </p>
          </div>
          <div className="linksMainWrapper">
            <h3 className="mainFont 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] md:portrait:text-[1.5dvw] md:landscape:text-[1.5dvw] text-[7dvw] text-white font-[500] my-1.5">
              Quick Links
            </h3>
            <ul className="flex flex-col text-white gap-2 px-2 text-[4dvw] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[1.2dvw] md:landscape:text-[1.2dvw]">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Products" },
                { to: "/about", label: "About" },
                { to: "/blogs", label: "Blog" },
                { to: "/contact", label: "Contact" },
                { to: "/conditionofuse", label: "Condition of Use" },
                { to: "/return-policy", label: "Shipping & Return" },
                { to: "/private-policy", label: "Private Notice" },
                { to: "/delivery-policy", label: "Delivery Policy" },
                { to: "/our-testimonials", label: "Our Testimonial" },
                { to: "/commenting-policy", label: "Commenting Policy" },
                { to: "/faq", label: "FAQ" },
                { to: "/my-story", label: "My Story" },
              ].map((link) => (
                <motion.li
                  key={link.to}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Link to={link.to} >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="linksMainWrapper">
            <h3 className="mainFont 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] md:portrait:text-[1.5dvw] md:landscape:text-[1.5dvw] text-[7dvw] text-white font-[500] my-1.5">
              Categories
            </h3>
            {loading ? (
              <p className="text-white text-[4dvw] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[1.2dvw] md:landscape:text-[1.2dvw]">
                Loading categories...
              </p>
            ) : error ? (
              <p className="text-red-400 text-[4dvw] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[1.2dvw] md:landscape:text-[1.2dvw]">
                {error}
              </p>
            ) : (
              <ul className="flex flex-col text-white gap-2 px-2 text-[4dvw] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[1.2dvw] md:landscape:text-[1.2dvw]">
                {categories.map((category) => (
                  <motion.li
                    key={category._id}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Link to={`/products?category=${category._id}`}>
                      {category.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
          <div className="linksMainWrapper">
            <h3 className="mainFont 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] md:portrait:text-[1.5dvw] md:landscape:text-[1.5dvw] text-[7dvw] text-white font-[500] my-1.5">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 paraFont text-[4dvw] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[1.2dvw] md:landscape:text-[1.2dvw]">
              <Link className="text-white cursor-default">
                70 Solomons Island Rd S Prince Frederick MD 20678. United States
              </Link>
              <Link
                to="tel:+1(443) 432-3295"
                className="text-white hover:text-[var(--color-seconday)]"
              >
                +1(443) 432-3295
              </Link>
              <Link
                to="mailto:info@rayshealthyliving.com"
                className="text-white hover:text-[var(--color-seconday)]"
              >
                info@rayshealthyliving.com
              </Link>
              <div className="mt-3">
                <iframe 
                  border="0" 
                  frameBorder="0" 
                  scrolling="no"
                  style={{ border: 0, height: '68px', width: '150px', overflow: 'hidden' }} 
                  src="https://seal-dc-easternpa.bbb.org/frame/ruhzbum/bbb-236042142.png?chk=6200EF3C44"
                  title="BBB Accredited Business"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", padding: "2rem 0", borderTop: "1px solid white" }}>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://rayonewholesale.com", "_blank")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.875rem 2rem",
              background: "linear-gradient(135deg, #10b981, #059669)",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              fontWeight: "700",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(16, 185, 129, 0.35)",
              fontFamily: "'Poppins', 'Inter', sans-serif",
              letterSpacing: "0.025em"
            }}
          >
            <ArrowRightLeft size={20} />
            Switch to Wholesale
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollToTop}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
            }}
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
        <div className="text-[3.5dvw] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[1.1dvw] md:landscape:text-[1.1dvw] text-white text-center border-t border-white py-4">
          <p style={{ width: "60%", margin: "auto", paddingBottom: ".8rem" }}>
            *Disclaimer: Statements made, or products sold through this website, have not been evaluated by the United States Food and Drug Administration. They are not intended to diagnose, treat, cure or prevent any disease.
          </p>
          <p>Copyright © 2025 Rays Healthy Living</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
export default React.memo(Footer);