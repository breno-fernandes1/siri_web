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
import { Box, Button, Chip, Link, Pagination, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import NavBar from '@/componentes/InputTexto/NavBar/navbar';
import { useState } from 'react';
import Paginacao from '@/componentes/Paginacao/paginacao';
import { BrowserRouter } from 'react-router-dom';


export default function dimensoes1() {
    const [value, setValue] = React.useState('');
    const [mensagemErro, setMensagemErro] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleDelete = () => {
        setMensagemErro('');
    };
    const [form1, setForm1] = useState("")
    const [form2, setForm2] = useState("")
    const [form3, setForm3] = useState("")
    const [form4, setForm4] = useState("")
    const [form5, setForm5] = useState("")
    const [form6, setForm6] = useState("")
    const [form7, setForm7] = useState("")
    const [form8, setForm8] = useState("")
    const [form9, setForm9] = useState("")
    const [form10, setForm10] = useState("")
    const [form11, setForm11] = useState("")
    const [form12, setForm12] = useState("")
    const [form13, setForm13] = useState("")
    const [form14, setForm14] = useState("")
    const [form15, setForm15] = useState("")
    const [form16, setForm16] = useState("")

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (form1 == "" || form1 == null && form2 == "" || form2 == null) {
            setMensagemErro('Assinale todas as perguntas.');
            return;
        }


        setLoading(true);

        // try {
        //     const userDocRef = collection(db, 'reports');
        //     await setDoc(doc(userDocRef), {
        //         d1: form1,
        //     });
        //     setMensagemErro('');
        // } catch (error) {
        //     setMensagemErro(form1);

        //     console.error("Erro ao salvar informações:", error);
        // } finally {
        //     setLoading(false);
        // }
    };


    return (
        <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
            <NavBar />  { }
            <Box height={'100px'}>

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4ff' }}>

                <FormControl component="form" onSubmit={handleSubmit} sx={{ paddingTop: '100px', width: '60%', p: 4, boxShadow: 3, borderRadius: 2, backgroundColor: '#fff' }}>
                    <Paginacao />
                    <Typography variant="h5" sx={{ mb: 3, color: '#172E4D' }}>  Formulário</Typography>
                    <FormLabel component="legend" sx={{ mb: 2, color: '#172E4D' }}>1. Integração Vertical: é a integração de processos e sistemas em todos os níveis hierárquicos de a pirâmide de automação dentro de uma instalação para estabelecer um fluxo de dados conectado de ponta a ponta, qual seu estado atual? (6 Pontos)</FormLabel>
                    <RadioGroup
                        name="vertical-integration"
                        value={form1}
                        onChange={(e) => setForm1(e.target.value)}
                        sx={{ mb: 4 }}
                    >
                        <FormControlLabel value="0" control={<Radio sx={{ color: '#172E4D' }} />} label="Os processos verticais da empresa não são explicitamente definidos." />
                        <FormControlLabel value="1" control={<Radio sx={{ color: '#172E4D' }} />} label="Os processos verticais da empresa são definidos e executados por humanos, com o apoio de ferramentas analógicas." />
                        <FormControlLabel value="2" control={<Radio sx={{ color: '#172E4D' }} />} label="Processos verticais definidos da empresa são completados por humanos com o apoio de ferramentas digitais." />
                        <FormControlLabel value="3" control={<Radio sx={{ color: '#172E4D' }} />} label="Processos e sistemas da empresa são integrados de forma segura em todos os níveis hierárquicos da pirâmide de automação." />
                        <FormControlLabel value="4" control={<Radio sx={{ color: '#172E4D' }} />} label="Processos e sistemas da empresa são automatizados, com intervenção humana limitada." />
                        <FormControlLabel value="5" control={<Radio sx={{ color: '#172E4D' }} />} label="Processos e sistemas da empresa analisam e reagem aos dados ativamente." />
                    </RadioGroup>
                    <FormLabel component="legend" sx={{ mb: 2, color: '#172E4D' }}>2.  Integração Horizontal: é a integração de processos da cadeia de mantimentos em toda a organização e com
                        partes interessadas ao longo do fluxo de valor, e qual seu estado atual?
                    </FormLabel>
                    <RadioGroup
                        name="horizontal-integration"
                        value={form2}
                        onChange={(e) => setForm2(e.target.value)}
                        sx={{ mb: 4 }}
                    >
                        <FormControlLabel value="0" control={<Radio sx={{ color: '#172E4D' }} />} label="Processos da cadeia de mantimentos da empresa não estão explicitamente definidos." />
                        <FormControlLabel value="1" control={<Radio sx={{ color: '#172E4D' }} />} label="Os processos da cadeia de mantimentos da empresa são definidos e executados por humanos, com o apoio de ferramentas analógicas." />
                        <FormControlLabel value="2" control={<Radio sx={{ color: '#172E4D' }} />} label="Cadeia de mantimentos definida da empresa é concluída por humanos com suporte de ferramentas digitais." />
                        <FormControlLabel value="3" control={<Radio sx={{ color: '#172E4D' }} />} label="Processos e sistemas da empresa estão integrados de forma segura entre parceiros de negócios e clientes ao longo da cadeia de valor." />
                        <FormControlLabel value="4" control={<Radio sx={{ color: '#172E4D' }} />} label="Automatizado" />
                        <FormControlLabel value="5" control={<Radio sx={{ color: '#172E4D' }} />} label="Cadeia de mantimentos automatizada. Processos e sistemas da empresa analisam e reagem aos dados ativamente." />
                    </RadioGroup>
                    <FormLabel component="legend" sx={{ mb: 2, color: '#172E4D' }}>3. Ciclo de vida Integrado do Produto: é a integração de pessoas, processos e sistemas ao longo de todo o ciclo de vida do produto, abrangendo as etapas de ideação, design, desenvolvimento, engenharia, produção, uso pelo cliente, serviço e descarte, qual seu estado atual ?
                    </FormLabel>
                    <RadioGroup
                        name="Ciclo de vida"
                        value={form3}
                        onChange={(e) => setForm3(e.target.value)}
                        sx={{ mb: 4 }}
                    >
                        <FormControlLabel value="0" control={<Radio sx={{ color: '#172E4D' }} />} label="Ciclo de vida do produto e processos da empresa não são explicitamente definidos." />
                        <FormControlLabel value="1" control={<Radio sx={{ color: '#172E4D' }} />} label="O Ciclo de vida do produto e processos da empresa são definidos e executado por humanos, com o suporte de ferramentas analögicas." />
                        <FormControlLabel value="2" control={<Radio sx={{ color: '#172E4D' }} />} label="Ciclo de vida do produto e processos da empresa são concluidos por humanos com suporte de ferramentas digitais." />
                        <FormControlLabel value="3" control={<Radio sx={{ color: '#172E4D' }} />} label="O Ciclo de vida do produto e processos da empresa estao integrados de forma segura entre parceiros de negócios e clientes ao longo da cadeia de valor." />
                        <FormControlLabel value="4" control={<Radio sx={{ color: '#172E4D' }} />} label="Ciclo de vida do produto e processos da empresa integrados: processos e sistemas são automatizados, com intervengão humana limitada." />
                        <FormControlLabel value="5" control={<Radio sx={{ color: '#172E4D' }} />} label="Ciclo de vida do produto e processos da empresa automatizados. Processos e sistemas da empresa analisam e reagem aos dados ativamente." />
                    </RadioGroup>
                    {mensagemErro && (
                        <Chip
                            label={mensagemErro}
                            color="error"
                            variant="outlined"
                            onDelete={handleDelete}
                            sx={{ mb: 2 }}
                        />
                    )}

                    <Link href="/dimensao2">
                        <LoadingButton
                            loading={loading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
                        >
                            Salvar Informações
                        </LoadingButton>
                    </Link>
                </FormControl>
            </Box>
        </Box>
        </BrowserRouter>
    );
}
