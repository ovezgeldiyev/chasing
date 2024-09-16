import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Base/Header";
import Home from "./Home/Home";
import UpHeader from "./Base/UpHeader";
export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <UpHeader />
      <Header />
      <main className="main">
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}
