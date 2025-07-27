const express = require('express');
const cors = require('cors');
const { getQuestions } = require('./src/openaiService');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/questions', async (req, res) => {
    const { level, topic } = req.body;
    try {
        const questions = await getQuestions(level, topic);
        res.json(questions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});