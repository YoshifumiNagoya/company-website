import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcHome } from "react-icons/fc";
import { GrMap } from "react-icons/gr";
import map from "../../assets/map.png";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-about-section">
              <h6>About</h6>
              <p>
                暮らしの支えとなる。人とまちの感性に働きかける。まっすぐ、そして、たのしく。人間本来の喜びを大切に、まちのさまざまな課題を解決する。
              </p>
              <span className="footer-social-icons">
                <p>
                  <FaFacebook size={30} />
                </p>
                <p>
                  <FaXTwitter size={30} />
                </p>
                <p>
                  <FaInstagram size={30} />
                </p>
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-service">
              <h6 style={{ color: "white", marginTop: "20px" }}>Services</h6>
              <div className="footer-item">
                <li>製品開発</li>
                <li>解析業務</li>
                <li>マーケティング</li>
                <li>共同開発</li>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-service">
              <h6 style={{ color: "white", marginTop: "20px" }}>
                <FcHome size={20} style={{ marginBottom: "2" }} /> 株 式 会 社{" "}
                <span className="company-name">ベンドル</span>
              </h6>
              <div className="footer-item">
                <p>
                  <span
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "15px",
                      marginRight: "5px",
                    }}
                  >
                    <GrMap className="icon" />
                  </span>
                  愛知県〇〇市〇〇町2203-43
                </p>
                <img src={map} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
