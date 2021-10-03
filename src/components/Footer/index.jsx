import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
Footer.propTypes = {};

function Footer(props) {
  let link = "https://www.google.com/";
  return (
    <>
      <div className="footer">
        <div className="grid wide">
          <div className="row">
            <div className="footer__content col l-3 t-3 m-6">
              <h3 className="footer__heading">Chăm sóc khách hàng</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="link" className="footer__item-link">
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li className="footer__item">
                  <a href="link" className="footer__item-link">
                    Shoppe Mall
                  </a>
                </li>
                <li className="footer__item">
                  <a href="link" className="footer__item-link">
                    Hướng dẫn mua hàng
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__content col l-3 t-3 m-6">
              <h3 className="footer__heading">Giới thiệu</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="link" className="footer__item-link">
                    Giới thiệu
                  </a>
                </li>
                <li className="footer__item">
                  <a href="link" className="footer__item-link">
                    Tuyển dụng
                  </a>
                </li>
                <li className="footer__item">
                  <a href="link" className="footer__item-link">
                    Điều khoản
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__content col l-3 t-3 m-6">
              <h3 className="footer__heading">Theo dõi</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="link" className="footer__item-link">
                    <i className="footer__item-icon fab fa-facebook-square"></i>
                    Facebook
                  </a>
                </li>
                <li className="footer__item">
                  <a href="link" className="footer__item-link">
                    <i className="footer__item-icon fab fa-instagram-square"></i>
                    Instagram
                  </a>
                </li>
                <li className="footer__item">
                  <a href="link" className="footer__item-link">
                    <i className="footer__item-icon fab fa-linkedin"></i>
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer__content col l-3 t-3 m-6">
              <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
              <div className="footer__list">
                <div className="footer-download">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    alt="qrcode"
                    className="footer-download__qr"
                  />
                  <div className="footer-download__app">
                    <a href={link} className="footer-download__app-link">
                      <img
                        src="https://i-invdn-com.investing.com/landingPages/mobile_2018/vn/vn-badge-ios.png"
                        alt="google_play"
                        className="footer-download__app-img"
                      />
                    </a>
                    <a href={link} className="footer-download__app-link">
                      <img
                        src="https://eitguide.net/wp-content/uploads/2017/02/GetItOnGooglePlay-badge.png"
                        alt="google_play"
                        className="footer-download__app-img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
