import React from "react";
import Countdown, { zeroPad } from "react-countdown"; 
export default function Count() {
  const Completionist = () => <span>You are good to go!</span>;
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      const days2 = zeroPad(days);
      const hours2 = zeroPad(hours);
      const minutes2 = zeroPad(minutes);
      const seconds2 = zeroPad(seconds);
      return (
        <div className="count__inner-row">
          <div className="countItem">
            <div className="countItem__main">
              <div className="countItem__digit">{days2.slice(0, 1)}</div>
              <div className="countItem__digit">{days2.slice(1, 2)}</div>
            </div>
            <div className="countItem__text">
              <h2>Days</h2>
            </div>
          </div>
          <div className="countItem hours">
            <div className="countItem__main">
              <div className="countItem__digit">{hours2.slice(0, 1)}</div>
              <div className="countItem__digit">{hours2.slice(1, 2)}</div>
            </div>
            <div className="countItem__text">
              <h2>Hours</h2>
            </div>
          </div>
          <div className="countItem minutes">
            <div className="countItem__main">
              <div className="countItem__digit">{minutes2.slice(0, 1)}</div>
              <div className="countItem__digit">{minutes2.slice(1, 2)}</div>
            </div>
            <div className="countItem__text">
              <h2>Minutes</h2>
            </div>
          </div>
          <div className="countItem seconds">
            <div className="countItem__main">
              <div className="countItem__digit">{seconds2.slice(0, 1)}</div>
              <div className="countItem__digit">{seconds2.slice(1, 2)}</div>
            </div>
            <div className="countItem__text">
              <h2>Seconds</h2>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <section className="count">
      <div className="auto__container">
        <div className="count__inner">
          <div className="count__inner-title">
            <h2>Private Sale Ends In...</h2>
          </div>
          <Countdown
            zeroPadTime={2}
            date={new Date("2024-05-16")}
            renderer={renderer}
          />
        </div>
      </div>
    </section>
  );
}
