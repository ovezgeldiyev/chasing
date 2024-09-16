import React from "react";

export default function Roadmap() {
  return (
    <section className="roadmap">
      <div className="roadmap__bg">
        <div className="shape">
          <img src="images/blur-2.svg" alt="" />
        </div>
        <div className="shape top">
          <img src="images/blur-2.svg" alt="" />
        </div>
        <div className="shape bottom">
          <img src="images/blur-2.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="roadmap__inner">
          <div className="roadmap__inner-title">
            <h2>Roadmap</h2>
          </div>
          <div className="roadmap__inner-row">
            <div className="roadmap__inner-content">
              <h6>PHASE 1</h6>
              <h2>Foundation Phase</h2>
              <ul>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Machine Learning Development</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Private Sale</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Public Sale</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Dex Launch</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Chatbot Launch</p>
                </li>
              </ul>
            </div>
            <div className="roadmap__inner-image">
              <img src="images/road/pc.png" alt="" />
            </div>
            <div className="roadmap__inner-arrow">
              <img src="images/road/arrowRight.svg" alt="" />
            </div>
          </div>
          <div className="roadmap__inner-row">
            <div className="roadmap__inner-image sm">
              <img src="images/road/desk.png" alt="" />
            </div>
            <div className="roadmap__inner-arrow big">
              <img src="images/road/arrowLeft.svg" alt="" />
            </div>
            <div className="roadmap__inner-content">
              <h6>PHASE 1</h6>
              <h2>Expansion Phase</h2>
              <ul>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>iOS + Android Apps</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>CEX Listings</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Marketing Drive</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Influencer Partnerships</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Social Betting Features</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="roadmap__inner-row">
            <div className="roadmap__inner-content">
              <h6>PHASE 1</h6>
              <h2>Climax Phase</h2>
              <ul>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Partnerships with Sportsbooks</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Event and Team Sponsorship</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Esports Betting Expansion</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Compliance Framework Establishment</p>
                </li>
                <li>
                  <span>
                    <img src="/images/tick.svg" alt="" />
                  </span>
                  <p>Community Driven Development</p>
                </li>
              </ul>
            </div>
            <div className="roadmap__inner-image ex">
              <img src="images/road/shot.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
