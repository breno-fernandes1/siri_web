'use client'

/* //const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, {
           displayName: nameInput,
        surname : surnameInput,
           email: emailInput,
           role: "Cliente",
import React, { useState } from 'react'
import FormWrapper from '../FormWrapper/FormWrapper'
import InputTexto from '@/componentes/InputTexto/InputTexto'
import InputRadio from '@/componentes/InputRadio/InputRadio'
import { useRouter } from 'next/navigation';
const FormInformacoesEmpresa = () => {

    const [razaoSocial, setRazaoSocial] = useState('')
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [inscricaoEstadual, setInscricaoEstadual] = useState('')
    const [numeroDeFuncionarios, setNumeroDeFuncionarios] = useState('')
    const [porteDaEmpresa, setPorteDaEmpresa] = useState(0)

    const router = useRouter()
    const nextPage = () => {
        router.push('perfildecusto')
    }


    return (
        <>
            <FormWrapper tituloprincipal='Informações da empresa' descricao='Descrição ou não aqui'>
                <InputTexto
                    value={razaoSocial}
                    onChangeState={(e: any) => setRazaoSocial(e.target.value)}
                    nomeDoinput={'Razão Social'} />

                <InputTexto
                    value={nomeFantasia}
                    onChangeState={(e: any) => setNomeFantasia(e.target.value)}
                    nomeDoinput={'Nome Fantasia'} />

                <InputTexto
                    value={cnpj}
                    onChangeState={(e: any) => setCnpj(e.target.value)}
                    nomeDoinput={'CNPJ'} />

                <InputTexto
                    value={inscricaoEstadual}
                    onChangeState={(e: any) => setInscricaoEstadual(e.target.value)}
                    nomeDoinput={'Incrição estadual'} />

                <div>PORTE E FATURAMENTO DA EMPRESA</div>

                <InputTexto
                    value={inscricaoEstadual}
                    onChangeState={(e: any) => setInscricaoEstadual(e.target.value)}
                    nomeDoinput={'Número de funcionários'} />

                <InputRadio selectedValue={porteDaEmpresa} labelAndValue={[{
                    label: 'MEI - Até R$ 81.000,00', value: 1,
                    enunciado: ''
                }, {
                    label: 'Microempresa - Até R$ 360.000,00', value: 2,
                    enunciado: ''
                }, {
                    label: 'Pequena empresa - De R$ 360.000,01 a R$ 4.800.000,00', value: 3,
                    enunciado: ''
                }]} onChangeState={(e: any) => setPorteDaEmpresa(e.target.value)} />
            </FormWrapper>

            <button type='button' onClick={() => nextPage()}> PRÓXIMA PÁGINA</button >
        </>
    )
}

export default FormInformacoesEmpresa */

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import { auth, db } from '@/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import NavBar from '@/componentes/InputTexto/NavBar/navbar';


const theme = createTheme();


export default function FormularioInformacoesEmpresa() {
    const [loading, setLoading] = React.useState(false);
    const [mensagemErro, setMensagemErro] = React.useState('');
    const [mensagemSucesso, setMensagemSucesso] = React.useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const razaoSocialInput = data.get('razaoSocial') as string;
        const nomeFantasiaInput = data.get('nomeFantasia') as string;
        const inscricaoEstadualInput = data.get('inscricaoEstadual') as string;
        const cnpjInput = data.get('cnpj') as string;
        // const numeroFuncionarioInput = data.get('numeroDeFuncionarios') as number;

        if (!cnpjInput) {
            setMensagemErro('Preencha a CNPJ corretamente!');
            setMensagemSucesso('');
            return;
        }

        setLoading(true);

        try {
            const userDocRef = doc(db, 'informacoesEmpresa', cnpjInput);
            await setDoc(userDocRef, {
                cnpj: cnpjInput,
                nomeFantasia: nomeFantasiaInput,
                inscricaoEstadual: inscricaoEstadualInput,
                // numeroDeFuncionario: numeroFuncionarioInput

            });
            setMensagemSucesso('Informações salvas com sucesso!');
            setMensagemErro('');
        } catch (error) {
            setMensagemErro('Erro ao salvar informações.');
            setMensagemSucesso('');
            console.error("Erro ao salvar informações:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="xs" sx={{ paddingTop: '100px' }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Informações sobre a empresa
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="razaoSocial"
                            label="Razão Social"
                            name="razaoSocial"
                            autoComplete="razaoSocial"
                            autoFocus
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
                            name="cnpj"
                            label="CNPJ"
                            id="cnpj"
                            autoComplete="cnpj"
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
                        <Link href="/dimensoes1">
                            <Button

                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Salvar informações
                            </Button>
                        </Link>

                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}
