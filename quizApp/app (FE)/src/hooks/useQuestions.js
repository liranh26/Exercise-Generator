import { useEffect, useState } from 'react';
import { fetchQuestions } from '../services/api';

export function useQuestions(level, topic) {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading]   = useState(!!(level && topic));
    const [error, setError]       = useState(null);

    useEffect(() => {
        if (!level || !topic) return;
        setLoading(true);
        fetchQuestions(level, topic)
            .then(data => setQuestions(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, [level, topic]);

    return { questions, loading, error };
}