/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
import { BiSupport, BiWorld } from "react-icons/bi";
import { GrDeliver, GrMoney } from "react-icons/gr";
import { MdLocationOn, MdLocalHospital, MdEmail } from "react-icons/md";
import { FaFax, FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaGooglePlusG } from "react-icons/fa";

export const Navheader = [
  {
    id: 1,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    title: "laptops",
    link: "/laptops",
  },
  {
    id: 3,
    title: "delivery",
    link: "/deliveryPage",
  },

  {
    id: 4,
    title: "Login",
    link: "/loginPage",
  },
  {
    id: 5,
    title: "Sign Up",
    link: "/signupPage",
  },
  {
    id: 6,
    title: "more",
    link: "/more",
  },
];

/* 
'laptop brands',
	'mac os',
	'toshiba',
	'sumsong',
	'dell',
	'lenova',
	'hp',
	'accer',
	'more categories',
	'home',
	'featured',
	'shipment',
	'delivery',
	'legal active',
	'secure payment',
	'more',




*/
export const SocialMedia = [<FaFacebookF />, <FaTwitter />, <FaYoutube />, <FaGooglePlusG />, <FaInstagram />];

export const PaymentBrands = [
  <img src="/img/visa.png" alt="visa-card" />,
  <img src="/img/maestro.png" alt="maestro-card" />,
  <img src="/img/american_express.png" alt="american_express-card" />,
  <img src="/img/master_card.png" alt="master-card" />,
  <img src="/img/paypal.png" alt="paypal-card" />,
];

export const OurService = [
  {
    icon: <GrDeliver />,
    title: "same Day Delivery",
    description: "somalia Orders Only",
  },
  {
    icon: <BiSupport />,
    title: "Best Online Support",
    description: "Hours : 7AM - 10PM",
  },
  {
    icon: <BiWorld />,
    title: "WorldWide Free Delivery",
    description: "For Order Over $100",
  },
  {
    icon: <GrMoney />,
    title: "Money Back Guarantee",
    description: "Enter Now",
  },
];

export const timeStamps = [
  {
    title: "days",
    count: "714",
  },
  {
    title: "hours",
    count: "17",
  },
  {
    title: "min",
    count: "51",
  },
  {
    title: "sec",
    count: "14",
    color: true,
  },
];

// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, sapiente natus quibusdam culpa aliquid animi voluptatibus eaque, nisi voluptates doloremque nobis sed soluta tempora quasi aspernatur numquam rem ipsam placeat.
