import React from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { RestartButton } from './RestartButton'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-6 py-4 flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {t('app.title')}
        </h1>
        <LanguageSwitcher />
        <RestartButton />
      </div>
    </header>
  )
}
