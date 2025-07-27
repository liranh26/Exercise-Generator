import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import QuizContext from '../contexts/QuizContext';

export default function HistoryPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { setLevel, setAnswers } = useContext(QuizContext);

    const [history, setHistory] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        setHistory(data);
    }, []);

    const handleRestart = () => {
        setAnswers({});
        setLevel(null);
        navigate('/');
    };

    return (
        <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                {t('history.title')}
            </h1>

            {history.length === 0 ? (
                <p className="text-gray-700 dark:text-gray-300">{t('history.noHistory')}</p>
            ) : (
                <table className="w-full max-w-2xl table-auto bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <thead className="bg-gray-200 dark:bg-gray-700 text-left">
                    <tr>
                        <th className="px-4 py-2">{t('history.date')}</th>
                        <th className="px-4 py-2">{t('history.level')}</th>
                        <th className="px-4 py-2">{t('history.score')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {history.map((item, idx) => (
                        <tr key={idx} className={idx % 2 ? 'bg-gray-100 dark:bg-gray-750' : ''}>
                            <td className="px-4 py-2">{new Date(item.date).toLocaleString()}</td>
                            <td className="px-4 py-2">{item.level}</td>
                            <td className="px-4 py-2">{item.score} / {item.total}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            <button
                onClick={handleRestart}
                className="mt-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
                {t('common.restart')}
            </button>
        </div>
    );
}
