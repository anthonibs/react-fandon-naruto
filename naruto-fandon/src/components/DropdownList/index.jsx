import './index.scss'

const DropdownList = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
        console.log(evento.target.value);
    }
   
    return (
        <fieldset className='dropdown-List'>
            <label>{props.label}</label>
            <select onChange={aoDigitar} required={props.obrigatorio} value={props.value}>
                <option value="" selected disabled>Escolha aqui</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </fieldset>
    )
}

export default DropdownList