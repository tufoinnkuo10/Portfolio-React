import React from "react";
import "./Home.css";
import hero from "../pic/hero.png";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import TypeWriter from "react-typewriter";
const url = "https://www.linkedin.com/in/tufoin-nkuo-3b272320b/";
const url2 = "https://github.com/tufoinnkuo10";
const url3 = "https://twitter.com/Itztenten";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            {/* <h3> </h3> */}
            <h1>
              Hi, I'm <span>Tufoin Nkuo</span>
            </h1>
            <h2>
              a Full-Stack Developer
              <span>
                <TypeWriter
                  words={[" Professional Coder.", " Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and have
              a project you need coded, don’t hestiate to contact me..
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
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
                        <a href={url} target="_blank" rel="noopener noreferrer">
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
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="" />
                </button>
                {/* <button className="btn_shadow">
                  <img src={skill3} alt="" />
                </button> */}
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="mainpicture" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
