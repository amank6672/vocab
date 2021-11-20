import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import { IconButton } from '@mui/material';

const Header = () => {
    return <div className="header-wrapper">
        <h1 className="header">Vocab</h1>
        <IconButton size="large" aria-label="search" className="search-button">
            <SearchIcon />
        </IconButton>
    </div>
};

export default Header;