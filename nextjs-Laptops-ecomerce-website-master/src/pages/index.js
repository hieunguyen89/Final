import React, { useState, useEffect } from "react";
import OfferBaner from "../components/Banner/OfferBaner";
import CampanyLogos from "../components/Campanies";
import Features from "../components/features";
import Services from "../components/services";
import SpecialPRoducts from "../components/SpecialProducts.js";
import Spining from "../components/Spining";
import Subbaners from "../components/SubBanner";
import { SubbannerRight, SubbannerLeft } from "../../utilits/Laptops";
import { Container } from "../globalStyles";
import Layout from "../components/mainlayout/mainlayout";
import BannerSlider from "../components/Banner/bannerSlider";

import Hero from "../components/Banner/Hero";

const index = () => {
  const [spining, setSpining] = useState(true);
  useEffect(() => {
    setSpining(true);
    setTimeout(() => {
      setSpining(false);
    }, 1000);
  }, []);
  return (
    <>
      <Spining spining={spining} />
      <Layout>
        <Hero>
          <BannerSlider title="home page" subtitle="welcome our site to get the best laptop" />
        </Hero>
        <Container>
          <Subbaners subbanners={SubbannerRight} />
          <OfferBaner />
          <Features title="Recent Arrival" />
          <Services />
          <SpecialPRoducts />

          <CampanyLogos />
          <Subbaners inverse="true" subbanners={SubbannerLeft} />
        </Container>
      </Layout>
    </>
  );
};

export default index;
