import React from "react";
import "./team.css";
import Zoom from "react-reveal/Zoom";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Team = () => {
  const data = [
    {
      id: 1,
      name: "社長     佐藤太郎",
      content:
        "私は佐藤太郎です。当社は革新的なエンジンテクノロジーを提供し、顧客のニーズに応えるために情熱を傾けています。",
      img: "https://images.pexels.com/photos/3761521/pexels-photo-3761521.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "エンジン設計 部長      佐藤一郎",
      content:
        "エンジン設計部門の部長として、私たちは日々、革新的なエンジンテクノロジーの開発に情熱を傾けています。私たちの目標は、高性能で効率的なエンジンを設計し、お客様に最高品質の製品を提供することです。",
      img: "https://images.pexels.com/photos/1747178/pexels-photo-1747178.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "解析部門     佐藤二郎",
      content:
        "私たちの解析チームは、最新のテクノロジーとデータ分析手法を駆使し、データ駆動の未来に向けて歩みを進めています。私たちはデータの魔法使いとして、お客様と協力して、ビジネスの成長と成功に貢献したいと考えています。",
      img: "https://images.pexels.com/photos/3760539/pexels-photo-3760539.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "財務責任者      日本花子",
      content:
        "厳格な原則と最新の財務ツールを駆使して、会社の財務状況を監視し、効果的な財務戦略を策定しています。私たちはお客様、取引先、ステークホルダーと協力し、信頼と透明性を維持しながら、組織をより強固にしていくことに全力を注いでいます。",
      img: "https://images.pexels.com/photos/7414008/pexels-photo-7414008.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "生産部門責任者       佐藤三郎",
      content:
        "私たちの生産チームは、最新の技術と最良のプラクティスを活用して、生産プロセスを最適化し、効率を向上させています。品質管理と安全性に対する取り組みを欠かすことなく、信頼性のある製品をお客様にお届けできるよう努力しています。",
      img: "https://images.pexels.com/photos/5384450/pexels-photo-5384450.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      name: "社員         山田そのこ",
      content:
        "山田そのこ です。今回のプロジェクト/会議/協力において、チームの一員として参加させていただきます。私はこの機会を通じて、皆さんと一緒に協力し、共通の目標を達成することを楽しみにしています。",
      img: "https://images.pexels.com/photos/1181477/pexels-photo-1181477.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="container team-members">
      <div className="section_title">
        <h5>会 社 役 員</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <Zoom>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="card team-members-item">
                <img src={item.img} alt="team-image" />
                <div className="team-info">
                  <h6>
                    <strong>{item.name}</strong>
                  </h6>
                  <p>{item.content}</p>
                </div>
                <span className="line-for-teammembers"></span>
                <div className="social-icons">
                  <p>
                    <FaSquareFacebook size={25} />
                  </p>
                  <p>
                    <FaXTwitter size={25} />
                  </p>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Team;
