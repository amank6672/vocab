import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import './WordDetail.css';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
const WordDetail = (props) => {
    const { state: word } = useLocation();
    const navigate = useNavigate();

    const navigateToHome = () =>{
        navigate('/');
    }

    const formDefinition = (entry) => {
        return <ul>
            {entry.entries && entry.entries.map((data, key1) => {
                return <li key={key1}>
                    {
                        data.senses && data.senses.map((sense, key2) => {
                            return <li key={key2}>
                                {sense.definitions && sense.definitions.map((definition, key3) => {
                                    return <li className="definition" key={key3}>{definition}</li>
                                })}
                                {sense?.examples && sense.examples.map((example, key4) => {
                                    return <li className="examples" key={key4}>{example.text}</li>
                                })}
                            </li>
                        })
                    }
                </li>
            })}
        </ul>
    }

    const renderResult = () => {
        let HTML = [];
        word.results.map((result, key) => {
            const lexicalEntries = result?.lexicalEntries;
            lexicalEntries.map((entry) => {
                const type = entry.lexicalCategory?.text;
                HTML.push(<React.Fragment key={key}>
                    <div className="type"><i>{type}</i></div>
                    <div className="desc">{formDefinition(entry)}</div>
                </React.Fragment>)
                return null;
            })
            return null;
        });
        return HTML;
    }

    return <div className="word-detail-wrapper">
        <div className="top">
            <h1>{word.word}</h1>
            <IconButton size="large" aria-label="close" className="close-button" onClick={navigateToHome}>
                <CloseIcon />
            </IconButton>
        </div>
        <div className="result">{renderResult()}</div>
    </div>
};

export default WordDetail;