import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { cartTotaltSelector } from "./selector";
CartFeature.propTypes = {};

function CartFeature(props) {
  const dispatch = useDispatch();
  const stateCart = useSelector((state) => {
    return state.cart;
  });
  localStorage.setItem("cart", JSON.stringify(stateCart.cartItems));
  console.log(stateCart.cartItems);
  const formatPrice = function (number) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(number);
  };
  const totalPrice = useSelector(cartTotaltSelector);

  return (
    <Fragment>
      <div className="grid wide">
        <div className="row">
          <div className="col l-9">
            <div className="cart__product">
              <ul className="cart__product__list">
                {stateCart.cartItems.map(({ id, product, quantity }) => (
                  <li key={product.id} className="cart__product__item">
                    <input type="checkbox" name="check-item" id="check-item" />
                    <a href={`/products/${product.id}`}>
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
                    </a>
                    <span>{formatPrice(product.salePrice)}</span>
                    <div>
                      <span>
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                          alt=""
                        />
                      </span>
                      <input
                        type="tel"
                        className="qty-input"
                        defaultValue={quantity}
                      ></input>
                      <span className="qty-increase">
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
                          alt="increase"
                        />
                      </span>
                    </div>
                    <div className="col-5">
                      <span className="intended__delete">
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                          alt="deleted"
                        />
                      </span>
                    </div>
                  </li>
                ))}
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
                      <span className="prices__value">{totalPrice}</span>
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
    </Fragment>
  );
}

export default CartFeature;
