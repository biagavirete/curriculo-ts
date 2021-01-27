import React, { useState } from 'react'
import { IRespostaDados } from '../../types/IResposta'

function Sidebar(props: IRespostaDados) {
    const [showContacts, setshowContacts] = useState<boolean>(false)
    const { contatos, educacao } = props.resposta

    const toggle = () => {
        setshowContacts(!showContacts)
    }

    return (
        <>
            <aside>
                <div className="sidebar">
                    <h3>Contatos</h3>

                    <button onClick={toggle}>Mostrar Contatos</button>
                    {showContacts &&

                        <div className="lista-de-contatos">
                            {contatos.map(item => (
                                <li key={item.id}>
                                    <div className="item-contato">
                                        <h4>{item.tipo}</h4>
                                        <p>{item.contato}</p>
                                    </div>
                                </li>
                            ))}
                        </div>
                    }
                </div>

                <div className="sidebar">
                    <h3>Educação</h3>
                    <div className="lista-de-formacao">
                        {educacao.map(item => (
                            <li key={item.id}>
                                <h4>{item.curso}</h4>
                                <p>{item.instituicao}</p>
                            </li>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar