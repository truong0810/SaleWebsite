import React from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineUser,
  AiTwotoneMail,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";
const Header = () => {
  return (
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-6 header__top_left">
            <ul>
              <li><AiTwotoneMail /> 2002ngoctruong@gmail.com</li>
              <li>Miễn phí ship hóa đơn trên {formatter(200000)}</li>
            </ul>
          </div>
          <div className="col-6 header__top_right">
            <ul>
              <li>
                <Link to={""}>
                  <AiOutlineFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineLinkedin />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <span>
                    <AiOutlineUser /> Đăng nhập
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
