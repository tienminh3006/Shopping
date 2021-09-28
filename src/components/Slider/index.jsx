import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Slider.propTypes = {};

function Slider(props) {
  const handleClickLeft = () => {
    document.querySelector(".slider__btn-right").classList.remove("disable");
    document.querySelector(".slider__btn-left").classList.add("disable");
    document.querySelector(".slider__row").classList.remove("translate");
  };
  const handleClickRight = () => {
    document.querySelector(".slider__btn-right").classList.add("disable");
    document.querySelector(".slider__btn-left").classList.remove("disable");
    document.querySelector(".slider__row").classList.add("translate");
  };
  return (
    <div className="slider">
      <div className="grid wide slider__container">
        <div className="slider__bar">
          <button
            className="slider__btn slider__btn-left disable"
            onClick={handleClickLeft}
          >
            {" "}
            &#60;
          </button>
          <span className="slider__row">
            <a href="_blank">
              <div className="slider__item">Thịt, rau củ</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Bách Hóa</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Nhà Cửa</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Thiết Bị Số</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Điện Thoại</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Mẹ &amp; Bé</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Làm Đẹp</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Gia Dụng</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Thời trang nữ</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Thời trang nam</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Giày nữ</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Túi nữ</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Giày nam</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Túi nam</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Balo &amp; Vali</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Phụ kiện</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Đồng hồ</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Laptop</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Quốc Tế</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Voucher</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Xe</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Sách</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Điện Tử</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Thể Thao</div>
            </a>
            <a href="_blank">
              <div className="slider__item">Máy Ảnh</div>
            </a>
          </span>

          <button
            onClick={handleClickRight}
            className="slider__btn slider__btn-right"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
