import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Benefits() {
  const [tab, setTab] = useState("1");
  return (
    <section className="benefits">
      <div className="benefits__bg">
        <div className="shape">
          <img src="images/blur-2.svg" alt="" />
        </div>
        <div className="shape right">
          <img src="images/blur-2.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="benefits__inner">
          <div className="benefits__inner-col">
            <div className="benefitsItem">
              <div
                onClick={() => setTab("1")}
                className={
                  "benefitsItem__button " + (tab === "1" ? "active" : "")
                }
              >
                <h5>AI Betting Picks</h5>
              </div>
            </div>
            <div className="benefitsItem">
              <div
                onClick={() => setTab("2")}
                className={
                  "benefitsItem__button " + (tab === "2" ? "active" : "")
                }
              >
                <h5>Best Odds Guranteed</h5>
              </div>
            </div>
            <div className="benefitsItem">
              <div
                onClick={() => setTab("3")}
                className={
                  "benefitsItem__button " + (tab === "3" ? "active" : "")
                }
              >
                <h5>Live Statistics</h5>
              </div>
            </div>
            <div className="benefitsItem">
              <div
                onClick={() => setTab("4")}
                className={
                  "benefitsItem__button " + (tab === "4" ? "active" : "")
                }
              >
                <h5>Sign Up Offers</h5>
              </div>
            </div>
            <div className="benefitsItem">
              <div
                onClick={() => setTab("5")}
                className={
                  "benefitsItem__button " + (tab === "5" ? "active" : "")
                }
              >
                <h5>In-App Betting</h5>
              </div>
            </div>
            <div className="benefitsItem">
              <div
                onClick={() => setTab("6")}
                className={
                  "benefitsItem__button " + (tab === "6" ? "active" : "")
                }
              >
                <h5>Arbitrage Betting</h5>
              </div>
            </div>
          </div>
          <div className="benefits__inner-content">
            <AnimatePresence>
              {tab === "1" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                  className="benefitsItem__content"
                >
                  <div className="benefitsItem__content-inner">
                    <h2>AI Betting Picks</h2>
                    <p>
                      Unlock the revolutionary power of artificial intelligence
                      with BETTO.ai’s daily sports betting picks. Our
                      sophisticated AI and machine learning algorithms have been
                      meticulously trained over 18 months to analyze patterns
                      and trends across thousands of games. This extensive
                      training has empowered our systems to generate picks that
                      have consistently delivered thousands of units of profit.
                    </p>
                    <p>
                      Access our highly accurate and profitable betting tips
                      through our intuitive Chatbot AI on the website or engage
                      directly via our Discord server. Our algorithms sift
                      through complex datasets to provide you with clear,
                      actionable betting strategies, turning the sophisticated
                      science of machine learning into your winning edge in
                      sports betting.
                    </p>
                    <p>
                      BETTO.ai combines advanced analytics with real-world
                      betting intelligence, giving you access to game-changing
                      insights that elevate your betting game. Each prediction
                      is backed by data-driven analysis, ensuring that every tip
                      offers the highest likelihood of success. Join BETTO.ai
                      today and experience how we bring the power of AI directly
                      into the hands of bettors, transforming guesses into
                      informed decisions.
                    </p>
                  </div>
                </motion.div>
              )}
              {tab === "2" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                  className="benefitsItem__content"
                >
                  <div className="benefitsItem__content-inner">
                    <h2>Best Odds Guranteed</h2>
                    <p>
                      Maximize your betting efficiency with BETTO.ai, where our
                      AI-driven system scours hundreds of highly-rated
                      bookmakers to secure the best odds for you. By leveraging
                      our technology, you tap into a network that compares and
                      updates odds every second, ensuring you always have the
                      most up-to-date and competitive rates available.
                    </p>
                    <p>
                      Understanding the importance of obtaining the best odds is
                      crucial; even slight differences can significantly affect
                      profitability. BETTO.ai’s sophisticated algorithms analyze
                      and present these odds in real-time, providing you with
                      the edge needed to make more informed and lucrative
                      betting decisions.
                    </p>
                    <p>
                      Our commitment to delivering best odds is unmatched,
                      revolutionizing how bets are placed. With BETTO.ai, you
                      not only stay one step ahead of average bettors but also
                      enhance your potential winnings through strategic,
                      data-driven choices. Join us to experience the pinnacle of
                      betting intelligence, where every bet placed is an
                      opportunity maximized.
                    </p>
                  </div>
                </motion.div>
              )}
              {tab === "3" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                  className="benefitsItem__content"
                >
                  <div className="benefitsItem__content-inner">
                    <h2>Live Statistics</h2>
                    <p>
                      With BETTO.ai, access the most comprehensive live and
                      historical sports statistics, powered by AI and machine
                      learning. Our systems meticulously analyze hundreds of
                      millions of data points from football, horse racing,
                      baseball, basketball, American football, tennis, and
                      boxing/MMA. This vast dataset ensures you receive the most
                      current and in-depth statistics, updating live as events
                      unfold.
                    </p>
                    <p>
                      The importance of up-to-date and detailed statistics
                      cannot be overstated in sports betting. By providing these
                      critical insights, BETTO.ai equips you with a deeper
                      understanding of game dynamics and player performance,
                      enhancing your betting strategy. Our AI algorithms are
                      trained to sift through complex data and present it in an
                      easily digestible format, allowing you to make quick and
                      informed decisions.
                    </p>
                    <p>
                      With BETTO.ai, every statistic is more than just a
                      number—it's a piece of a larger puzzle that, when
                      understood, can significantly increase your chances of
                      success. Our platform not only delivers real-time data but
                      also historical insights, giving you a 360-degree view of
                      the betting landscape. Step into a new era of sports
                      betting where precision meets performance, and let
                      BETTO.ai transform your betting experience with unmatched
                      statistical intelligence.
                    </p>
                  </div>
                </motion.div>
              )}
              {tab === "4" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                  className="benefitsItem__content"
                >
                  <div className="benefitsItem__content-inner">
                    <h2>Sign Up Offers</h2>
                    <p>
                      Step into the world of BETTO.ai and unlock a treasure
                      trove of the most lucrative bookmaker offers available.
                      Our platform specializes in sourcing and delivering
                      exceptional sign-up offers, free bets, and money-back
                      guarantees, curated from hundreds of top-rated bookmakers.
                    </p>
                    <p>
                      At BETTO.ai, we understand the value of a great deal.
                      That’s why we negotiate exclusive offers that enhance your
                      betting experience right from the start. Whether you're a
                      novice or a seasoned bettor, our sign-up bonuses are
                      designed to give you the best possible start, maximizing
                      your potential returns with minimal risk.
                    </p>
                    <p>
                      Our AI-driven platform continuously updates these offers
                      to ensure you always have access to the most advantageous
                      deals in the market. With BETTO.ai, signing up isn’t just
                      about joining a sports betting platform—it’s about
                      stepping into a realm of opportunities where every offer
                      is a gateway to potentially profitable betting
                      experiences.
                    </p>
                    <p>
                      Take advantage of BETTO.ai’s sign-up offers and elevate
                      your betting game. Join us today, and let our tailored,
                      data-driven insights guide you to more successful outcomes
                      with every bet you place.
                    </p>
                  </div>
                </motion.div>
              )}
              {tab === "5" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                  className="benefitsItem__content"
                >
                  <div className="benefitsItem__content-inner">
                    <h2>In-App Betting</h2>
                    <p>
                      Dive into the future of betting with BETTO.ai, your
                      premier in-app bookmaking service. Our platform offers a
                      revolutionary way to bet, featuring custom accumulators
                      and parlays with the best odds guaranteed—up to 20% better
                      than our competitors. Enjoy the flexibility of betting
                      with both Bitcoin and Ethereum, ensuring secure, modern
                      transactions tailored to your preferences.
                    </p>
                    <p>
                      At BETTO.ai, we are committed to providing the most
                      up-to-date odds and exceptional bet boosts on
                      accumulators, maximizing your potential returns.
                      Experience instant payouts and bet acceptance,
                      streamlining your betting process like never before. Our
                      platform is globally accessible, welcoming bettors from
                      all countries without the fear of account closures for
                      winning.
                    </p>
                    <p>
                      Our innovative chatbot betting interface simplifies your
                      betting experience. Just tell the chatbot what you want to
                      bet on, and place your bet within 10 seconds. This
                      user-friendly system transforms traditional betting into
                      an efficient, engaging, and highly responsive interaction.
                    </p>
                    <p>
                      Join BETTO.ai today and leverage our in-app betting
                      advantages. Bet smarter, faster, and with better
                      odds—experience the next level of sports betting that’s
                      designed to cater to your needs and exceed your
                      expectations.
                    </p>
                  </div>
                </motion.div>
              )}
              {tab === "6" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                  className="benefitsItem__content"
                >
                  <div className="benefitsItem__content-inner">
                    <h2>Arbitrage Betting</h2>
                    <p>
                      Unlock the full potential of sports betting with
                      BETTO.ai’s arbitrage betting feature. Our platform
                      empowers you to capitalize on bookmaker sign-up offers and
                      odds inconsistencies, ensuring guaranteed profits from
                      sure bets. With BETTO.ai, you have the tools to exploit
                      these opportunities seamlessly, turning small advantages
                      into substantial gains.
                    </p>
                    <p>
                      Arbitrage betting, or 'arb betting', involves placing bets
                      on all possible outcomes of an event across different
                      bookmakers, taking advantage of varying odds to secure a
                      profit regardless of the result. Our sophisticated
                      algorithms are designed to identify these lucrative
                      opportunities in real-time, offering you the chance to
                      make thousands of dollars with minimal risk.
                    </p>
                    <p>
                      At BETTO.ai, we simplify the complex world of arb betting.
                      Our system automatically calculates the optimal stakes for
                      maximum profitability and guides you through the betting
                      process. With access to up-to-the-minute data and a vast
                      array of bookmaker odds, you’re always equipped to make
                      the most informed decisions.
                    </p>
                    <p>
                      Embrace a smarter way to bet with BETTO.ai’s arbitrage
                      betting. Whether you're a seasoned bettor or new to the
                      game, our platform provides a straightforward path to a
                      profitable betting career. Sign up today and start your
                      journey towards guaranteed earnings with every bet.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
