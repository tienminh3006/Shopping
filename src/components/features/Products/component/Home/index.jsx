import React from "react";
import PropTypes from "prop-types";
import Header from "../../../../Header";
import SliderFeature from "../../../../Slider";
import Footer from "../../../../Footer";
import ProductFeature from "../..";
import Banner from "../../../../Slider/component/Banner";

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
