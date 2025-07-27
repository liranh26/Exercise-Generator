import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
import HistoryPage from "./pages/HistoryPage.jsx";
import { QuizProvider } from "./contexts/QuizContext";
import { Header } from "./components/Header.jsx";

export default function App() {

  return (
    <QuizProvider>
      <BrowserRouter>
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </QuizProvider>
  );
}
