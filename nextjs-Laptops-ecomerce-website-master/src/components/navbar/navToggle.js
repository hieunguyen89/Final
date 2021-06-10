import React from "react";
import Link from "next/link";

const NavToggle = ({ navbar }) => (
  <li className="nav-items">
    <Link href="/laptops">
      <a className="nav-links">{navbar.title}</a>
    </Link>
  </li>
);

export default NavToggle;
