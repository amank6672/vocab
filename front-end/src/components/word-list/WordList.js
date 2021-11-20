import React, { useEffect, useState } from 'react';
import Word from '../word/Word';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './WordList.css';
import AddWord from '../add-word/AddWord';
import axios from 'axios';
import Loader from '../loader/Loader';

const WordList = () => {

    const [open, setOpen] = useState(false);
    const [wordList, setWordList] = useState([]);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        refetchList();
    }, [])

    const refetchList = () => {
        setShowLoader(true);
        axios.get('http://localhost:8081/')
            .then(function (response) {
                setWordList(response.data);
                setShowLoader(false);

            })
            .catch(function (error) {
                console.log(error);
                setShowLoader(false);

            })
    }

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
        <Loader show={showLoader} />
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