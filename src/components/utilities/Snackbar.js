import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomSnackbar({ open, setOpen }) {
    const [state, setState] = React.useState({
        vertical: 'top',
        horizontal: 'right',
    });

    const { vertical, horizontal } = state;


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open.state} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={open.status}
                    variant="filled"
                    anchorOrigin={{ vertical, horizontal }}
                    sx={{ width: '100%' }}
                    key={vertical + horizontal}
                >
                    {open.message}
                </Alert>
            </Snackbar>
        </div>
    );
}