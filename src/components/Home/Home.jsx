import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import { Fade } from "react-reveal";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const Home = ({ theme, handleChangeTheme }) => {
  return (
    <div className="container-fluid home">
      <div className="theme-change" onClick={() => handleChangeTheme()}>
        {theme === "light" ? (
          <p>
            <MdDarkMode size={20} />
          </p>
        ) : (
          <p className="theme-icon">
            <BsSun size={20} />
          </p>
        )}
      </div>
      <Fade left>
        <div className="container home-content">
          <h1>
            <Typewriter
              options={{
                strings: [
                  "世界初のAI制御によるエンジン",
                  "50km/L   実現",
                  "世界シェア１２％",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>
            世界で活躍するベンドルのエンジン。高い信頼性、最高のコストパフォーマンス、世界シェア１２％
          </p>
          <span className="product-details">商品ラインナップへ</span>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
