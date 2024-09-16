import React from "react";

export default function Info() {
  return (
    <section className="info">
      <div className="auto__container">
        <div className="info__inner">
          <div className="info__inner-content">
            <div className="infoRow">
              <h4>Start date</h4>
              <h5> 16th of May 2024</h5>
            </div>
            <div className="infoRow">
              <h4>duration</h4>
              <h5>60 DAYS</h5>
            </div>
            <div className="infoRow">
              <h4>initial marketcap</h4>
              <h5>$ 1,000,000 FDV</h5>
            </div>
            <div className="infoRow">
              <h4>MAX TOTAL SUPPLY</h4>
              <h5>1,000,000,000</h5>
            </div>
            <div className="infoRow">
              <h4>INITAL TOKEN PRICE</h4>
              <h5>$0.001</h5>
            </div>
            <div className="infoRow">
              <h4>MIN INVESTMENT</h4>
              <h5>0.5 ETH</h5>
            </div>
            <div className="infoRow">
              <h4>MAX INVESTMENT</h4>
              <h5>25 ETH</h5>
            </div>
            <div className="infoRow">
              <h4>HARD CAP</h4>
              <h5>300 ETH</h5>
            </div>
            <div className="infoRow">
              <h4>DISTRIBUTION</h4>
              <h5>AFTER PRE SALE</h5>
            </div>
            <div className="infoRow">
              <h4>RELEASE</h4>
              <h5>VESTED / 90 DAYS</h5>
            </div>
            <a href="#" className="button primary">
              {" "}
              Apply Now{" "}
            </a>
          </div>
          <div className="info__inner-image">
            <img src="./images/info.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
