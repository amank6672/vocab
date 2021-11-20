import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({ show }) => {
    return show ?
        <div className="loader">
            < CircularProgress disableShrink />
        </div >
        :
        <></>
}

export default Loader;
