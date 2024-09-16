import React from "react";
import { discord, medium, telegram, twitterX } from "../../Base/SVG";

export default function Join() {
  return (
    <section className="join">
      <div className="join__bg">
        <div className="shape">
          <img src="images/blur-2.svg" alt="" />
        </div>
        <div className="shape right">
          <img src="images/blur-2.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="join__inner">
          <h2>Join Our Community</h2>
          <div className="social">
            <a href="https://twitter.com/BETTOai_" target="_blank">
              {twitterX}
              Twitter
            </a>
            <a href="#">
              {medium}
              Medium
            </a>
            <a href="#">
              {telegram}
              Telegram
            </a>
            <a href="https://discord.gg/7J4xKYXYH5" target="_blank">
              {discord}
              Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
