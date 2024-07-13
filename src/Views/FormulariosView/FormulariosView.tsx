"use client"
import FormInformacoesEmpresa from '@/componentes/Forms/FormInformacoesEmpresa/FormInformacoesEmpresa'
import FormWrapper from '@/componentes/Forms/FormWrapper/FormWrapper'
import InputRadio from '@/componentes/InputRadio/InputRadio'
import React from 'react'
import './Formularios.css'

const FormulariosView = () => {
    return (
        <div className='segunda-pagina-container'>
            <FormInformacoesEmpresa />
        </div>
    )
}

export default FormulariosView