import React, { useState } from 'react';
import './App.css'
import ExperienceList from './components/ExperienceList';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const fakeAPI =
  {
    nome: 'Beatriz Gavira',
    ocupacao: 'Front-end Developer',
    resumo: '28 anos, casada e mãe de 3 pets',
    perfilProfissional: 'Advogada de formação, decidi migrar para a área de Tecnologia desenvolvendo para web. Tenho experiência em HTML5, CSS3, JavaScript, Typescript e React.',
    contatos: [
      {
        id: 1,
        tipo: 'Telefone',
        contato: '(19) 99808-3142',
      },
      {
        id: 2,
        tipo: 'E-mail',
        contato: 'biagavirete@gmail.com',
      },
      {
        id: 3,
        tipo: 'Linkedin',
        contato: 'https://www.linkedin.com/in/beatriz-gavira/',
      },
      {
        id: 4,
        tipo: 'Github',
        contato: ' https://github.com/biagavirete',
      },
    ],
    educacao: [
      {
        id: 1,
        instituicao: 'Campinas Tech Talents',
        curso: 'Trilha React - 2021'
      },
      {
        id: 2,
        instituicao: 'Rocketseat',
        curso: 'Bootcamp GoStack - 2020'
      },
      {
        id: 3,
        instituicao: 'PUC-SP',
        curso: 'Direito - 2013'
      }
    ],
    experiencia: [
      {
        id: 1,
        cargo: 'Freelancer front-end developer',
        periodo: 'Dezembro 2020 - atualmente',
        empresa: '',
        local: '',
        conteudo: 'Desenvolvimento de página de uma aplicação web utilizando React, Redux e uma biblioteca interna, consumindo dados de API privada.'
      },
      {
        id: 2,
        cargo: 'Advogada',
        periodo: 'Julho 2014 - Fevereiro 2020',
        empresa: 'First Brasil Group',
        local: 'São Paulo - SP',
        conteudo: 'Advogada interna de empresa do ramo de incorporação imobiliária e construção civil'
      }
    ]
  }

  const [resposta] = useState(fakeAPI)

  return (
    <main>
      <Header resposta={resposta} />
      <Sidebar resposta={resposta} />
      <ExperienceList resposta={resposta} />
    </main>
  );
}

export default App;
