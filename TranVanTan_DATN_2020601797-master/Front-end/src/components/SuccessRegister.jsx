import React, { useEffect } from "react";
import { CreateOrder } from "../api/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeAllItems } from "../redux/shopping-cart/cartItemSlices.js";

const SuccessRegister = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="payment-done-container">
      <div className="payment-done-content">
        <div className="checkmark-icon">&#10004;</div>
        <h1>Tin nhắn kích hoạt tài khoản đã được gửi tới email của bạn!</h1>
        <p>Vui lòng kiểm tra email và kích hoạt tài khoản mới</p>
        <p>Rất vui được phục vụ bạn</p>
        <button className="go-back-btn" onClick={handleClick}>
          Trang chủ
        </button>
      </div>
    </div>
  );
};
export default SuccessRegister;
