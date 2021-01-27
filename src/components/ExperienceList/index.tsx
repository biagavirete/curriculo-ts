import React from 'react'
import IExperiencia from '../../types/IExperiencia'
import { IRespostaDados } from '../../types/IResposta'


function ExperienceList(props: IRespostaDados) {
    const { experiencia } = props.resposta

    return (
        <>
            <div className="experience">
                <h2>Experiência Profissional</h2>

                {experiencia.map((item: IExperiencia) => (
                    <div className="experience-item" key={item.id}>
                        <div>
                            <h4>{item.cargo}</h4>
                            <span>{item.periodo}</span>

                            <strong>{item.empresa}</strong>
                            <span className="final">{item.local}</span>
                        </div>
                        <p>
                            {item.conteudo}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ExperienceList