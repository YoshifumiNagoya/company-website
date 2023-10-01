import React from "react";
import ReactPlayer from "react-player";
import "./product.css";
import Zoom from "react-reveal/Zoom";
import product1 from "../../assets/product/product1.jpg";
import product2 from "../../assets/product/product2.jpg";
import product3 from "../../assets/product/product3.png";

const Product = () => {
  const data = [
    {
      id: 1,
      img: product1,
      content:
        "新型エンジンはエコフレンドリーな未来を形作ります。40%の燃費向上と低排出ガス特性で、自動車業界ではクリーンな移行を支え、航空宇宙分野では長距離飛行と宇宙探査に新たな可能性をもたらします。発電所ではクリーンエネルギー生産が実現し、持続可能なエネルギー未来への道を切り拓きます。私たちの革新的なデザインとデジタル制御技術により、高い効率と信頼性を提供し、これからの産業に革命をもたらします。新型エンジンは、持続可能性と高性能を結びつける未来の動力源です。",
      url: "https://www.youtube.com/watch?v=1bdWenG1Z4k&pp=ugMICgJqYRABGAHKBQsgY2FyIGVuZ2luZQ%3D%3D",
      title: "bendoll faster",
    },
    {
      id: 2,
      img: product2,
      content:
        "最新のテクノロジーを駆使して、エンジンの性能と効率を飛躍的に向上させました。新型エンジンは高出力と低燃費を実現し、環境にもやさしい設計です。その特徴は、革新的な燃焼技術と高度な制御システムにより、エネルギーの無駄を最小限に抑えます。さらに、耐久性と信頼性にも優れ、長寿命を実現しました。新しいエンジンはさまざまな用途に適しており、自動車から発電機まで幅広い分野で活用されています。詳細情報や性能データについては、当ウェブサイトをご覧いただき、ご質問やお問い合わせについてはお気軽にお知らせください。新たなる革命をご一緒に体験しましょう！",
      url: "https://www.youtube.com/watch?v=R9GZtDeBKvo&pp=ygULIGNhciBlbmdpbmU%3D",
      title: "bendoll goll",
    },
    {
      id: 3,
      img: product3,
      content:
        "コンパクトな設計で車両の設置スペースを最小限に抑え、軽量な材料を使用して燃費向上に貢献しています。新型エンジンは自動車産業に革命をもたらし、未来のモビリティにおいて新たなスタンダードを設定します。コンパクトな設計で車両の設置スペースを最小限に抑え、軽量な材料を使用して燃費向上に貢献しています。このエンジンは、高効率の燃焼プロセスとエネルギー回収システムを組み合わせ、環境に優しい排出ガスを実現しています。",
      url: "https://www.youtube.com/watch?v=4yqGqbYmtwI&pp=ygUKY2FyIGVuZ2luZQ%3D%3D",
      title: "exclusive piston",
    },
  ];

  return (
    <div className="container video">
      <div className="section_title">
        <h5>
          <strong>製 品 ラインナップ</strong>
        </h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <Zoom>
            <div className="col-xl-12 col-lg-12 col-md-12 col-xm-12 col-sm-12">
              <div className="video-content">
                <h5>{item.title}</h5>
              </div>
              <div className="video-details" key={index}>
                <div className="video-detail">
                  <img src={item.img} alt="product-image" />
                </div>
                <div className="video-intro">
                  <p>{item.content}</p>
                  <ReactPlayer
                    url={item.url}
                    controls
                    loop={true}
                    width="auto"
                    height="250px"
                  />
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Product;
