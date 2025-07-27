import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import QuizContext from "../contexts/QuizContext";

export function RestartButton() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setLevel, setAnswers } = useContext(QuizContext);

  const handleRestart = () => {
    setAnswers({});
    setLevel(null);
    navigate("/");
  };

  return (
    <button
      onClick={handleRestart}
      className="mt-2 px-3 py-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
    >
      {t("common.restart")}
    </button>
  );
}
