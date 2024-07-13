'use client'

/* import FormWrapper from '@/componentes/Forms/FormWrapper/FormWrapper'
import InputRadio from '@/componentes/InputRadio/InputRadio'
import React, { useState } from 'react'
const PerfilDeCustoView = () => {   
     const [integracaoVertical, setIntegracaoVertical] = useState(0)
     const [integracaoHorizontal, setIntegracaoHorizontal] = useState(0)
     const [cicloVidaProduto, setCicloVidaProduto] = useState(0)
     const [automacaoChaoFabrica, setAutomacaoChaoFabrica] = useState(0)
     const [automacaoEmpresarial, setAutomacaoEmpresarial] = useState(0)
     const [automacaoSuprimentos, setAutomacaoSuprimentos] = useState(0)
     return (
        <div>

<FormWrapper tituloprincipal='Forms' descricao='Descrição aqui'>


<InputRadio selectedValue={integracaoVertical} labelAndValue={[{
    label: 'os processos verticais da empresa não São explicitamente definidos.', value: 0,
    enunciado: ''
}, {
    label: 'os processos verticais da empresa São definidos e executados por humanos, com o apoio de ferramentas analógicas', value: 1,
    enunciado: ''
}, {
    label: 'Processos verticais definidos da empresa são completados por humanos com o apoio de ferramentas digitais', value: 2,
    enunciado: ''
}, {
    label: 'Processos e sistemas da empresa são integrados de forma segura em todos os níveis hierárquicos da pirâmide de automação', value: 3,
    enunciado: ''
}, {
    label: 'Processos e sistemas da empresa são automatizados, com intervenção humana limitada', value: 4,
    enunciado: ''
}, {
    label: 'Processos e sistemas da empresa analisam e reagem aos dados ativamente', value: 5,
    enunciado: ''
}



]} onChangeState={(e: any) => setIntegracaoVertical(e.target.value)} />
</FormWrapper> 
</div>
)
}

export default PerfilDeCustoView */


import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { db } from '@/firebase/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { Box, Button, Chip } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export default function PerfilDeCustoView() {
    const [value, setValue] = React.useState('');
    const [mensagemErro, setMensagemErro] = React.useState('');
    const [loading, setLoading] = React.useState(false);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);

    };
    const handleDelete = () => {
        setMensagemErro('');

    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();  

       if (!value) {
            setMensagemErro('Escolha uma das opções.');
            return;
        }

        setLoading(true);
         
        try {
            const userDocRef = collection(db, 'reports' );
            await setDoc(doc(userDocRef), {
            d1: value
         });
            setMensagemErro('');
        } catch (error) {
            setMensagemErro('Erro ao salvar informações.');
            console.error("Erro ao salvar informações:", error);
        } finally {
            setLoading(false);
        } 

    };

    return (
        <FormControl>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                <FormLabel id="demo-controlled-radio-buttons-group">Perfil de custo</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value={0} control={<Radio />} label="os processos verticais da empresa não São explicitamente definidos." />
                    <FormControlLabel value={1} control={<Radio />} label="os processos verticais da empresa São definidos e executados por humanos, com o apoio de ferramentas analógicas" />
                    <FormControlLabel value={2} control={<Radio />} label="Processos verticais definidos da empresa são completados por humanos com o apoio de ferramentas digitais" />
                    <FormControlLabel value={3} control={<Radio />} label="Processos e sistemas da empresa são integrados de forma segura em todos os níveis hierárquicos da pirâmide de automação" />
                    <FormControlLabel value={4} control={<Radio />} label="Processos e sistemas da empresa são automatizados, com intervenção humana limitada" />
                    <FormControlLabel value={5} control={<Radio />} label="Processos e sistemas da empresa analisam e reagem aos dados ativamente" />

                </RadioGroup>

                {mensagemErro && (
                    <Chip
                        label={mensagemErro}
                        color="error"
                        variant="outlined"
                        onDelete={handleDelete}
                    />
                )}
                <LoadingButton
                    loading={loading}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Salvar informacoes
                </LoadingButton>
            </Box>
        </FormControl>
    );
}
