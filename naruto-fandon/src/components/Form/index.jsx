import { Fragment, useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import FieldText from '../FieldText'
import './form.scss'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [clan, setClan] = useState('')
    const [avatar, setAvatar] = useState('')
    const [habilidade, setHabilidade] = useState('')
    const [classificacao, setClassificacao] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()

        // Recebe as informações como objeto
        props.aoCalaboradorCadastrado({
            nome,
            clan,
            avatar,
            habilidade,
            classificacao,
            time
        })

        setNome('')
        setClan('')
        setAvatar('')
        setHabilidade('')
        setClassificacao('')
        setTime('')
    }

    return (
        <section className='form'>
            <form className='form__container' onSubmit={aoSalvar}>
                <h2 className='form__subtitle'>Preencha os dados dos para criar os times</h2>
                <FieldText
                    obrigatorio={true}
                    label="Personagem"
                    type="text"
                    placeholder="Digite seu personagem"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}

                />
                <FieldText
                    obrigatorio={true}
                    label="Clã"
                    type="text"
                    placeholder="Digite seu clã"
                    valor={clan}
                    aoAlterado={valor => setClan(valor)}
                />
                <FieldText
                    obrigatorio={true}
                    label="Avatar"
                    type="url"
                    placeholder="Digite o endereço do avatar"
                    valor={avatar}
                    aoAlterado={valor => setAvatar(valor)}
                />
                <div className="form__group">
                    <div className="form__input--flex">
                        <FieldText
                            obrigatorio={true}
                            label="Habilidades"
                            type="text"
                            placeholder="Sua habilidade principal"
                            valor={habilidade}
                            aoAlterado={valor => setHabilidade(valor)}
                        />
                    </div>
                    <div className="form__input--flex">
                        <FieldText
                            obrigatorio={true}
                            label="Classificação"
                            type="text"
                            placeholder="Sua classificação"
                            valor={classificacao}
                            aoAlterado={valor => setClassificacao(valor)}
                        />
                    </div>
                </div>
                <DropdownList
                    obrigatorio={true}
                    label="Time"
                    itens={props.nomeTimes}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button>
                    Criar Cartão
                </Button>
            </form>
        </section>
    )
}

export default Form 