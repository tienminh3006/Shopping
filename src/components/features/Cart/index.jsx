import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "./styles.scss";
import {
  cartItemsCountSelector,
  cartTotaltSelector,
  cartTotalChecked,
  cartTotal,
} from "./selector";
import * as yup from "yup";
import {
  removeAllItems,
  setQuantity,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleCheckedItem,
  uncheckAllItem,
  checkAllItem,
} from "./cartSlice";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
CartFeature.propTypes = {};

function CartFeature(props) {
  const totalItem = useSelector(cartItemsCountSelector);
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
  const [checkAll, setCheckAll] = useState(false);
  const [show, setShow] = useState(false);
  const [removeAll, setRemoveAll] = useState(false);
  const dispatch = useDispatch();
  const [idItem, setIditem] = useState("");
  const stateCart = useSelector((state) => {
    return state.cart;
  });
  // console.log(stateCart.cartItems);
  localStorage.setItem("cart", JSON.stringify(stateCart.cartItems));
  const formatPrice = function (number) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(number);
  };
  const itemsChecked = useSelector(cartTotal);
  const totalPrice = useSelector(cartTotaltSelector);
  const totalItems = useSelector(cartTotalChecked);
  const handClickRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleIncreaseQuantity = (e, id, quantity) => {
    dispatch(increaseQuantity({ id, quantity }));
    const quantityEl = e.target.closest(".cart__product__quantity");
    quantityEl.querySelector(".cart__product__input").value = quantity + 1;
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

  //Notification delete item
  const handleClickCancel = () => {
    setShow(false);
    setRemoveAll(false);
  };
  const handleClickDelete = (e) => {
    if (removeAll) {
      dispatch(removeAllItems());
      setRemoveAll(false);
    } else {
      dispatch(removeFromCart(idItem));
    }
    setShow(false);
  };
  const handleClickRemoveAll = () => {
    setRemoveAll(true);
    setShow(true);
  };
  const handleCheckItem = (id) => {
    dispatch(toggleCheckedItem(id));
  };
  const handleClickCheckAll = () => {
    if (!checkAll) {
      dispatch(checkAllItem());
      setCheckAll(true);
    } else {
      dispatch(uncheckAllItem());
      setCheckAll(false);
    }
  };
  return (
    <Fragment>
      {totalItem ? (
        <div className="cart__product">
          {show ? (
            <div className="cart__notifi">
              <div className="cart__notifi__content">
                {removeAll
                  ? `Bạn muốn xoá toàn bộ sản phẩm trong giỏ hàng?`
                  : "Bạn có muốn xóa sản phầm này?"}
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
              <div className="cart__product__container">
                <ul className="cart__product__list">
                  <li className="cart__product__title">
                    <div className="" onClick={() => handleClickCheckAll()}>
                      <input type="checkbox" className='cart__product__checkbox'/>
                    </div>
                    <label className="col l-4">
                      <span className="label">
                        Tất cả ({totalItems} sản phẩm)
                      </span>
                    </label>
                    <div className="col l-1">Đơn giá</div>
                    <div className="col l-1">Số lượng</div>
                    <div className="col l-1">Thành tiền</div>
                    <div className="col">
                      <span
                        className="productsV2__remove-all"
                        onClick={handleClickRemoveAll}
                      >
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                          alt="deleted"
                        />
                      </span>
                    </div>
                  </li>
                  {stateCart.cartItems.map(
                    ({ id, product, quantity, checked }) => (
                      <li key={product.id} className="cart__product__item">
                        <div className="col l-5">
                          <div className="cart__product__info">
                            <input
                              checked={checked}
                              onChange={() => handleCheckItem(id)}
                              type="checkbox"
                              name="check-item"
                              id="check-item"
                            />
                            <Link
                              to={`/products/${product.id}`}
                              className="cart__product__link"
                            >
                              <div className="cart__product__detail">
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
                          <span className="cart__price">
                            {formatPrice(product.salePrice)}
                          </span>
                        </div>
                        <div className="col">
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
              <div className="cart-info__container">
                <div className="cart-info__user">
                  <p className="cart-info__user-heading">
                    <span className="cart-info__user-text">Giao tới</span>
                    <span className="cart-info__user-link">Thay đổi</span>
                  </p>
                  <p className="cart-info__user-info">
                    <b className="cart-info__user-name">Phạm Tiến Minh</b>
                    <b className="cart-info__user-phone">0375783239</b>
                  </p>
                  <p className="cart-info__user-address">
                    Mediamart Mỹ Đình, 18, Phạm Hùng, Phường Mỹ Đình 1, Quận Nam
                    Từ Liêm, Hà Nội
                  </p>
                </div>

                <div className="cart-info__coupon">
                  <div className="cart-info__coupon-header">
                    <p className="coupon-title">Tiki khuyến mãi</p>
                    <p className="cart-info__coupon-usage">
                      Có thể chọn 2
                      <img
                        className="cart-info__coupon-img"
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/icons-info-gray.svg"
                        alt="info"
                      />
                    </p>
                  </div>
                  <div className="cart-info__coupon-show">
                    <img
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_icon.svg"
                      alt="cart-ticket"
                    />
                    <span className="cart-info__user-link">
                      Chọn hoặc nhập Khuyến mãi
                    </span>
                  </div>
                </div>

                <div className="cart-info__price">
                  <div>
                    <ul className="cart-info__price__list">
                      <li className="cart-info__price__item">
                        <span className="prices__text">Tạm tính</span>
                        <span className="prices__value">
                          {formatPrice(totalPrice)}
                        </span>
                      </li>
                      <li className="cart-info__price__item">
                        <span className="prices__text">Giảm giá</span>
                        <span className="prices__value">0 đ</span>
                      </li>
                    </ul>
                  </div>
                  <div className="cart-info__price__total">
                    <span className="prices__text">Tổng cộng</span>
                    <div className="cart-info__price__content">
                      <div className="cart__price">
                        {totalPrice
                          ? formatPrice(totalPrice)
                          : "Vui lòng chọn sản phẩm"}
                      </div>
                      <span className="cart__price-noted">
                        (Đã bao gồm VAT nếu có)
                      </span>
                    </div>
                  </div>
                </div>
                <button type="button" className="cart-info__price__submit">
                  Mua Hàng ({itemsChecked})
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={"not__found"}>
          <img
            src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"
            alt=""
            class="empty__img"
          />
          <p className="not__found__title">
            Giỏ hàng của bạn chưa có sản phẩm nào!
          </p>
          <Link className="not__found__link" to="/">
            Hãy tiếp tục mua sắm
          </Link>
        </div>
      )}
      <div className={classNames("overlay", { hidden: show === false })}></div>
    </Fragment>
  );
}

export default CartFeature;
