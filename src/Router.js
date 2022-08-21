import React from "react";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppAppBar from "./views/AppAppBar";
import Home from "./pages/Home";
import ChooseWedding from "./pages/ChooseWedding";
import GreekWedding from "./pages/GreekWedding";

import theme from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const BrowserRoutes = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppAppBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/alege-nunta" element={<ChooseWedding />} />
                    <Route exact path="/nunta-greceasca" element={<GreekWedding />} />
                </Routes>
            </ThemeProvider>
        </Router>
    );
};
export default BrowserRoutes;
