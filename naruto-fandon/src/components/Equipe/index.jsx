import './index.scss'

// ao invés de usar props eu quebro e desestrutura em vários objetos
const Equipe = ({ nome, avatar, clan,  corDeFundo }) => {
    return (
        <article className='equipe'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={avatar} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{clan}</h5>
            </div>
        </article>
    )
}


export default Equipe