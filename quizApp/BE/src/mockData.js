const dummyQuestions = {
    Beginner: [
        {
            id: 'B1',
            text: `What does \`var\` do in JavaScript?`,
            options: [
                'Declares a function',
                'Declares a block-scoped variable',
                'Declares a function-scoped variable',
                'Defines a constant'
            ],
            correctIndex: 2,
            explanation: '`var` declares a function-scoped variable (not block-scoped).'
        },
        {
            id: 'B2',
            text: `Which array method adds one or more elements to the end of an array?`,
            options: ['pop()', 'push()', 'shift()', 'unshift()'],
            correctIndex: 1,
            explanation: '`push()` appends elements to the end of an array.'
        },
        {
            id: 'B3',
            text: `What is the return value of \`console.log()\`?`,
            options: ['undefined', 'null', 'The printed value', 'void'],
            correctIndex: 0,
            explanation: '`console.log()` returns `undefined` after printing to the console.'
        }
    ],
    Intermediate: [
        {
            id: 'I1',
            text: `What is the output of \`typeof NaN\`?`,
            options: ['NaN', 'number', 'undefined', 'object'],
            correctIndex: 1,
            explanation: '`NaN` is considered a number in JavaScript.'
        },
        {
            id: 'I2',
            text: `What does \`===\` check that \`==\` does not?`,
            options: ['Value equality only', 'Type and value equality', 'Reference equality', 'Prototype chain equality'],
            correctIndex: 1,
            explanation: '`===` compares both type and value.'
        },
        {
            id: 'I3',
            text: `What does \`Array.prototype.map()\` return?`,
            options: ['A filtered array', 'A new array of the same length', 'The original array', 'An iterator'],
            correctIndex: 1,
            explanation: '`map()` returns a new array of the same length.'
        }
    ],
    Expert: [
        {
            id: 'E1',
            text: `What is a closure in JavaScript?`,
            options: [
                'A function bundled with its lexical environment',
                'A loop that never ends',
                'A block-scoped variable',
                'A private module pattern'
            ],
            correctIndex: 0,
            explanation: 'A closure remembers its lexical environment.'
        },
        {
            id: 'E2',
            text: `Which phase of the event loop handles Promise callbacks?`,
            options: ['Timers', 'I/O callbacks', 'Microtasks', 'Rendering'],
            correctIndex: 2,
            explanation: 'Promise callbacks are processed in the microtask queue.'
        },
        {
            id: 'E3',
            text: `How does JavaScript’s prototypal inheritance work?`,
            options: [
                'By copying all properties at creation time',
                'By linking objects through a prototype chain',
                'By using classes internally',
                'By compiling to ES5 functions'
            ],
            correctIndex: 1,
            explanation: 'Objects inherit via a prototype chain.'
        }
    ]
};

module.exports = dummyQuestions;