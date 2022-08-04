import Equipe from '../Equipe'
import './index.scss'

const Time = (props) => {

    const css = { backgroundColor: props.corPrimaria }

    return (
       props.equipe.length > 0 ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corSecundaria,  color: props.corSecundaria}}>{props.nome}</h3>

            <div className='times'>
                {props.equipe.map(equipe => <Equipe key={equipe.nome} corDeFundo={props.corSecundaria} nome={equipe.nome} clan={equipe.clan} avatar={equipe.avatar} />)}
            </div>

        </section>
        : ""
    )
}


export default Time