import React from "react";
import { facebook, instagram, linkedin, twitter } from "./SVG";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-image">
          <img src="/images/footer.png" alt="" />

          </div>
          <a href="#" className="footer__inner-logo">
            <img src="/images/logo.svg" alt="" />
          </a>
          <div className="footer__inner-row">
            <p>© 2024. All rights reserved.</p>
            <div className="footer__inner-social">
              <a href="#">{instagram}</a>
              <a href="#">{facebook}</a>
              <a href="#">{twitter}</a>
              <a href="#">{linkedin}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
