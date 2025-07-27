import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import './i18n'
import App from './App'
import { LanguageProvider } from './contexts/LanguageContext'
import { QuizProvider } from './contexts/QuizContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <LanguageProvider>
        <QuizProvider>
            <App />
        </QuizProvider>
    </LanguageProvider>
)
