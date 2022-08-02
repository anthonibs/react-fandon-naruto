import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import FieldText from '../FieldText'
import './index.scss'

const Form = () => {

    const times = [
        'Time 1',
        'Time 2',
        'Time 3',
        'Time 4',
        'Time 5',
        'Time 6',
        'Time 7',
        'Time 8',
        'Time 9',
        'Time 10',
    ]

    const [nome, setNome] = useState('')
    const [clan, setClan] = useState('')
    const [avatar, setAvatar] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        console.log('Form submetido: ', nome, clan, avatar, time);
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados dos para criar os cards do seus personagens</h2>
                <FieldText
                    obrigatorio={true}
                    label="Personagem"
                    placeholder="Digite seu personagem"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}

                />
                <FieldText
                    obrigatorio={true}
                    label="Clã"
                    placeholder="Digite seu clã"
                    valor={clan}
                    aoAlterado={valor => setClan(valor)}
                />
                <FieldText
                    obrigatorio={true}
                    label="Avatar"
                    placeholder="Digite o endereço do avatar"
                    valor={avatar}
                    aoAlterado={valor => setAvatar(valor)}
                />
                <DropdownList
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form 