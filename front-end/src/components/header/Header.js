import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import { IconButton, TextField } from '@mui/material';

const Header = ({ searchText, setSearchText }) => {
    const [showSearch, setShowSearch] = useState(false);

    return <div className="header-wrapper">
        <h1 className="header">Vocab</h1>
        <div className="search-wrapper">
            <IconButton size="large" aria-label="search" className="search-button" onClick={() => {
                setShowSearch(!showSearch);
            }}>
                <SearchIcon />
            </IconButton>
            {
                showSearch && <TextField className="search-box" label="Search" variant="standard" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }} />
            }
        </div>
    </div>
};

export default Header;