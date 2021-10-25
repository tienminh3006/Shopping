import React from "react";
import ProductFeature from "../Products";
import Banner from "../../components/Banner";

Home.propTypes = {};

function Home(props) {
  return (
    <>
      <Banner />
      <ProductFeature />
    </>
  );
}

export default Home;
