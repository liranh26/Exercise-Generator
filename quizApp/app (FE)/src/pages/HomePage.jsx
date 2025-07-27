import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LevelSelector } from '../components/LevelSelector'
import { TopicInput } from '../components/TopicInput'
import QuizContext from '../contexts/QuizContext'

export default function HomePage() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { level, topic } = useContext(QuizContext)

    const handleStart = () => {
        if (level) navigate('/quiz')
        else alert(t('home.selectLevel'))
    }

    return (
      <div className="flex flex-col min-h-screen bg-gray-100 p-4 space-y-6">
            <TopicInput />

            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg text-center space-y-6">
                <p className="text-gray-600">{t('home.selectLevel')}</p>
                <LevelSelector />
                <button
                    onClick={handleStart}
                    disabled={!topic.trim() || !level}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-50"
                >
                    {t('home.start')}
                </button>
            </div>
        </div>
    )
}
