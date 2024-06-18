import React, { ChangeEventHandler } from 'react'

import './InputTexto.css'
interface IInputTexto {
    nomeDoinput: string
    onChangeState: ChangeEventHandler<HTMLInputElement>
    value: string
}
const InputTexto = (props: IInputTexto) => {
    return (
        <>

            <div className='input-texto-container'>
                <label className='input-label' htmlFor="">{props.nomeDoinput}</label>
                <input className='input-box' value={props.value} onChange={props.onChangeState} type="text" id="" />
            </div>

        </>
    )
}

export default InputTexto