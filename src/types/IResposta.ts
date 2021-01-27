import IContatos from './IContatos';
import IEducacao from './IEducacao';
import IExperiencia from './IExperiencia';

export interface IResposta {
    nome: string,
    ocupacao: string,
    resumo: string,
    perfilProfissional: string,
    contatos: IContatos[],
    educacao: IEducacao[],
    experiencia: IExperiencia[]
}

export interface IRespostaDados {
    resposta: IResposta
}