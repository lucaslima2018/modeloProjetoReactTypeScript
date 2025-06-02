import React from 'react';

import { Typography, TextField, Button, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ThemeProvider } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { button, button2, container1, container2, text1, typography } from "./styleLogin";
import { theme } from '../../components/styleButton';

import NovoUsuario from '../../components/novoUsuario';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    border: 'none',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

function Login() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    const [openNewAccount, setOpenNewAccount] = React.useState(false);
    const handleOpenNewAccount = () => setOpenNewAccount(true);
    const handleCloseNewAccount = () => setOpenNewAccount(false);

   
    return (
        <div>
            <div style={{ backgroundColor: '#00B2A0' }}>
                <Container sx={container1}>
                    <Container sx={container2}>
                        <Typography variant="h4" sx={typography} ><strong>Bem - Vindo</strong></Typography>
                        {/* <ToggleButton> */}
                            <form style={{ marginTop: '2%' }} /*onSubmit={handleLogin}*/>
                                <TextField /*value={email}*/ sx={text1} fullWidth id="outlined-basic" label="E-mail" variant="outlined" /*onChange={(e) => setEmail(e.target.value)} */ />
                                {/* <TextField value={password} fullWidth id="outlined-basic" label="Senha" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} /> */}
                                <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Senha"
                                />
                            </FormControl>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="primary" fullWidth sx={button2} type="submit">Entrar</Button>
                                    <Button variant="contained" color="primary" fullWidth sx={button2}>Redefinir Senha</Button>
                                </ThemeProvider>
                            </form>
                        <Button sx={{ color: '#00B2A0', mt: '4%' }} onClick={handleOpenNewAccount}>Não possui conta? Cadastre-se</Button>
                    </Container>
                </Container>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openNewAccount}
                onClose={handleCloseNewAccount}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openNewAccount}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '2%' }}>
                            Cadastro de Usuários
                        </Typography>
                        <NovoUsuario />
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '480px' }}>
                            <ThemeProvider theme={theme}>
                                <Button variant='contained' color="primary" fullWidth sx={{ width: '353px', ml: '23px', color: '#FFF' }} onClick={handleCloseNewAccount}> Voltar </Button>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default Login;