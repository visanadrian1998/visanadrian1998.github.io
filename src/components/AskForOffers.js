import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from './Typography';
import Button from './Button';
import TextField from './TextField';
import Snackbar from './Snackbar';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import CheckIcon from '@mui/icons-material/Check';
import emailjs from "@emailjs/browser";

function AskForOffers(props) {
    const [numeValue, setNumeValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [telefonValue, setTelefonValue] = useState("");
    const [nrPersoaneValue, setNrPersoaneValue] = useState("");
    const [dateValue, setDateValue] = useState(new Date());
    const [weddingTypeText, setWeddingTypeText] = useState("");
    const [formSent, setFormSent] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        let weddingType;
        switch (props.type) {
            case 'greek': weddingType = 'Grecească'; break;
            case 'tropical': weddingType = 'Tropicală'; break;
            case 'classic': weddingType = 'Clasică'; break;
            case 'personalized': weddingType = 'Personalizată'; break;
            default: break;
        }
        setWeddingTypeText(weddingType)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSent("inProgress");
        const paramsEmailOffer = {
            weddingType: props.type,
            name: numeValue,
            email: emailValue,
            telefon: telefonValue,
            nrPersoane: nrPersoaneValue,
            dataIdeala: dateValue
        }
        setFormSent("error");
        setOpenSnackbar(true);
        setTimeout(()=>{
            setOpenSnackbar(false);
        },6000);
        
       /* emailjs.send('service_fymvirl', 'template_6aen5ff', paramsEmailOffer, 'X_0FA3ZBZUm-LNe80')
            .then((response) => {
                setFormSent("success");
            }).catch((error) => {
                setFormSent("error");
            }).finally(() => {
                setOpenSnackbar(true);
                setTimeout(()=>{
                    setOpenSnackbar(false);
                },6000);
            });*/
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
                    Cere oferta pentru nunta ta {weddingTypeText}
                </Typography>
                <Typography variant="h5">
                    Avem nevoie de cateva informatii in plus pentru a finaliza.
                </Typography>
                <TextField
                    label="Nume si prenume"
                    noBorder
                    variant="standard"
                    onChange={(newValue) => setNumeValue(newValue.target.value)}
                    sx={{ width: '100%', mt: 3, mb: 2 }}
                />
                <TextField
                    label="Email"
                    noBorder
                    variant="standard"
                    onChange={(newValue) => setEmailValue(newValue.target.value)}
                    sx={{ width: '100%', mt: 3, mb: 2 }}
                />
                <TextField
                    label="Telefon"
                    noBorder
                    variant="standard"
                    onChange={(newValue) => setTelefonValue(newValue.target.value)}
                    sx={{ width: '100%', mt: 3, mb: 2 }}
                />
                <TextField
                    label="Numar persoane"
                    noBorder
                    variant="standard"
                    onChange={(newValue) => setNrPersoaneValue(newValue.target.value)}
                    sx={{ width: '100%', mt: 3, mb: 2 }}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                        label="Data ideala"
                        inputFormat="dd/MM/yyyy"
                        value={dateValue}
                        onChange={(newValue) => setDateValue(newValue)}
                        renderInput={(params) => <TextField noBorder variant="standard" sx={{ width: '100%', mt: 3, mb: 2 }} {...params} />}
                        disablePast
                        shouldDisableDate={(date) => {
                            const month = date.getMonth();
                            return month < 4 || month > 8
                        }}
                    />
                </LocalizationProvider>
                {formSent === "success" ?
                    <Button
                        endIcon={<CheckIcon />}
                        color="success"
                        variant="contained"
                        sx={{ width: '100%' }}
                    >Succes
                    </Button> :
                    formSent === "error" ?
                        <Button
                            color="error"
                            variant="contained"
                            sx={{ width: '100%' }}
                        >Eroare
                        </Button>
                        :
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            disabled={formSent === "inProgress" ? true : false}
                            sx={{ width: '100%' }}
                        >
                            Trimite
                        </Button>
                }
            </Box>
            <Snackbar
                open={openSnackbar}
                closeFunc={() => setOpenSnackbar(false)}
                message={formSent==="success"?"Vă mulțumim! Vă vom contacta în cel mai scurt timp.":formSent==="error"?"Am întâmpinat o eroare. încercați din nou mai târziu.":""}
            />
        </Box>
    );
}

export default AskForOffers;
