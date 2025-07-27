import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import QuizContext from '../contexts/QuizContext';
import { useQuestions } from '../hooks/useQuestions';
import { QuestionCard } from '../components/QuestionCard';
import { RestartButton } from '../components/RestartButton';

export default function QuizPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const {
        level,
        topic,
        answers,
        setAnswers,
        questions,           // מתוך Context
        setQuestions         // כדי למלא Context
    } = useContext(QuizContext);

    const [currentIdx, setCurrentIdx] = useState(0);
    const { questions: fetched, loading, error } = useQuestions(level, topic);

    useEffect(() => {
        if (!level || !topic) {
            navigate('/');
            return;
        }
        setAnswers({});
        setQuestions([]);
        setCurrentIdx(0);
    }, [level, topic, navigate, setAnswers, setQuestions]);

    useEffect(() => {
        if (fetched.length > 0) {
            setQuestions(fetched);
        }
    }, [fetched, setQuestions]);

    if (loading) return <div>{t('quiz.loading')}</div>;
    if (error)   return <div>{t('quiz.error', { message: error.message })}</div>;

    const question = questions[currentIdx];
    if (!question) return <div>{t('quiz.noQuestions')}</div>;

    const selectedIndex = answers[question.id] ?? -1;
    const handleSelect = idx =>
        setAnswers(prev => ({ ...prev, [question.id]: idx }));

    const goNext = () => {
        if (currentIdx < questions.length - 1) {
            setCurrentIdx(i => i + 1);
        } else {
            navigate('/results');
        }
    };
    const goPrev = () =>
        currentIdx > 0 && setCurrentIdx(i => i - 1);

    return (
        <div className="relative min-h-screen flex p-4 bg-gray-100 dark:bg-gray-900 text-center">
            <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-6">
                {/* Progress bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-600 dark:bg-blue-400 transition-all"
                        style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                    />
                </div>

                {/* השאלה */}
                <QuestionCard
                    question={question}
                    selectedIndex={selectedIndex}
                    onSelect={handleSelect}
                />

                {/* כפתורי ניווט */}
                <div className="flex justify-between">
                    <button
                        onClick={goPrev}
                        disabled={currentIdx === 0}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
                    >
                        {t('quiz.prev')}
                    </button>
                    <button
                        onClick={goNext}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded"
                    >
                        {currentIdx < questions.length - 1
                            ? t('quiz.next')
                            : t('quiz.finish')}
                    </button>
                </div>
            </div>
        </div>
    );
}
