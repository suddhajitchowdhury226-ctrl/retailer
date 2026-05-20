import React, { useEffect } from "react";
import { Layout } from "../components/common/Layout/Layout";
import { Footer } from "../components/common/Footer/Footer";
import CBDInfoPage from "../components/CBDInfoPage/CBDInfoPage";

export const VBDinfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <CBDInfoPage />
      <Footer />
    </Layout>
  );
};