import React, { Component } from "react";
import Slider from "react-slick";
// import "./styles.scss";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        opacity: "0.5",
        background: "#000000cc",
        right: "0px",
        zIndex: "3",
        fontSize: "20px",
        padding: "12px 5px 10px",
        borderRadius: "3px",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        opacity: "0.5",
        background: "#000000cc",
        left: "0px",
        zIndex: "3",
        fontSize: "20px",
        padding: "12px 5px 10px",
        borderRadius: "3px",
      }}
      onClick={onClick}
    />
  );
}
export default class Banner extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className: "slider variable-width",
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
    };
    return (
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <div className="grid wide" style={{ paddingBottom: "20px" }}>
          <div
            className="banner"
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="banner__left"
              style={{ width: "824px", height: "274px" }}
            >
              <Slider {...settings}>
                {/* <button
                type="button"
                data-role="none"
                class="slick-arrow slick-next"
              >
                Next
              </button> */}
                <div>
                  <a href="/">
                    <img
                      src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                      style={{ width: "824px", height: "274px" }}
                      alt="banner"
                    />
                  </a>
                </div>
                <div>
                  <a href="/">
                    <img
                      src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                      style={{ width: "824px", height: "274px" }}
                      alt="banner"
                    />
                  </a>
                </div>
                <div>
                  <a href="/">
                    <img
                      src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                      style={{ width: "824px", height: "274px" }}
                      alt="banner"
                    />
                  </a>
                </div>
                <div>
                  <a href="/">
                    <img
                      src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                      style={{ width: "824px", height: "274px" }}
                      alt="banner"
                    />
                  </a>
                </div>
                <div>
                  <a href="/">
                    <img
                      src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                      style={{ width: "824px", height: "274px" }}
                      alt="banner"
                    />
                  </a>
                </div>
                <div>
                  <a href="/">
                    <img
                      src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                      style={{ width: "824px", height: "274px" }}
                      alt="banner"
                    />
                  </a>
                </div>
              </Slider>
            </div>

            <div style={{}}>
              <img
                src="https://salt.tikicdn.com/cache/w400/ts/banner/11/7d/a9/f7186442a9e94bd2321b1aaf473da1ef.png"
                alt="banner"
                style={{ width: "376px", height: "274px", paddingTop: "23px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
