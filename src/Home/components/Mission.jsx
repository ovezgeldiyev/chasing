import React from "react";

export default function Mission() {
  return (
    <section className="mission">
      <div className="mission__bg">
        <div className="shape">
          <img src="images/blur-2.svg" alt="" />
        </div>
        <div className="shape right">
          <img className="desc" src="images/blur-1.svg" alt="" />
          <img className="mob" src="images/blur-2.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="mission__inner">
          <div className="mission__inner-grid">
            <div className="mission__inner-col">
              <div className="missionItem sm tall">
                <h2>67.4%</h2>
                <p>Strike Rate</p>
              </div>
              <div
                className="missionItem"
                style={{
                  background:
                    "linear-gradient(128.16deg, #fef392 2.22%, #9ffee9 93.66%)",
                }}
              >
                <h2>25+</h2>
                <p>Sports Supported</p>
              </div>
              <div
                className="missionItem sm short"
                style={{
                  background:
                    "linear-gradient(209.69deg, #fded92 9.39%, #ec4ba8 188.81%)",
                }}
              >
                <h2>33.9%</h2>
                <p>AVG ROI</p>
              </div>
            </div>
            <div className="mission__inner-col">
              <div
                className="missionItem"
                style={{
                  background:
                    "linear-gradient(48.69deg, #24d9ae 0.24%, #fbf392 100%)",
                }}
              >
                <h4>100,000,000,000</h4>
                <p>Data Points</p>
              </div>
              <div
                className="missionItem ex"
                style={{
                  background:
                    "linear-gradient(167.4deg, #89ffe4 9.13%, #23d7ad 93.93%)",
                }}
              >
                <h4>4.4 Seconds</h4>
                <p>Average Response</p>
              </div>
            </div>
          </div>
          <div className="mission__inner-content">
            <h2>We And Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Molestie placerat justo
              aliquet tellus felis ornare dignissim sapien. Urna sed enim neque
              neque urna varius diam vitae. Tortor vel nunc quis urna metus
              feugiat leo proin.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Molestie placerat justo
              aliquet tellus felis ornare dignissim sapien. Urna sed enim neque
              neque urna varius diam vitae. Tortor vel nunc quis urna metus
              feugiat leo proin. Mi feugiat dictum mauris turpis donec egestas.
              Tempor ipsum ut habitasse viverra. Accumsan.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
