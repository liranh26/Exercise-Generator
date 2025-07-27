import React from 'react';

export function OptionButton({
                               text,
                               onClick,
                               isSelected,
                               isCorrect,
                               isAnswered
                             }) {

  const baseClasses = 'w-full text-left px-4 py-2 mb-2 border rounded transition-colors';
  let stateClasses = 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700';
  if (isAnswered) {
    if (isSelected) {
      stateClasses = isCorrect
        ? 'bg-green-200 dark:bg-green-700'
        : 'bg-red-200 dark:bg-red-700';
    } else {
      stateClasses = 'opacity-50 cursor-not-allowed';
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isAnswered}
      className={`${baseClasses} ${stateClasses}`}
    >
      {text}
    </button>
  );
}
