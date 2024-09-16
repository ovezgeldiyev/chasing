import React from "react";
import { discord, medium, telegram, twitterX } from "../../Base/SVG";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="shape">
          <img src="images/blur-2.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="hero__inner">
          <div className="hero__inner-row">
            <div className="hero__inner-content">
              <h1>
                The Only AI Sports <br />
                Betting Service <br />
                <span> You'll Ever Need... </span>
              </h1>
              <p>
                Revolutionizing Sports Betting. Unleash the Power of AI to
                Navigate the World of Sports with Unprecedented Precision and
                Insight.
              </p>
              <a href="#" className="button primary">
                Apply For Private Sale
              </a>
              <div className="hero__inner-foot">
                <p>Powered By:</p>
                <div className="hero__inner-logo">
                  <img src="/images/logos/openAI.png" alt="" />
                </div>
                <div className="hero__inner-logo">
                  <img src="/images/logos/gpt.png" alt="" />
                </div>
                <div className="hero__inner-logo">
                  <img src="/images/logos/gpt-turbo.png" alt="" />
                </div>
              </div>
            </div>
            <div className="hero__inner-image">
              <img src="/images/hero.png" alt="" />
              <img className="mob" src="/images/hero-mob.png" alt="" />
            </div>
          </div>
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
