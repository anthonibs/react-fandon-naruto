import './index.scss'

// ao invés de usar props eu quebro e desestrutura em vários objetos
const Equipe = ({ nome, avatar, clan, corDeFundo }) => {
    return (
        <article className='equipe'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={avatar} alt={nome} />
            </div>
            <div className='rodape'>
                <h4 style={{color: corDeFundo}}>{nome}</h4>
                <h5>{clan}</h5>
            </div>
            <div className='skill'>
                <div className='ability' style={{borderColor: corDeFundo}}>
                    <h5 style={{color: corDeFundo}}>Habilidades</h5>
                    <span className='skill-text'>Fogo</span>
                </div>
                <div className='rating'>
                    <h5 style={{color: corDeFundo}}>Classificação</h5>
                    <span className='skill-text'>Rank S</span>
                </div>
            </div>
        </article>
    )
}


export default Equipe