import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import QuizContext from '../contexts/QuizContext'

export const TopicInput = () => {
    const { t } = useTranslation()
    const { topic, setTopic } = useContext(QuizContext)

    return (
        <div className="w-full max-w-md mb-6">
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
                {t('home.topicLabel')}
            </label>
            <input
                type="text"
                value={topic}
                onChange={e => setTopic(e.target.value)}
                placeholder={t('home.topicPlaceholder')}
                className="w-full px-4 py-2 border rounded"
            />
        </div>
    )
}
