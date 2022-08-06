import './equipe.scss'

// ao invés de usar props eu quebro e desestrutura em vários objetos
const Equipe = ({ nome, avatar, clan, habilidade, classificacao, corDeFundo }) => {
    return (
        <article className='team'>
            <div className='team__header' style={{ backgroundColor: corDeFundo }}>
                <img className='image' src={avatar} alt={nome} />
            </div>
            <div className='team__body'>
                <h4 style={{ color: corDeFundo }}>{nome}</h4>
                <h5>{clan}</h5>
            </div>
            <div className='skill'>
                <div className='ability' style={{ borderColor: corDeFundo }}>
                    <h5 style={{ color: corDeFundo }}>Habilidades</h5>
                    <span className='skill-text'>{habilidade}</span>
                </div>
                <div className='rating'>
                    <h5 style={{ color: corDeFundo }}>Classificação</h5>
                    <span className='skill-text'>{classificacao}</span>
                </div>
            </div>
        </article>
    )
}


export default Equipe