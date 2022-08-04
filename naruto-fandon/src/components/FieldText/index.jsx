import './index.scss'

const FieldText = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <fieldset className='field'>
            <label className='field__label'>{props.label}</label>
            <input className='field__input' value={props.valor} onChange={aoDigitar} required placeholder={props.placeholder} />
        </fieldset>
    )
}


export  default FieldText