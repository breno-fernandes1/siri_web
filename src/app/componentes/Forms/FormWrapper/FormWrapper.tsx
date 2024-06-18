import React, { ReactNode } from 'react'
import './FormWrapper.css'


interface IFormWrapper {
    tituloprincipal: string
    descricao?: string
    children: ReactNode
}
const FormWrapper = (props: IFormWrapper) => {
    return (
        <div>
            <div>
                <h3>{props.tituloprincipal}</h3>
                <p>{props.descricao}</p>
            </div>
            <div className='form-wrapper-container'>
                {props.children}
            </div>
        </div>
    )
}

export default FormWrapper