import Equipe from '../Equipe'
import './times.scss'

const Time = (props) => {

    const css = { backgroundColor: props.corPrimaria }

    return (
        props.equipe.length > 0 ? <section className='time' style={css}>
            <h3 className='time__titulo' style={{ borderColor: props.corSecundaria, color: props.corSecundaria }}>{props.nome}</h3>

            <div className='time__divisao-time'>
                {props.equipe.map(equipe => <Equipe key={equipe.nome}
                    corDeFundo={props.corSecundaria}
                    nome={equipe.nome}
                    clan={equipe.clan}
                    avatar={equipe.avatar}
                    habilidade={equipe.habilidade}
                    classificacao={equipe.classificacao}
                />)}
            </div>

        </section>
            : ""
    )
}


export default Time