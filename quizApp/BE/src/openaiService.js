const OpenAI = require('openai');            // ← מחלקה ברירת־מחדל
require('dotenv').config();
const dummyQuestions = require('./mockData');
const useMock = process.env.USE_MOCK === 'true';

async function getQuestions(level, topic) {
    if (useMock || !process.env.OPENAI_API_KEY) {
        console.log('Using mock questions');
        return dummyQuestions[level] || [];
    }
    const model = process.env.OPENAI_MODEL || 'gpt-3.5-turbo';
    const prompt = `Generate 2 multiple-choice questions on the topic "${topic}" at the ${level} difficulty level. Return only a JSON array where each item has: id, text, options (array of 4), correctIndex, explanation.`;
    console.log("prompt sent to open ai: ", prompt)
    try {
        // Instantiate the client
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

        // Send a chat completion request
        const response = await openai.chat.completions.create({
            model,
            messages: [
                { role: 'system', content: 'You are a question generation service.' },
                {
                    role: 'user',
                    content: prompt,
                }
            ],
            max_tokens: 500,
            temperature: 0.7
        });

        const content = response.choices[0].message.content;
        return JSON.parse(content);
    } catch (err) {
        console.error('OpenAI error, falling back to mock:', err);
        return dummyQuestions[level] || [];
    }
}

module.exports = { getQuestions };
