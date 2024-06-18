"use client"
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

export default FormInformacoesEmpresa