import React from "react";
import App from "next/app";
import Head from "next/head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "../assets/css/indx.css";

export default function CMApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Next.JS</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossOrigin="anonymous"
        />

        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
          crossorigin="anonymous"
        ></script>
      </Head>

      <Nav />

      {/* <div style={{ marginTop: 30 }}> */}
      <div className="main-content">
        <Component {...pageProps} />
      </div>

      <Footer />

      {/* <style jsx>{`
        .main-content {
          margin-top: 30px;
        }
      `}</style> */}
    </div>
  );
}
