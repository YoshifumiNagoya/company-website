import React, { useState } from "react";
import "./question.css";
import DataInfo from "./DataInfo";
import Pagination from "../Pagination/Pagination";

const Question = () => {
  const data = [
    {
      id: 1,
      title: "新卒採用者と中途採用者の比率を教えてください。",
      body: "2023年度 新卒 12.0% 中途 88.0%",
    },
    {
      id: 2,
      title: "インターンシップはオンラインでしょうか。出社が必要でしょうか？",
      body: "COVID-19の状況もあり、日本国内からのオンラインインターンシップを行っておりますが、、自ら選択して出社することも可能です。なお、海外にお住まいの方については原則来日いただいております。",
    },
    {
      id: 3,
      title: "新卒採用への応募を検討していますが、事前予約は必須でしょうか？",
      body: "多くのポジションで必須となっていますが、一部必須ではないポジションもございます。メルカリのカルチャーや働き方などを体験し、理解していただきたいため、インターンシップへの参加を推奨しています。",
    },
    {
      id: 4,
      title: "新卒採用の応募資格を教えてください。",
      body: "国籍や学歴（学年、学部、学科）など一切不問で通年採用を実施しています。",
    },
    {
      id: 5,
      title: "勤務時間について教えてください。",
      body: "時短勤務制」「フルフレックス制（コアタイムなし）」「シフト制」の3種類があります。パフォーマンスがもっとも発揮できる働き方を、メンバー自身が自由に選択できる環境をつくっています。",
    },
    {
      id: 6,
      title: "新卒採用への応募を検討していますが、事前予約は必須でしょうか？",
      body: "多くのポジションで必須となっていますが、一部必須ではないポジションもございます。メルカリのカルチャーや働き方などを体験し、理解していただきたいため、インターンシップへの参加を推奨しています。",
    },
    {
      id: 7,
      title: "新卒採用の応募資格を教えてください。",
      body: "国籍や学歴（学年、学部、学科）など一切不問で通年採用を実施しています。",
    },
    {
      id: 8,
      title: "勤務時間について教えてください。",
      body: "時短勤務制」「フルフレックス制（コアタイムなし）」「シフト制」の3種類があります。パフォーマンスがもっとも発揮できる働き方を、メンバー自身が自由に選択できる環境をつくっています。",
    },
  ];

  const PER_PAGE = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = data.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="container question">
      <div className="section_title">
        <h5>よ く あ る 質 問</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data &&
          currentPageData.map((item, index) => (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <DataInfo props={item} key={index} />
            </div>
          ))}
      </div>
      <div className="pagenation-details">
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};

export default Question;
