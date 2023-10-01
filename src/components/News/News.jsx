import React, { useState } from "react";
import "./news.css";

const News = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/7245323/pexels-photo-7245323.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2023年9月5日",
      title: "自動運転バス実証実験のお知らせ",
      content:
        "○○○大学と共同開発した自動運転バスを提供します。名古屋市昭和区を走行します。道路状況によっては中止いたします。",
    },
    {
      img: "https://images.pexels.com/photos/1533715/pexels-photo-1533715.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2023年8月25日",
      title: "お盆休みのお知らせ",
      content:
        "平素はひとかたならぬご厚情にあずかり、心から御礼申し上げます。当社では以下の期間をお盆休みとさせていただきます。 ご迷惑をおかけしますが、ご了承のほどよろしくお願いします。",
    },
    {
      img: "https://images.pexels.com/photos/3781895/pexels-photo-3781895.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2023年7月5日",
      title: "○○○株式会社と企業提携",
      content:
        "さて、このたび当社は、本日開催の取締役会において、株式会社○○○○○○（本社：○○○○○、代表取締役：○○○○）との間で、資本業務提携を行うことを決議いたしましたので、お知らせいたします。  ",
    },
    {
      img: "https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2023年6月30日",
      title: "新型エンジン「ルーズリ」のプレ公開について",
      content:
        "○月○日の〇〇アリーナにて自動車フェアが開催されます。その際、自社開発したルーズリの一般公開をいたします。",
    },
    {
      img: "https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2023年6月30日",
      title: "新型エンジン「ルーズリ」のプレ公開について",
      content:
        "○月○日の〇〇アリーナにて自動車フェアが開催されます。その際、自社開発したルーズリの一般公開をいたします。",
    },
    {
      img: "https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2023年6月30日",
      title: "新型エンジン「ルーズリ」のプレ公開について",
      content:
        "○月○日の〇〇アリーナにて自動車フェアが開催されます。その際、自社開発したルーズリの一般公開をいたします。",
    },
    {
      img: "https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2023年6月30日",
      title: "新型エンジン「ルーズリ」のプレ公開について",
      content:
        "○月○日の〇〇アリーナにて自動車フェアが開催されます。その際、自社開発したルーズリの一般公開をいたします。",
    },
    {
      img: "https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2023年6月30日",
      title: "新型エンジン「ルーズリ」のプレ公開について",
      content:
        "○月○日の〇〇アリーナにて自動車フェアが開催されます。その際、自社開発したルーズリの一般公開をいたします。",
    },
    {
      img: "https://images.pexels.com/photos/5584052/pexels-photo-5584052.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2023年6月30日",
      title: "新型エンジン「ルーズリ」のプレ公開について",
      content:
        "○月○日の〇〇アリーナにて自動車フェアが開催されます。その際、自社開発したルーズリの一般公開をいたします。",
    },
  ];

  const [showMorePost, setShowMorePost] = useState(9);

  const loadMore = () => {
    setShowMorePost((prev) => prev + 3);
  };

  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className="container news-section">
      <div className="section_title">
        <h5>
          <strong>お知らせ</strong>
        </h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, showMorePost).map((item, index) => (
          <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12" key={index}>
            <div className="content-card">
              <img src={item.img} alt="image" />
              <p className="date">{item.date}</p>
              <p className="title">
                <strong>{item.title}</strong>
              </p>
              <p onClick={() => toggleExpand(index)}>
                {expandedItems.includes(index)
                  ? item.content
                  : item.content.slice(0, 40) +
                    (item.content.length > 40 ? "..." : "")}
              </p>
            </div>
          </div>
        ))}
        {showMorePost >= data.length ? null : (
          <span className="load-more-button" onClick={loadMore}>
            さらに表示
          </span>
        )}
      </div>
    </div>
  );
};

export default News;
