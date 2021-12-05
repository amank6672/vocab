import React, { useState } from 'react';
import Word from '../word/Word';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './WordList.css';
import AddWord from '../add-word/AddWord';

const WordList = ({refetchList, wordList}) => {

    const [open, setOpen] = useState(false);

    const openAddWordModal = () => {
        setOpen(true);
    }

    const renderWords = () => {
        let HTML = wordList.map((word, key) => {
            return <Word word={word} key={key} />
        });
        return HTML;
    }
    return <>
        <div className="wordlist-wrapper">
            <div className="title">Words List</div>
            <div className="wordlist">
                {renderWords()}
            </div>
            <AddWord open={open} setOpen={setOpen} refetchList={refetchList} />
            <Fab color="primary" aria-label="add" className="floating-icon" onClick={openAddWordModal}>
                <AddIcon />
            </Fab>
        </div>
    </>
};

export default WordList;