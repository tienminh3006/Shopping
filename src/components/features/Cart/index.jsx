import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "./styles.scss";
import { cartTotaltSelector } from "./selector";
import * as yup from "yup";
import {
  setQuantity,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleCheckedItem,
} from "./cartSlice";
import { Link } from "react-router-dom";
import QuantityField from "../../form-controls/QuantityField";
import { yupResolver } from "@hookform/resolvers/yup";
CartFeature.propTypes = {};

function CartFeature(props) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "Số lượng phải lớn hơn 1")
      .required("Vui lòng nhập số lượng")
      .typeError("Vui lòng nhập số lượng"),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [idItem, setIditem] = useState("");
  const stateCart = useSelector((state) => {
    return state.cart;
  });
  console.log(stateCart);
  localStorage.setItem("cart", JSON.stringify(stateCart.cartItems));
  const formatPrice = function (number) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(number);
  };
  const totalPrice = useSelector(cartTotaltSelector);
  const handClickRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleIncreaseQuantity = (e, id, quantity) => {
    dispatch(increaseQuantity({ id, quantity }));
    const quantityEl = e.target.closest(".cart__product__quantity");
    quantityEl.querySelector(".cart__product__input").value = quantity + 1;
    // console.log(quantityEl.querySelector(".cart__product__input").value);
  };

  const handleDecreaseQuantity = (e, id, quantity) => {
    if (quantity === 1) {
      setIditem(id);
      setShow(true);
    } else {
      dispatch(decreaseQuantity({ id, quantity }));
      const quantityEl = e.target.closest(".cart__product__quantity");
      quantityEl.querySelector(".cart__product__input").value = quantity - 1;
    }
  };
  const handleBlurInput = (e, id) => {
    const quantity = +e.target.value;
    Number.isFinite(quantity);
    if (quantity <= 0 || !Number.isFinite(quantity))
      alert("Vui lòng nhập số lượng lớn hơn 1");
    else dispatch(setQuantity({ id, quantity }));
  };
  const handleClickCancel = () => {
    setShow(false);
  };
  const handleClickDelete = (e) => {
    dispatch(removeFromCart(idItem));
    setShow(false);
  };
  const handleCheckItem = (id) => {
    dispatch(toggleCheckedItem(id));
  };
  return (
    <Fragment>
      <div className="cart__product">
        {show ? (
          <div className="cart__notifi">
            <div className="cart__notifi__content">
              Bạn muốn xoá sản phẩm này?
            </div>
            <div className="cart__notifi__control">
              <button
                className="cart__notifi__btn cart__notifi-close"
                onClick={handleClickCancel}
              >
                Không
              </button>
              <button
                className="cart__notifi__btn cart__notifi-action"
                onClick={(e) => handleClickDelete(e)}
              >
                Xóa
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="grid wide">
          <div className="row">
            <div className="col l-9">
              <div className="cart__product__container">
                <ul className="cart__product__list">
                  {stateCart.cartItems.map(
                    ({ id, product, quantity, checked }) => (
                      <li key={product.id} className="cart__product__item row">
                        <div className="col l-1 cart__product__checkbox">
                          <input
                            checked={checked}
                            onChange={() => handleCheckItem(id)}
                            type="checkbox"
                            name="check-item"
                            id="check-item"
                          />
                        </div>{" "}
                        <div className="col l-5">
                          <Link to={`/products/${product.id}`}>
                            <div className="cart__product__info">
                              <img
                                className="cart__product__thumbnail"
                                src={
                                  product.thumbnail
                                    ? `https://api.ezfrontend.com${product.thumbnail?.url}`
                                    : `https://via.placeholder.com/444`
                                }
                                alt="thumbnail"
                              />
                              <p>{product.name}</p>
                            </div>
                          </Link>
                        </div>
                        <div className="col l-1">
                          <span>{formatPrice(product.salePrice)}</span>
                        </div>
                        <div className="col l-1">
                          <div className="cart__product__quantity">
                            <span
                              className="cart__product__quantity-decrease"
                              onClick={(e) =>
                                handleDecreaseQuantity(e, id, quantity)
                              }
                            >
                              <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                                alt=""
                              />
                            </span>
                            {/* <QuantityField
                          defaultValue={quantity}
                          className="cart__product__input"
                          onBlur={(e) => handleBlurInput(e, id)}
                          name="quantity"
                          label="quantity"
                          form={form}
                        /> */}
                            <input
                              onBlur={(e) => handleBlurInput(e, id)}
                              type="tel"
                              className="cart__product__input"
                              defaultValue={quantity}
                            ></input>
                            <span
                              className="cart__product__quantity-increase"
                              onClick={(e) =>
                                handleIncreaseQuantity(e, id, quantity)
                              }
                            >
                              <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
                                alt="increase"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="col l-1">
                          <span
                            className="cart__product__delete"
                            onClick={() => handClickRemoveItem(id)}
                          >
                            <img
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                              alt="deleted"
                            />
                          </span>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="col l-3">
              <div className="cart-total-prices__inner">
                <div className="styles__StyledShippingAddress-sc-1sjj51k-0 juqUnC">
                  <p className="heading">
                    <span className="text">Giao tới</span>
                    <span
                      data-view-id="cart_shipping_location.change"
                      className="link"
                    >
                      Thay đổi
                    </span>
                  </p>
                  <p className="title">
                    <b className="name">Phạm Tiến Minh</b>
                    <b className="phone">0375783239</b>
                  </p>
                  <p className="address">
                    Mediamart Mỹ Đình, 18, Phạm Hùng, Phường Mỹ Đình 1, Quận Nam
                    Từ Liêm, Hà Nội
                  </p>
                </div>
                <div className="styles__StyledWrapCoupons-sc-11gpuej-0 hOvmKB">
                  <div className="styles__StyledCouponBox-sc-1ibe03g-0 jmylnB">
                    <div className="title-usage">
                      <p className="coupon-title">Tiki khuyến mãi</p>
                      <p className="max-usage">
                        Có thể chọn 2
                        <img
                          className="max-usage__info"
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/icons-info-gray.svg"
                          alt="info"
                        />
                      </p>
                    </div>
                    <div className="eligible_coupon_list"></div>
                    <div
                      data-view-id="platform_coupon.cart_coupon_view.all"
                      className="show-more"
                    >
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_icon.svg"
                        alt="cart-ticket"
                      />
                      <span>Chọn hoặc nhập Khuyến mãi </span>
                    </div>
                  </div>
                </div>
                <div className="styles__StyledCartPrices-sc-1op1gws-0 cdzcxd">
                  <div className="prices">
                    <ul className="prices__items">
                      <li className="prices__item">
                        <span className="prices__text">Tạm tính</span>
                        <span className="prices__value">
                          {formatPrice(totalPrice)}
                        </span>
                      </li>
                      <li className="prices__item">
                        <span className="prices__text">Giảm giá</span>
                        <span className="prices__value">0đ</span>
                      </li>
                    </ul>
                    <div className="prices__total">
                      <span className="prices__text">Tổng cộng</span>
                      <div className="prices__content">
                        <div className="prices__value prices__value--empty">
                          Vui lòng chọn sản phẩm
                        </div>
                        <span className="prices__value--noted">
                          (Đã bao gồm VAT nếu có)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" className="cart__submit">
                  Mua Hàng (0)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CartFeature;
