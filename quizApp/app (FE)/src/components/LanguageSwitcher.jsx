import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useContext(LanguageContext)
    return (
      <div className="flex space-x-8">
            <button
              className={`mr-4 px-3 py-1 rounded ${language === 'en' ? 'font-bold underline' : ''}`}
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
            <button
                className={`mr-4 px-3 py-1 rounded ${language === 'he' ? 'font-bold underline' : ''}`}
                onClick={() => setLanguage('he')}
            >
                HE
            </button>
        </div>
    )
}
