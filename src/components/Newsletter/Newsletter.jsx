import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="container-fluid newsletter">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="subscription_title">
              <h5> News Letter </h5>
              <div className="subscription-form">
                <input type="text" placeholder="Your E-mail" />
              </div>
              <div className="subscription_button">
                <p>Subscribe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
