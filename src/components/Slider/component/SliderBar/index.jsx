import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Link } from "react-router-dom";

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
            &#60;
          </button>
          <span className="slider__row">
            <Link to="/">
              <div className="slider__item">Thịt, rau củ</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Bách Hóa</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Nhà Cửa</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Thiết Bị Số</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Điện Thoại</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Mẹ &amp; Bé</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Làm Đẹp</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Gia Dụng</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Thời trang nữ</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Thời trang nam</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Giày nữ</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Túi nữ</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Giày nam</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Túi nam</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Balo &amp; Vali</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Phụ kiện</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Đồng hồ</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Laptop</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Quốc Tế</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Voucher</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Xe</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Sách</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Điện Tử</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Thể Thao</div>
            </Link>
            <Link to="/">
              <div className="slider__item">Máy Ảnh</div>
            </Link>
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
