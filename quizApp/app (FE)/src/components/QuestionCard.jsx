import React from 'react';
import { OptionButton } from './OptionButton';

export const QuestionCard = ({ question, selectedIndex, onSelect }) => {
    const isAnswered = selectedIndex !== -1;
    return (
      <div className="p-6 border rounded-lg shadow mb-6">
        <h2 className="mb-4 text-xl font-semibold">{question.text}</h2>
            {question.options.map((opt, idx) => (
                <OptionButton
                    key={idx}
                    text={opt}
                    onClick={() => onSelect(idx)}
                    isSelected={selectedIndex === idx}
                    isCorrect={idx === question.correctIndex}
                    isAnswered={isAnswered}
                />
            ))}
            {isAnswered && (
                <p className="mt-4 italic">
                    {selectedIndex === question.correctIndex ? '✅ ' : '❌ '}
                    {question.explanation}
                </p>
            )}
        </div>
    );
};