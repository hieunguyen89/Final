import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Features from "../../components/features";
import Layout from "../../components/mainlayout/mainlayout";
import { Container } from "../../globalStyles";
import DetailBaner from "../../DetailComponents/DetailBaner";
import Spining from "../../components/Spining";
import { RecentArival } from "../../../utilits/Laptops";
import ProductDetail from "../../DetailComponents/ProductDetail";

const LaptopDetail = () => {
  const [spining, setSpining] = useState(true);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    setSpining(true);
    setTimeout(() => {
      setSpining(false);
    }, 2000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // eslint-disable-next-line no-shadow
  const laptop = RecentArival.find((laptop) => laptop.slug === slug);

  if (!laptop) {
    return (
      <div className="error">
        <h3> no such room could be found...</h3>
        <Link href="/" className="btn-primary">
          <a>back to home</a>
        </Link>
      </div>
    );
  }
  return (
    <>
      <Layout>
        <Spining spining={spining} />

        <DetailBaner />
        <Container>
          <ProductDetail laptop={laptop} />
          <Features title="You Might Also Like" load="true" />
        </Container>
      </Layout>
    </>
  );
};

export default LaptopDetail;
