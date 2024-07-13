import React, { ChangeEventHandler } from 'react'
import './InputRadio.css'
interface IlabelValue {
    enunciado:string, label: string, value: number
}
interface IinputRadioProps {
    labelAndValue: IlabelValue[]
    onChangeState: ChangeEventHandler<HTMLInputElement>
    selectedValue: number

}
const InputRadio = (props: IinputRadioProps) => {
    return (
        <div>
            {props.labelAndValue.map((elemento, index) => (
                <div className='input-radio-container' key={index}>
                    <input checked={props.selectedValue == elemento.value} className='input-radio-circle' onChange={props.onChangeState} type="radio" id={`radio-input-${elemento.label}-${elemento.value}$`} name={elemento.label} value={elemento.value} />
                    <label className='input-radio-name' htmlFor={elemento.label}>{elemento.label}</label>
                </div>
            ))}
        </div>
    )
}

export default InputRadio