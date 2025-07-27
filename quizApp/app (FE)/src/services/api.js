export async function fetchQuestions(level, topic) {
    const res = await fetch('http://localhost:3001/api/questions', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ level, topic }),
    });
    if (!res.ok) throw new Error('Failed to fetch questions');
    return res.json();
}