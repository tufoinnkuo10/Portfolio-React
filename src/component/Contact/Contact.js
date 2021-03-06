import React, { useState } from "react";
import contact1 from "./contact1.jpg";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const url = "https://www.linkedin.com/in/tufoin-nkuo-3b272320b/";
const url2 = "https://github.com/tufoinnkuo10";
const url3 = "https://twitter.com/Itztenten";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `you entered name as ${data.fullname}. 
	phone number ${data.phone}. 
	email address ${data.email}. 
	Subject matter  ${data.subject}. 
	message : ${data.message}. 
	`
    );
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h2>CONTACT</h2>
            {/* <h1></h1> */}
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" style={{ width: "22rem" }} />
                </div>
                <div className="details">
                  <h1>Tufoin Nkuo</h1>
                  <h2>Full-Stack developer</h2>
                  <p>
                  If you have an application you are interested in developing,
                   a feature that you need built or a project that needs coding.
                    I’d love to help with it
                  </p>{" "}
                  <br />
                  <p>Phone: +237 670854636</p>
                  <p>Email: tufoinnkuo10@gmail.com</p> <br />
                  <span>Reach me Through</span>
                  <div className="button f_flex">
                    <a href={url2} target="_blank" rel="noopener noreferrer">
                      <button className="btn_shadow">
                        <i className="fab fa-facebook-f">
                          <a
                            href={url2}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub />
                          </a>
                        </i>
                      </button>
                    </a>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <button className="btn_shadow">
                        <i className="fab fa-instagram">
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin />
                          </a>
                        </i>
                      </button>
                    </a>
                    <button className="btn_shadow">
                    <i class="fab fa-linkedin-in">
                      <a href={url3} target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </a>
                    </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME :</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER : </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL : </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>SUBJECT : </span>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE : </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE : <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
