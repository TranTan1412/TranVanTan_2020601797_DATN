import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import logo from "../assets/images/logo-5.png";

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about",
  },
  {
    display: "Liên hệ",
    path: "/about",
  },
  {
    display: "Tuyển dụng",
    path: "/about",
  },
  {
    display: "Tin tức",
    path: "/about",
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Tổng đài hỗ trợ</div>
            <div className="footer__content">
              <p>
                Liên hệ đặt hàng: <strong>0325545990</strong>
              </p>
              <p>
                Mọi thắc mắc xin liên hệ sđt: <strong>0325545990</strong>
              </p>
              <p>
                Góp ý, khiếu nại tại email: <strong>Tranvantan141220dtc@gmail.com</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Hướng đến mục tiêu nâng tầm thời trang, nâng cao vẻ đẹp tới hàng
              tiệu người tiêu dùng Việt Nam. Luôn mang tới những trải nghiệm tốt nhất với tiêu chí ngon, bổ, rẻ. Khách hàng là thượng đế
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
