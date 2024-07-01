import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/home";
import About from "./pages/about";
import Courses from "./pages/courses";
import TestsCategories from "./pages/tests-categories";
import TestsList from "./pages/tests-list";
import CommonQuestions from "./pages/common-questions";
import Contact from "./pages/contact";
import Questions from "./pages/questions";
import {
  ABOUT,
  COMMON_QUESTIONS,
  CONTACT,
  COURSES,
  HOME,
  QUESTIONS,
  TESTS_CATEGORIES,
  TESTS_LIST,
} from "./routes";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={COURSES} element={<Courses />} />
        <Route path={TESTS_CATEGORIES} element={<TestsCategories />} />
        <Route path={TESTS_LIST + "/:categoryId"} element={<TestsList />} />
        <Route
          path={QUESTIONS + "/:categoryId/:testId"}
          element={<Questions />}
        />
        <Route path={COMMON_QUESTIONS} element={<CommonQuestions />} />
        <Route path={CONTACT} element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
