import React from "react";
import Link from "next/link";
import { Container } from "../../globalStyles";

const BannerSlider = ({ title, subtitle }) => (
  <>
    <Container>
      <div className="bannerwraper">
        <div className="bannerSlide-contnt">
          <p>{title}</p>
          <h1 className="banner-title">{subtitle}</h1>
          <Link href="/laptops">
            <a className="banner-button">explore more</a>
          </Link>
        </div>
      </div>
    </Container>
  </>
);

export default BannerSlider;
