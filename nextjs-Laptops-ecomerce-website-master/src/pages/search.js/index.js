/* eslint-disable prettier/prettier */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RecentArival } from "../../../utilits/laptops";
import Layout from "../../components/mainlayout/mainlayout";
import { Container } from "../../globalStyles";
import DetailBaner from "../../DetailComponents/DetailBaner";
import ProductDetail from "../../DetailComponents/ProductDetail";
import Features from "../../components/features";

export default function Result() {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(
      RecentArival.filter(
        (laptop) =>
          laptop.title.toLowerCase().includes(router.query.name) && laptop.brand.toLowerCase() === router.query.brand,
      ),
    );
  }, []);

  return (
    <>
      <Layout>
        <DetailBaner />
        <Container>
          {products.map((laptop) => (
            // eslint-disable-next-line react/jsx-key
            <ProductDetail laptop={laptop} />
          ))}
          <Features title="You Might Also Like" load="true" />
        </Container>
      </Layout>
    </>
  );
}
