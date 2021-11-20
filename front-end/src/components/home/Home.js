import React from 'react';
import Header from '../header/Header';
import WordList from '../word-list/WordList';

import './Home.css';

const Home = () => {
    return <div className="home">
        <Header />
        <WordList />
    </div>
}


export default Home;