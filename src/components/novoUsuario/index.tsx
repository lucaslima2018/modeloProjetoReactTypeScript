import React from 'react'
import { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { button, text1 } from './styleNovoUsuario';
import { theme } from '../styleButton';

function NovoUsuario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Container>
            <form /*onSubmit={handleLogin}*/>
                <TextField /*value={email}*/ sx={text1} fullWidth id="outlined-basic" label="Nome" variant="outlined" /*onChange={(e) => setEmail(e.target.value)} */ />
                <TextField /*value={email}*/ sx={text1} fullWidth id="outlined-basic" label="E-mail" variant="outlined" /*onChange={(e) => setEmail(e.target.value)} */ />
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" fullWidth sx={button} type="submit">Enviar</Button>
                </ThemeProvider>
            </form>
        </Container>
    )
}

export default NovoUsuario;