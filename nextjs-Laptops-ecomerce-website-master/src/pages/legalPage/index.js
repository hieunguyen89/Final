import React, { useState, useEffect } from "react";

import GlobalStyle, { Container } from "../../globalStyles";
import Layout from "../../components/mainlayout/mainlayout";
import Spining from "../../components/Spining";
import Hero from "../../components/Banner/Hero";
import BannerSlider from "../../components/Banner/bannerSlider";

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
        <Hero hero="legalbanner">
          <BannerSlider title="legal active page" subtitle="This Online store was created using Nextjs" />
        </Hero>
        <Container>
          <PagesContent
            title="Legal Notice"
            subtitle="Legal
Credits"
          />
        </Container>
      </Layout>
    </>
  );
};

export default LegalPage;
