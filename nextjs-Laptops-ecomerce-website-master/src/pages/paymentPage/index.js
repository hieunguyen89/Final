import React, { useState, useEffect } from "react";
import { Container } from "../../globalStyles";
import Spining from "../../components/Spining";
import Hero from "../../components/Banner/Hero";
import BannerSlider from "../../components/Banner/bannerSlider";
import Layout from "../../components/mainlayout/mainlayout";
import PagesContent from "../../deliveryComponent/PagesContent";

const LegalPage = () => {
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
        <Hero hero="paymentbanner">
          <BannerSlider title="secure payment page" subtitle="we use SSL for securing your payments" />
        </Hero>
        <Container>
          <PagesContent
            title="Secure payment"
            subtitle="Our secure payment
With SSL"
          />
        </Container>
      </Layout>
    </>
  );
};

export default LegalPage;
