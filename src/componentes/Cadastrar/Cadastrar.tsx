import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import { cadastrar } from '@/firebase/firebase';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const cnpj = data.get('cnpj') as string;
  const razaoSocial = data.get('razaoSocial') as string;
  const nomeFantasia = data.get('nomeFantasia') as string;
  const inscricaoEstadual = data.get('inscricaoEstadual') as string;
  const numeroFuncionarios = data.get('numeroFuncionarios') as string;
  const email = data.get('email') as string;
  const password = data.get('password') as string;
  cadastrar(email, password, cnpj, razaoSocial, nomeFantasia, inscricaoEstadual, numeroFuncionarios);
};

export default function RegisterView() {
  return (
    
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="cnpj"
                label="CNPJ"
                name="cnpj"
                autoComplete="cnpj"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="razaoSocial"
                label="Razão Social"
                name="razaoSocial"
                autoComplete="razaoSocial"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="nomeFantasia"
                label="Nome Fantasia"
                name="nomeFantasia"
                autoComplete="nomeFantasia"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="inscricaoEstadual"
                label="Inscrição Estadual"
                name="inscricaoEstadual"
                autoComplete="inscricaoEstadual"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="numeroFuncionarios"
                label="Número de Funcionários"
                name="numeroFuncionarios"
                autoComplete="numeroFuncionarios"
                type="number"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}
