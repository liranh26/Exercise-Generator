import React, { useContext } from 'react'
import QuizContext from '../contexts/QuizContext'

const levels = ['Beginner', 'Intermediate', 'Expert']

export const LevelSelector = () => {
    const { level, setLevel } = useContext(QuizContext)

    return (
        <div className="flex gap-4 my-4">
            {levels.map((lvl) => (
                <button
                    key={lvl}
                    onClick={() => setLevel(lvl)}
                    className={`
            px-4 py-2 rounded
            ${level === lvl
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
          `}
                >
                    {lvl}
                </button>
            ))}
        </div>
    )
}
