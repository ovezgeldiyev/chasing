import React from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Count from "./components/Count";
import Info from "./components/Info";
import Mission from "./components/Mission";
import Portal from "./components/Portal";
import Faq from "./components/Faq";
import Token from "./components/Token";
import Choice from "./components/Choice";
import Roadmap from "./components/Roadmap";
import Footer from "../Base/Footer";
import Join from "./components/Join";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Count />
      <Info />
      <Mission />
      <Portal />
      <Token />
      <Choice />
      <Roadmap />
      <Faq />
      <Join />
      <Footer />
    </>
  );
}
