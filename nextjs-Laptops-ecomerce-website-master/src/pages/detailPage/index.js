import React, { useState, useEffect } from "react";
import Layout from "../../components/mainlayout/mainlayout";
import Features from "../../components/features";
import { Container } from "../../globalStyles";
import Spining from "../../components/Spining";
import Hero from "../../components/Banner/Hero";
import BannerSlider from "../../components/Banner/bannerSlider";

const LaptopDetail = () => {
  const [spining, setSpining] = useState(true);
  useEffect(() => {
    setSpining(true);
    setTimeout(() => {
      setSpining(false);
    }, 2000);
  }, []);

  return (
    <>
      <Layout>
        <Spining spining={spining} />

        <Hero hero="detailbanner">
          <BannerSlider title="laptops page" subtitle="find the laptop that suits your needs" />
        </Hero>
        <Container>
          <Features title="You Might Also Like" load="true" />
        </Container>
      </Layout>
    </>
  );
};

export default LaptopDetail;
