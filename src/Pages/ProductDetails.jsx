import React, { useEffect, useState } from "react";
import { Navbar } from "../components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";
import { Productoverview } from "../components/Productdetails/Productoverview/Productoverview";
import { SimilarProduct } from "../components/Productdetails/SimilarProduct/SimilarProduct";
import { Layout } from "../components/common/Layout/Layout";
import "./ProductDetails.scss";

export const ProductDetails = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate initial page load
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <div className="page-loader">
        <div className="loader-content">
          <div className="loader-spinner"></div>
          <p className="loader-text">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Layout>
        <Productoverview />
        {/* <SimilarProduct /> */}
        <Footer />
      </Layout>
    </>
  );
};
