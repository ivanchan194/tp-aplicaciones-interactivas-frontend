import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './Header.css';

export default function Header() {
    console.log("Header component")

    return (
        <Toolbar className="header">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Hospital UADE
            </Typography>
            <Button color="inherit"><Link to="/profile">Perfil</Link></Button>
            <Button color="inherit"><Link to="/register">Crear Cuenta</Link></Button>
            <Button color="inherit"><Link to="/login">Iniciar Sesión</Link></Button>
        </Toolbar>
    );
}