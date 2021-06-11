/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
