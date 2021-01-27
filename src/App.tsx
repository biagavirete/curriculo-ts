import React, { useState } from 'react';
import './App.css'
import Header from './components/Header';

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
        empresa: 'Confidencial',
        local: 'São Paulo - SP',
        conteudo: 'Desenvolvimento de página de uma aplicação web utilizando React, Redux e uma biblioteca interna, consumindo dados de API privada.'
      },
      {
        id: 2,
        cargo: 'Experiência fake só para justificar fazer o map',
        periodo: 'Setembro 1992 - atualmente',
        empresa: 'Bia Ltda.',
        local: 'Jacareí - SP',
        conteudo: '    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]
  }

  const [resposta] = useState(fakeAPI)

  return (
    <main>
      <Header resposta={resposta} />
    </main>
  );
}

export default App;
