import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { useNavigate } from "react-router-dom";
function AppAppBar() {
    const navigate = useNavigate();
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <Link
                        onClick={() => navigate("/")}
                        variant="h6"
                        underline="none"
                        color="inherit"
                        sx={{ fontSize: 24, cursor: 'pointer' }}
                    >
                        {'Blue weddings'}
                    </Link>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default AppAppBar;
