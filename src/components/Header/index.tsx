import React from 'react'
import { IRespostaDados } from '../../types/IResposta'

function Header(props: IRespostaDados) {

    return (
        <>
            <div className="perfil">
                <img src="https://avatars.githubusercontent.com/u/64283019?s=460&v=4" alt="Perfil" />
            </div>
            <div className="biografia">
                <h1>
                    {props.resposta.nome}
                </h1>
                <div className="ocupacao">{props.resposta.ocupacao}</div>
                <p>{props.resposta.resumo}</p>
            </div>

            <div className="titulo">
                Perfil <br /> Profissional
      </div>

            <div className="perfil-profissional">
                <p>
                    {props.resposta.perfilProfissional}
                </p>
            </div>
        </>
    )
}

export default Header