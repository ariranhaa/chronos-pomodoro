import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { AboutPomodoro } from "../../pages/AboutPomodoro";
import { Home } from "../../pages/Home";
import { useEffect } from "react";
import { History } from "../../pages/History";
import { Settings } from "../../pages/Settings";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-pomodoro/" element={<AboutPomodoro />} />
        <Route path="/history/" element={<History />} />
        <Route path="/config/" element={<Settings />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
