import React, { createContext, useState } from "react";

const QuizContext = createContext({
  level: null,
  setLevel: () => {
  },
  answers: {},
  setAnswers: () => {
  }
});

export const QuizProvider = ({ children }) => {
  const [level, setLevel] = useState(null);
  const [topic, setTopic] = useState("");
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);

  return (
    <QuizContext.Provider value={{
      level, setLevel,
      topic, setTopic,
      answers, setAnswers,
      questions, setQuestions }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
