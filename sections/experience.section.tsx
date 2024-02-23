import ExperienceDivider from '@/components/experience-divider.component'
import React from 'react'

export default function Experience() {
  return (
    <section id='section-experience' className='bg-gradient-to-b from-violet-800 to-violet-900 w-full py-20 flex justify-center items-center'>
      <div id='experience-list' className='relative w-1/2 flex flex-col'>
        <ExperienceDivider date='Nov 2019 - Jan 2024' company='CWI Software' role='Frontend Developer'>
          <ul className="list-disc">
            Experiência divida por clientes:

            Kopp (Soluções para trânsito) - React/Next

            <li> Participei do início do projeto discutindo estrutura e arquitetura das tecnologias de frontend.</li>
            <li> Desenvolvi aplicações web usando JavaScript, React, Next.js, Webpack, CSS3, HTML5, Jest e Typescript.</li>
            <li> Implementei comunicação via Websockets.</li>
            <li> Implementei suporte mobile com PWA e TWA.</li>
            <li> Implementei alertas sonoros (.mp3).</li>
            <li> Participei de conversas diárias com o cliente.</li>

            BV (Banco Votorantim) - Flutter/Kotlin/Swift

            <li> Desenvolvi features para a seção "Guardar" do app.</li>
            <li> Participei do projeto "Private", app exclusivo para clientes selecionados.</li>
            <li> Geri processos de deploy para android e ios.</li>
            <li> Criei documentações de arquitetura clean em Flutter.</li>
            <li> Participei da equipe de "CRM", aplicando soluções de push notification com Salesforce.</li>

            Crescer (Projeto de capacitação de novos colaboradores da empresa) - React

            <li> Ministrei aulas sobre performance em React, utilizando useMemo e useCallback.</li>
            <li> Participei como monitor ajudando alunos com dúvidas sobre React.</li>
            <li> Avaliei projetos React dos alunos do projeto.</li>
            <li> Participei da banca final do projeto.</li>

            GPA (Grupo Pão de Açucar) - React/React Native

            <li> Desenvolvi componentes para o storybook do projeto.</li>
            <li> Resolvi bugs impeditivos.</li>
            <li> Participei de reuniões com o cliente.</li>

            Sumicity (Pacotes de internet/Marketplace) - React

            <li> Participei do início do projeto discutindo estrutura e arquitetura das tecnologias de frontend.</li>
            <li> Desenvolvi aplicações web usando Javascript, React, HTML, CSS, Webpack, Maps.</li>
            <li> Aperfeiçoei conceitos de performance com Memos no React.</li>
            <li> Desenvolvi um sistema para a utilização de mapas usando Leaflet.</li>
            <li> Intruí novos colaboradores da equipe.</li>
            <li> Desenvolvi um CRM para gerenciamento de pacotes de internet no Marketplace.</li>
            <li> Gerenciei deploys da aplicação para produção.</li>
            <li> Criei bibliotecas React com Rollup.</li>
            <li> Criei documentações.</li>
            <li> Participei de apresentações de soluções para o cliente.</li>
          </ul>
        </ExperienceDivider>
        <ExperienceDivider date='Jan 2019 - Nov 2019' company='CWI Software' role='Frontend Developer Junior'>
          <ul className="list-disc">
            <li>Desenvolvi landing pages para Ford caminhões.</li>
            <li>Resolvi bugs do projeto web.</li>
          </ul>
        </ExperienceDivider>
        <ExperienceDivider date='Set 2018 - Dez 2018' company='CWI Software' role='Projeto Crescer'>
          <ul className="list-disc">
            <div className='py-2'>Participei de um projeto de capacitação de desenvolvedores onde passei 3 meses estudando na empresa, com um total de 30 pessoas:</div>

            <li> Aprendi tecnologias e conceitos como POO, Banco de Dados, JavaScript, React, Java entre outros.</li>
            <li> Entreguei aplicações todas as semanas durante 3 meses, como (Rede Social, Pokedex, Uber-like).</li>
            <li> Participei de grupos com 3 pessoas diferentes todas as semanas.</li>

            <div className='py-2'>Como projeto final, onde eu e mais 3 colegas, desenvolvemos um jogo em ReactJS e Java, com detecção de movimentos por câmera chamado (Hole in the wall), onde o jogador tinha que fazer uma certa posição com o corpo para poder passar pelo obstáculo que estava vindo até ele.</div>

            <li> Gerenciei e liderei a parte de frontend do projeto.</li>
            <li> Implementei leitura de movimentos por câmera (segue imagens abaixo).</li>
            <li> Apliquei músicas (.mp3) durante o jogo.</li>
            <li> Experienciei participar de uma banca avaliadora como julgado.</li>
          </ul>
        </ExperienceDivider>
      </div>
    </section>
  )
}
