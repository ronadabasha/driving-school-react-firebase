import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Tests from "./pages/tests";
import Contact from "./pages/contact";
import LatestNews from "./pages/latest-news";
import Courses from "./pages/courses";
import MainLayout from "./layouts/main-layout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
