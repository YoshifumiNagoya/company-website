import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";
import about from "../../assets/factory.png";
import { FcCollaboration, FcSupport, FcFactory } from "react-icons/fc";

const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <Fade left>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={about} alt="about-image" />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-details">
              <div className="about-title">
                <h5>About</h5>
                <span className="line"></span>
              </div>
              <p>
                創業より１２０年。当社、株式会社ベンドルは長野県飯田市の車用エンジンの開発企業です。
                始まりは大正時代の造船業。初代の田中太郎が創業しました。
              </p>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcCollaboration size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>
                      すべてが <span className="japan">MADE IN JAPAN</span>
                    </h6>
                    <span className="line-second"></span>
                    <p>
                      当社は、部品を含め『自社生産』を目指し、一人ひとりが組み立ての一連の作業に関わることで、やりがい・責任感をもったモノづくりをしています。
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcSupport size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>
                      軽量で丈夫。機械と目視による
                      <span className="japan">不良品防止体制</span>
                    </h6>{" "}
                    <span className="line-second"></span>
                    <p>
                      最新の熱加工処理による軽量化に成功。令和3年度、不良品率0.001%を達成。
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcFactory size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>
                      自社生産による <span className="japan">安定供給</span>
                    </h6>{" "}
                    <span className="line-second"></span>
                    <p>
                      自社で部品の生産を行うことで、需要過多にも対応できます。安心・信頼を第一のモットーとして掲げています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
