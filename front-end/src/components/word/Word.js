import React from 'react';
import { useNavigate } from 'react-router';
import './Word.css';

const Word = ({ word }) => {
    const navigate = useNavigate()
    const result = word.results[0];
    const description = result?.lexicalEntries[0]?.entries[0]?.senses[0]?.definitions[0];
    const type = result.lexicalEntries[0].lexicalCategory.text;

    const navigateToDetailPage = () => {
        navigate('/word', {
            state: word
        })
    }

    return <div className="Word" onClick={navigateToDetailPage}>
        <div className="word-name">{word.word}</div>
        <div className="word-description">({type}) {description}</div>
    </div>
};

export default Word;