import React from 'react';

import Box from '@mui/material/Box';
import Typography from './Typography';
import Button from './Button';
import TextField from './TextField';

function AskForOffers(props) {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("sumbit");
    }
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'warning.main',
                py: 8,
                px: 3,
            }}
        >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
                <Typography variant="h2" component="h2" gutterBottom>
                    Cere oferta
                </Typography>
                <Typography variant="h5">
                    Avem nevoie de cateva informatii in plus pentru a finaliza.
                </Typography>
                <TextField
                    noBorder
                    placeholder="Your email"
                    variant="standard"
                    sx={{ width: '100%', mt: 3, mb: 2 }}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ width: '100%' }}
                >
                    Trimite
                </Button>
            </Box>
        </Box>
    );
}

export default AskForOffers;
