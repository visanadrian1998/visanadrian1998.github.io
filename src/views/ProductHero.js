import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

import backgroundImage from "./svg/beachWeddingCouple.jpg";
import { useNavigate  } from "react-router-dom";

export default function ProductHero() {
    const navigate = useNavigate ();

    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: 'none' }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Upgrade your Sundays
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
            >
                Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                sx={{ minWidth: 200 }}
                onClick={()=> {
                    navigate("/alege-nunta");
                }}
            >
                { 'Creează-ți nunta!' }
            </Button>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
        </ProductHeroLayout>
    );
}
