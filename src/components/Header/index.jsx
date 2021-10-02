import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LoginEmail from "../features/Authenticate/components/Login Email";

import LoginPhone from "../features/Authenticate/components/LoginFormPhone";
import Register from "../features/Authenticate/components/Register";
import { hideMiniCart } from "../features/Cart/cartSlice";
import { cartItemsCountSelector } from "../features/Cart/selector";
import "./styles.scss";

Header.propTypes = {};
const useStyles = makeStyles(() => ({
  root: { minWidth: "600px", overflow: "hidden" },
  dialog: {
    width: "600px",
  },
}));
function Header(props) {
  const classes = useStyles();
  const loginCurrent = useSelector((state) => state.user.current);
  const isLogin = !!loginCurrent.id;
  const history = useHistory();

  const cartItemCount = useSelector(cartItemsCountSelector);
  const [hidden, setHidden] = React.useState(true);
  const [mode, setMode] = React.useState("loginemail");
  // console.log(cartItemCount);

  const handleClickOpen = () => {
    setHidden(false);
  };
  const handleClose = () => {
    setHidden(true);
  };
  const handleClickRegister = () => {
    setHidden(false);
    setMode("register");
  };
  const handleClickCart = () => {
    // if (!isLogin) handleClickRegister();
    // else history.push("/cart");
    history.push("/cart");
  };
  const stateCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleCloseCart = () => {
    dispatch(hideMiniCart());
  };
  return (
    <Box>
      <div className={"header"}>
        <div className={"grid wide"}>
          <div className={"header-with-search"}>
            <div className={"header__logo"}>
              <Link to="/home">
                <img
                  src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className={"header__menu"}>
              <img
                className={"header__menu__icon"}
                src="https://salt.tikicdn.com/ts/upload/96/d1/77/e499ea39b0773a337d2217ad473fcb97.png"
                alt="menu"
              />
              <div className={"header__menu__span"}>
                <span className={"header__account__span"}>Danh Mục</span>
                <span className={"header__account__span-2"}>
                  Sản Phẩm
                  <img
                    className={"arrowIcon"}
                    src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                    alt="icon"
                  />
                </span>
              </div>
              <div className={"header__menu__list"}>
                <ul>
                  <li>
                    <a href="/">
                      <span>
                        <i className="fas fa-mobile-alt menu__list__icon"></i>
                      </span>
                      <span>Điện Thoại - Máy Tính Bảng</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>
                        <i className="fas fa-camera-retro menu__list__icon"></i>
                      </span>
                      <span>Máy Ảnh - Quay Phim</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>
                        <i className="fas fa-headset menu__list__icon"></i>
                      </span>
                      <span>Phụ Kiện - Thiết Bị Số</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>
                        <i className="fas fa-tv menu__list__icon"></i>
                      </span>
                      <span>Điện Tử - Điện Lạnh</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>
                        <i className="fas fa-laptop menu__list__icon"></i>
                      </span>
                      <span>Laptop - Thiết bị IT</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>
                        <i className="fas fa-utensils menu__list__icon"></i>
                      </span>
                      <span>Điện Gia Dụng</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={"header__search"}>
              <input type="text" className={"header__search__input"} />
              <button>
                <img
                  className={"header__search__icon"}
                  src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
                  alt="button-search"
                />
                Tìm kiếm
              </button>
              <div className={"search__auto__complete"}>
                <div className="wrap-heading">
                  <div>Danh Mục Nổi Bật</div>
                </div>
                <div className={"search__auto__guess"}>
                  <a href="/">
                    <div className="thumb-wrap">
                      <img
                        src="https://salt.tikicdn.com/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png"
                        alt="pic"
                      />
                    </div>
                    <span className="title">Thực Phẩm Tươi Sống</span>
                  </a>
                  <a href="/">
                    <div className="thumb-wrap">
                      <img
                        src="https://salt.tikicdn.com/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png"
                        alt="pic"
                      />
                    </div>
                    <span className="title">Hàng Quốc Tế</span>
                  </a>
                  <a href="/">
                    <div className="thumb-wrap">
                      <img
                        src="https://salt.tikicdn.com/cache/280x280/ts/product/65/b4/20/5756b8b7996165d0986fcb37d6a18d9d.jpg"
                        alt="pic"
                      />
                    </div>
                    <span className="title">Bộ Chuyển Đổi Khác</span>
                  </a>
                  <a href="/">
                    <div className="thumb-wrap">
                      <img
                        src="https://salt.tikicdn.com/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png"
                        alt="pic"
                      />
                    </div>
                    <span className="title">Thiết Bị Số - Phụ Kiện Số</span>
                  </a>
                  <a href="/">
                    <div className="thumb-wrap">
                      <img
                        src="https://salt.tikicdn.com/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png"
                        alt="pic"
                      />
                    </div>
                    <span className="title">
                      Laptop - Máy Vi Tính - Linh kiện
                    </span>
                  </a>
                  <a href="/">
                    <div className="thumb-wrap">
                      <img
                        src="https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png"
                        alt="pic"
                      />
                    </div>
                    <span className="title">Đồ Chơi - Mẹ &#38; Bé</span>
                  </a>
                  <a href="/">
                    <div className="thumb-wrap">
                      <img
                        src="https://salt.tikicdn.com/cache/280x280/ts/product/78/83/23/7cad758fc5e8fd666e7be6f042860535.jpg"
                        alt="pic"
                      />
                    </div>
                    <span className="title">Linh kiện máy tính</span>
                  </a>
                  <a href="/">
                    <div className="thumb-wrap">
                      <img
                        src="https://salt.tikicdn.com/cache/280x280/media/catalog/product/t/l/tl-wn781nd.jpg"
                        alt="pic"
                      />
                    </div>
                    <span className="title">Card mạng</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={"header__account"}>
              <img
                className={"header__account__icon"}
                src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                alt="account"
              />
              <span className={"header__account__container"}>
                <span className={"header__account__span"}>
                  Đăng Nhập / Đăng Ký
                </span>
                <span className={"header__account__span-2"}>
                  Tài khoản
                  <img
                    className={"arrowIcon"}
                    src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                    alt="icon"
                  />
                </span>
              </span>
              <div className={"header__account__login"}>
                <button
                  onClick={handleClickOpen}
                  className={"header__account__btn"}
                >
                  Đăng nhập
                </button>
                <button
                  onClick={handleClickRegister}
                  className={"header__account__btn"}
                >
                  Tạo tài khoản
                </button>
                <button
                  className={
                    "header__account__btn header__account__btn__google"
                  }
                >
                  <span>
                    <i className="fab fa-facebook-f sign_icon"></i>
                  </span>
                  Đăng nhập bằng Facebook
                </button>
                <button
                  className={
                    "header__account__btn header__account__btn__facebook"
                  }
                >
                  <span>
                    <i className="fab fa-google sign_icon"></i>
                  </span>
                  Đăng nhập bằng Google
                </button>
              </div>
            </div>

            <div className={"header__cart"}>
              <div onClick={handleClickCart}>
                <span className={"header__cart__wrapper"}>
                  <img
                    className={"header__cart__icon"}
                    src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                    alt="cart"
                  />
                  <span className={"header__cart__quantity"}>
                    {cartItemCount}
                  </span>
                </span>
                <span className={"header__cart__title"}>Giỏ Hàng</span>
              </div>
              {stateCart.showMiniCart ? (
                <div className="mini-cart">
                  <button
                    onClick={handleCloseCart}
                    className="mini-cart__close"
                  >
                    X
                  </button>
                  <p className="mini-cart__status">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    Thêm vào giỏ hàng thành công!
                  </p>
                  <Link
                    to="/cart"
                    className="mini-cart__view"
                    onClick={handleCloseCart}
                  >
                    Xem giỏ hàng và thanh toán
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={"header__quicklink"}>
            <div>
              <img
                src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
                alt="free-ship-badge"
                height="12"
                width="83"
              />
            </div>
            <div className={"header__quicklink__containter"}>
              <a href="http://www.google.com">Tất cả thịt rau củ</a>
              <a href="http://www.google.com">Hàng đông lạnh</a>
              <a href="http://www.google.com">Thịt</a>
              <a href="http://www.google.com">Trái cây</a>
              <a href="http://www.google.com">Hải sản</a>
            </div>

            <a href="/" className={"header__seller"}>
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg"
                alt="seller"
              />
              <span>Bán hàng cùng tiki</span>
            </a>
          </div>
        </div>
      </div>
      {/* <Dialog open={open} className={classes.root}>
        <>
          {mode === "register" && (
            <>
              <Register closeDialog={handleClose} />
              <Box>
                <Button onClick={() => setMode("login")}>Dang ki</Button>
              </Box>
            </>
          )}
          {mode === "login" && (
            <>
              <Login
                closeDialog={handleClose}
                onClick={() => setMode("register")}
              />
            </>
          )}
        </>
        <DialogActions>
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </DialogActions>
      </Dialog> */}
      {/* <Dialog open={open}> */}
      <div className={classNames("dialog", { hidden: hidden === true })}>
        {mode === "loginnumber" && (
          <>
            <LoginEmail
              closeDialog={handleClose}
              onClick={() => setMode("loginemail")}
              onClickRegiter={handleClickRegister}
            />
          </>
        )}
        {mode === "loginemail" && (
          <>
            <LoginPhone
              closeDialog={handleClose}
              onClick={() => setMode("loginnumber")}
            />
          </>
        )}
        {mode === "register" && (
          <>
            <Register
              closeDialog={handleClose}
              onClick={() => setMode("loginnumber")}
            />
          </>
        )}
        <button className="dialog__btn-close" onClick={handleClose}>
          <img
            src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
            alt="close"
          />
        </button>
      </div>
      {/* </Dialog> */}
      {/* <div className="overlay"></div> */}
    </Box>
  );
}

export default Header;
