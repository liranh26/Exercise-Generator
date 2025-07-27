import React, { createContext, useState, useEffect } from 'react'
import i18n from '../i18n'

const LanguageContext = createContext({
    language: 'en',
    setLanguage: () => {}
})

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en')

    useEffect(() => {
        i18n.changeLanguage(language)
        document.documentElement.lang = language
        document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr'
    }, [language])

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext
