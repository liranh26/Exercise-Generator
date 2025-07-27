import React, { useEffect, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import QuizContext from '../contexts/QuizContext';

export default function ResultsPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { level, answers, questions } = useContext(QuizContext);

    const { correctCount, total } = useMemo(() => {
        const total = questions.length;
        const correctCount = questions.reduce(
            (acc, q) => acc + (answers[q.id] === q.correctIndex ? 1 : 0),
            0
        );
        return { correctCount, total };
    }, [questions, answers]);

    useEffect(() => {
        if (questions.length > 0) {
            const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
            history.push({
                date: new Date().toISOString(),
                level,
                score: correctCount,
                total,
            });
            localStorage.setItem('quizHistory', JSON.stringify(history));
        }
    }, [questions, level, correctCount, total]);

    return (
        <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                {t('results.title')}
            </h1>

            <p className="mb-6 text-xl text-gray-700 dark:text-gray-200">
                {t('results.score', { score: correctCount, total })}
            </p>

            <div className="w-full max-w-2xl space-y-4">
                {questions.map((q, idx) => {
                    const userIdx = answers[q.id];
                    const isCorrect = userIdx === q.correctIndex;
                    return (
                        <div
                            key={q.id}
                            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
                        >
                            <p className="font-medium mb-2 text-gray-800 dark:text-gray-100">
                                {idx + 1}. {q.text}
                            </p>
                            <p
                                className={`mb-1 ${
                                    isCorrect ? 'text-green-600' : 'text-red-600'
                                }`}
                            >
                                {isCorrect
                                    ? t('results.yourCorrect')
                                    : t('results.yourAnswer')}
                                : {q.options[userIdx] ?? t('results.noAnswer')}
                            </p>
                            {!isCorrect && (
                                <p className="mb-1 text-green-600">
                                    {t('results.correctAnswer')}: {q.options[q.correctIndex]}
                                </p>
                            )}
                            <p className="text-gray-600 dark:text-gray-400">
                                {t('results.explanation')}: {q.explanation}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 flex space-x-4">
                <button
                    onClick={() => navigate('/quiz')}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                    {t('results.retake')}
                </button>
                <button
                    onClick={() => navigate('/history')}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
                >
                    {t('results.viewHistory')}
                </button>
            </div>
        </div>
    );
}
