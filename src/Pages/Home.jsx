import React, { useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Layout } from "../components/common/Layout/Layout";
import { Herosection } from "../components/Homepage/Herosection/Herosection";
import { SortProduct } from "../components/Homepage/ShortProducts/SortProduct";
import { Productsection } from "../components/Homepage/ProductsSection/Productsection";
import { Footer } from "../components/common/Footer/Footer";

const Offer = lazy(() => import("../components/Homepage/Offer/Offer").then(m => ({ default: m.Offer })));
const OrganicSourcing = lazy(() => import("../components/common/Banner/OrganicSourcing").then(m => ({ default: m.default })));
const QualityIngredients = lazy(() => import("../components/Homepage/QualityIngredients/QualityIngredients").then(m => ({ default: m.default })));
const Blog = lazy(() => import("../components/Homepage/Blog/Blog").then(m => ({ default: m.Blog })));
const About = lazy(() => import("../components/Homepage/About Us/About").then(m => ({ default: m.default })));
const ChamberReview = lazy(() => import("../components/Homepage/ChamberReview/ChamberReview").then(m => ({ default: m.default })));
const Feature = lazy(() => import("../components/Homepage/Features/Feature").then(m => ({ default: m.default })));

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
  transition: { duration: 0.4, ease: "easeOut" }
};

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Herosection />
      
      <motion.div {...fadeIn}>
        <SortProduct />
      </motion.div>

      <motion.div {...fadeIn}>
        <Productsection />
      </motion.div>

      <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
        <motion.div {...fadeIn}>
          <Offer />
        </motion.div>

        <motion.div {...fadeIn}>
          <OrganicSourcing />
        </motion.div>

        <motion.div {...fadeIn}>
          {/* <QualityIngredients /> */}
        </motion.div>

        <motion.div {...fadeIn}>
          <Blog />
        </motion.div>

        <motion.div {...fadeIn}>
          <About />
        </motion.div>

        <motion.div {...fadeIn}>
          <ChamberReview />
        </motion.div>

        <motion.div {...fadeIn}>
          <Feature />
        </motion.div>
      </Suspense>

      <Footer />
    </Layout>
  );
};
