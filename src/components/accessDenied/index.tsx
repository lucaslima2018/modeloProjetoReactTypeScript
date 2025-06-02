import React from 'react'
import { Button, Container, Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { botao, container1, container2, container3e4, texto1, texto2 } from "./styleAccessDenied";
import { theme } from '../styleButton';



function AccessDenied() {

    const redirectHome = () => {
        window.location.href = '/'
    }

    return (
        <>
            <Container sx={container1}>
                <Container sx={container2}>
                    <Container sx={container3e4}>
                    </Container>
                    <Typography sx={texto1} variant="h4">
                        404
                    </Typography>
                    <Typography sx={texto2} variant="h6"><b>Acesso negado! Clique no botão abaixo e faça login novamente.</b></Typography>
                    <Container sx={container3e4}>
                        <ThemeProvider theme={theme}>
                        <Button variant="contained" color="primary" fullWidth sx={botao} onClick={() => redirectHome()} >Acessar</Button>
                        </ThemeProvider>
                    </Container>
                </Container>
            </Container>
        </>
    )
}

export default AccessDenied;