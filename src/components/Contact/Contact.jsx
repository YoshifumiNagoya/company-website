import React, { useState } from "react";
import "./contact.css";
import { Fade } from "react-reveal";
import { BiMailSend } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [servicetype, setServiceType] = useState("");
  const [message, setMessageType] = useState("");

  const sendEmailInfo = () => {
    fetch("http://localhost:8000/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        servicetype,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });

          console.log(result.error);
        } else {
          toast.success(result.success, {
            position: toast.POSITION.TOP_RIGHT,
          });

          setName("");
          setEmail("");
          setServiceType("");
          setMessageType("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container contact-section">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="image-class">
            <img
              src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=800"
              className="img-fluid"
              alt="image"
            />
          </div>
        </div>
        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Form</h5>
              </div>
              <form>
                <div className="contact-form">
                  <label className="form-label">氏名</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="contact-form">
                  <label className="form-label">Eメール</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="contact-form">
                  <label className="form-label">件名</label>
                  <select
                    className="custom-select"
                    value={servicetype}
                    onChange={(e) => setServiceType(e.target.value)}
                  >
                    <option>製品について</option>
                    <option>採用について</option>
                    <option>インターンシップについて</option>
                    <option>TVやSNSのご依頼</option>
                  </select>
                </div>
                <div className="contact-form">
                  <label className="form-label">内容</label>
                  <textarea
                    type="text"
                    className="form-control"
                    rows="4"
                    maxLength="500"
                    value={message}
                    onChange={(e) => setMessageType(e.target.value)}
                  />
                </div>
                {/* onClick={sendEmailInfo} * フロントエンドのみ */}
                <div className="button-submit" onClick={sendEmailInfo}>
                  <p>
                    送信{" "}
                    <span>
                      <BiMailSend size={20} />
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default Contact;
