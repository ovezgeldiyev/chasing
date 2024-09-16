import React from "react";
import Slider from "react-slick";
export default function Portal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: "linear",
  };
  return (
    <section className="portal">
      <div className="auto__container">
        <div className="portal__inner">
          <div className="portal__inner-title">
            <h2>Chatbot AI Portal</h2>
          </div>
          <div className="portalBanner">
            <div className="portalBanner__bg">
              <img src="./images/laptop.png" alt="" />
            </div>
            <Slider {...settings} className="portal__inner-slider">
              <div className="portalItem">
                <div className="portalItem__inner">
                  <img src="./images/screens/1.png" alt="" />
                </div>
              </div>
              <div className="portalItem">
                <div className="portalItem__inner">
                  <img src="./images/screens/2.png" alt="" />
                </div>
              </div>
              <div className="portalItem">
                <div className="portalItem__inner">
                  <img src="./images/screens/3.png" alt="" />
                </div>
              </div>
              <div className="portalItem">
                <div className="portalItem__inner">
                  <img src="./images/screens/4.png" alt="" />
                </div>
              </div>
              <div className="portalItem">
                <div className="portalItem__inner">
                  <img src="./images/screens/5.png" alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
