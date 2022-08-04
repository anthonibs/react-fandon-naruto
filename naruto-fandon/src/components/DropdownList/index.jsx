import './index.scss'

const DropdownList = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
        console.log(evento.target.value);
    }
   
    return (
        <fieldset className='dropdown-List'>
            <label className='dropdown-List__label'>{props.label}</label>
            <select className='dropdown-List__select' onChange={aoDigitar} required={props.obrigatorio} value={props.valor}>
                <option value="" selected >Escolha aqui</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </fieldset>
    )
}

export default DropdownList