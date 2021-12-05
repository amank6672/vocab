import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import WordList from '../word-list/WordList';
import axios from 'axios';
import Loader from '../loader/Loader';

import './Home.css';

const Home = () => {
    const [wordList, setWordList] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    const [searchText, setSearchText] = useState('');

    const filterWords = (wordList, searchText) => {
        return wordList.filter((word) => {
            if (!searchText || searchText === '') {
                return true
            }
            if (word.word.search(searchText) > -1) {
                return true;
            }

            return false;
        })
    }

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

    return <div className="home">
        <Loader show={showLoader} />
        <Header searchText={searchText} setSearchText={setSearchText} />
        <WordList wordList={filterWords(wordList, searchText)} refetchList={refetchList} />
    </div>
}

export default Home;