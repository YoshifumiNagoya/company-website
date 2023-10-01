import React from "react";
import "./service.css";
import { FcOk } from "react-icons/fc";
import Zoom from "react-reveal/Zoom";
import image1 from "../../assets/service/image1.png";
import image2 from "../../assets/service/image2.png";
import image3 from "../../assets/service//image3.png";
import image4 from "../../assets/service/image4.png";
import image5 from "../../assets/service/image5.png";
import image6 from "../../assets/service//image6.png";
import image7 from "../../assets/service/image7.png";
import image8 from "../../assets/service/image8.png";

const Service = () => {
  const servicedata = [
    {
      id: image1,
      service1: "エンジン開発",
      content:
        "小型エンジンを中心にさまざまなカテゴリーの製品を開発しています。新規開発を積極的に行い、最新技術を常に取り入れ技術の向上を図っています。",
    },
    {
      id: image2,
      service1: "実験",
      content:
        "強度や耐久性などさまざまな評価を行い、お客様が求める期待値を常に満足できるように仕様を目標としています。",
    },
    {
      id: image3,
      service1: "CAE",
      content:
        "3Dモデルによる評価により、構造解析、流体解析により摩擦の最小化に取り組んでおります。",
    },
    {
      id: image4,
      service1: "制御開発",
      content:
        "設計から開発を行うエンジニアが多数在籍しており、自動運転用の制御設計も行っています。",
    },
    {
      id: image5,
      service1: "生産技術開発",
      content:
        "会社独自の生産体制を構築し、最小限のコストで最高の品質を保つ製品開発を支援いたします。",
    },
    {
      id: image6,
      service1: "設計",
      content: "CADを用いて、お客様の要望に沿ったエンジンの設計をいたします。",
    },
    {
      id: image7,
      service1: "デジタルマーケティング",
      content: "デジタル媒体を活用して、世界中に自社製品の強みを発信します。",
    },
    {
      id: image8,
      service1: "共同研究",
      content: "○○○大学とEV研究・共同開発をしております。",
    },
  ];

  return (
    <div className="container service-section">
      <div className="section_title">
        <h5>
          <strong>事業内容</strong>
        </h5>
        <span className="line"></span>
      </div>
      <div className="row">
        <Zoom>
          {servicedata.map((item, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="services">
                <span>
                  <img src={item.id} className="service-number" />
                </span>
                <span className="service_item_underline"></span>
                <div className="list-of-service">
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service1}
                  </p>
                  <p className="service-content">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </Zoom>
      </div>
    </div>
  );
};

export default Service;
