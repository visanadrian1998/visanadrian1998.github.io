import React from 'react';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Typography from '../components/Typography';
import CurvyLines from '../views/svg/backgroundCurvyLines.png';
import Sezlong from "../views/svg/sezlong.svg";
import Timona from "../views/svg/timona.svg";
import Portofel from "../views/svg/portofel.svg";

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: 5,
    cursor: "pointer",
};
function ChooseWedding() {
    const navigate = useNavigate();

    return (
        <div>
            <Box
                component="section"
                sx={{ overflow: 'hidden', bgcolor: 'secondary.light' }}
            >
                <Container
                    sx={{
                        mt: 3,
                        mb: 14,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography color="inherit" align="center" variant="h4" marked="center">
                        Alege din varietatea de nunți pe care o oferim!
                    </Typography>
                </Container>
                <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
                    <Box
                        component="img"
                        src={CurvyLines}
                        alt="curvy lines"
                        sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
                    />
                    <Grid container spacing={5} justifyContent="center"
                        alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Box onClick={() => navigate("/nunta-greceasca")} sx={item}>
                                <Box
                                    component="img"
                                    src={Sezlong}
                                    alt="suitcase"
                                    sx={{ height: 55, backgroundRepeat: 'repeat' }}
                                />
                                <Typography variant="h6" sx={{ my: 5 }}>
                                    Nuntă grecească
                                </Typography>
                                <Typography variant="h5" sx={{ textAlign: "center" }}>
                                    {
                                        'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                                    }

                                    {'your Sundays will not be alike.'}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box
                                    component="img"
                                    src={Timona}
                                    alt="timona"
                                    sx={{ height: 55 }}
                                />
                                <Typography variant="h6" sx={{ my: 5 }}>
                                    Nuntă tropicală
                                </Typography>
                                <Typography variant="h5" sx={{ textAlign: "center" }}>
                                    {
                                        'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                                    }

                                    {'your Sundays will not be alike.'}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box
                                    component="img"
                                    src={Portofel}
                                    alt="portofel"
                                    sx={{ height: 55 }}
                                />
                                <Typography variant="h6" sx={{ my: 5 }}>
                                    Nuntă clasică
                                </Typography>
                                <Typography variant="h5" sx={{ textAlign: "center" }}>
                                    {'By registering, you will access specially negotiated rates '}
                                    {'that you will not find anywhere else.'}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box
                                    component="img"
                                    src={Portofel}
                                    alt="portofel"
                                    sx={{ height: 55 }}
                                />
                                <Typography variant="h6" sx={{ my: 5 }}>
                                    Nuntă personalizată
                                </Typography>
                                <Typography variant="h5" sx={{ textAlign: "center" }}>
                                    {'By registering, you will access specially negotiated rates '}
                                    {'that you will not find anywhere else.'}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default ChooseWedding;
