import React, { Component } from "react";
import Slider from "react-slick";

export default class Banner extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    };
    return (
      <div className="grid wide">
        <div className="banner" >
          <div className="banner__left" style={{ width: "70%" }}>
            <Slider {...settings}>
              <button
                type="button"
                data-role="none"
                class="slick-arrow slick-next"
                style={{ color: "black", display: "block" }}
              >
                Next
              </button>
              <div>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                  style={{ width: "824px", height: "274px" }}
                  alt="banner"
                />
              </div>
              <div>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                  style={{ width: "824px", height: "274px" }}
                  alt="banner"
                />
              </div>
              <div>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                  style={{ width: "824px", height: "274px" }}
                  alt="banner"
                />
              </div>
              <div>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                  style={{ width: "824px", height: "274px" }}
                  alt="banner"
                />
              </div>
              <div>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                  style={{ width: "824px", height: "274px" }}
                  alt="banner"
                />
              </div>
              <div>
                <img
                  src="https://salt.tikicdn.com/cache/w1080/ts/banner/57/93/e7/d70c4cb624b736d188c3c50c5175cdb8.png"
                  style={{ width: "824px", height: "274px" }}
                  alt="banner"
                />
              </div>
            </Slider>
          </div>
          <div className="banner__right" style={{ width: "30%" }}>
            <img
              src="https://salt.tikicdn.com/cache/w400/ts/banner/11/7d/a9/f7186442a9e94bd2321b1aaf473da1ef.png"
              alt="banner"
              style={{ width: "408px", height: "274px" }}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
