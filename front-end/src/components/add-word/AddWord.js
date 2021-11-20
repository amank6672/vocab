import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Loader from '../loader/Loader';

const AddWord = ({ open, setOpen, refetchList }) => {

    const [keyword, setKeyword] = React.useState('');
    const [showLoader, setShowLoader] = React.useState(false);
    const [message, setMessage] = React.useState({
        open : false,
        message: '',
        type: 'info'
    });
    const handleClose = (isAdd) => {
        if (isAdd) {
            if (!keyword || keyword === '') {
                setMessage({
                    open: true,
                    message: 'Please type something to add.',
                    type: 'error'
                });
            } else {
                setShowLoader(true);
                axios.get(`http://localhost:8081/search?word=${keyword}`)
                    .then(function (response) {
                        setMessage({
                            open: true,
                            message: 'Added to the Queue',
                            type: 'info'
                        });
                        refetchList();
                        setShowLoader(false);
                        setOpen(false);
                    })
                    .catch(function (error) {
                        setMessage({
                            open: true,
                            message: error,
                            type: 'error'
                        });
                        setShowLoader(false);
                        setOpen(false);
                    })
            }

        }
        else
        {
            setOpen(false);
        }

    };

    const handleMessageClose = () =>{
        setMessage({...message, open: false});
    }

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleMessageClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <div>
            <Loader show={showLoader} />
            <Snackbar
                open={message?.open}
                autoHideDuration={6000}
                message={message?.message}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                action={action}
            />
            <Dialog open={open} onClose={handleClose} fullWidth={true}>
                <DialogTitle>Add to Dictionary</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="word"
                        label="New Word"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { handleClose(false) }}>CANCEL</Button>
                    <Button onClick={() => { handleClose(true) }}>ADD</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default AddWord;