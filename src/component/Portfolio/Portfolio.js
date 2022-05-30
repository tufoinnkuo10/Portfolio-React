import React from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {
  return (
    <>
      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center ">
            <h4>CHECKOUT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio(still building this portfolio)</h1>
          </div>

          <div className="content grid">
            {Portfolio_data.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.category}
                  totalLike={value.totalLike}
                  title={value.title}
                  describtion={value.describtion}
                  describtion2={value.describtion2}
                  prolink={value.prolink}
                />
              );
            })}

            {/*<div className='box btn_shadow '>
              <div className='img'>
                  <img src='https://.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
