import Login from '../assets/Login.png';
import CronosProject from '../assets/CronosSystem/project.png';
import CronosMembers from '../assets/CronosSystem/members.png';
import CronosBoard from '../assets/CronosSystem/board.png';
import SOSLogin from '../assets/SOSRosas/login.jpg';
import SOSHome from '../assets/SOSRosas/home.jpg';
import SOSMap from '../assets/SOSRosas/map.jpg';
import SOSMain from '../assets/SOSRosas/sos.jpg';
import SOSDenuncia from '../assets/SOSRosas/denuncia.jpg';
import SOSContact from '../assets/SOSRosas/contact.jpg';
import STInicio from '../assets/StarOfTomorrow/Inicio.png';
import STCut from '../assets/StarOfTomorrow/cut5.png';
import STMap from '../assets/StarOfTomorrow/Mapa.png';
import STFase from '../assets/StarOfTomorrow/fase4.png';
import SoteadorInical from '../assets/SorteadorAmigoSecreto/tela_sorteio.png';
import SoteadorParticipantes from '../assets/SorteadorAmigoSecreto/tela_lista_participantes.png';
import SMLogin from '../assets/StudyManager/login.jpg';
import SMList from '../assets/StudyManager/list.jpg';
import Study from '../assets/study.jpg';
import BillsLogin from '../assets/Bills/tela_login.png';
import BillsCadastro from '../assets/Bills/tela_cadastro.png';
import BillsDividas from '../assets/Bills/tela_cadastro_dividas.png';
import BillsClientes from '../assets/Bills/tela_cadastro_clientes.png';
import BillsHistorico from '../assets/Bills/tela_historico.png';
import { Typography } from '@mui/material';

const projects = [
    {
        title: 'Cronos Management System',
        description: 'Aplicação Web voltada especificamente para o gerenciamento de projetos, tendo como principal objetivo ser mais limpa e menos complexa.',
        panelImg: Login,
        positionImg: 'top center',
        content: {
            images: [
                Login,
                CronosProject,
                CronosBoard,
                CronosMembers
            ],
            languages: [
                'typescript',
                'nestjs',
                'prisma',
                'postgres',
                'react',
                'recoil'
            ],
            body: <>
                <p><strong>Cronos Management System</strong> é uma aplicação web projetada para gerenciar tarefas dentro de projetos, inspirada em plataformas como Jira e Trello. Com foco em simplicidade e usabilidade, o Cronos oferece uma interface mais limpa e menos complexa, tornando-o acessível para usuários com diferentes níveis de experiência. Seu objetivo é fornecer uma solução eficiente para o gerenciamento de projetos, destacando-se como uma alternativa viável a ferramentas tradicionais, como Jira, Trello, Asana e Microsoft Project.</p>

                <p>O <strong>Cronos Management System</strong> foi desenvolvido para atender às necessidades de equipes que buscam uma ferramenta de gerenciamento de projetos que seja ao mesmo tempo poderosa e fácil de usar. Com uma interface intuitiva, o sistema permite a criação e organização de tarefas, a atribuição de responsabilidades e o monitoramento do progresso, tudo de forma simplificada e acessível.</p>

                <p>Uma das principais características do Cronos é a sua flexibilidade. Ele se adapta a diferentes metodologias de trabalho, como Scrum, Kanban e Waterfall, permitindo que as equipes personalizem seus fluxos de trabalho conforme suas preferências e necessidades. Essa adaptabilidade faz do Cronos uma escolha ideal para organizações de diferentes tamanhos e setores.</p>

                <p>Além disso, o <strong>Cronos Management System</strong> foi projetado para ser altamente colaborativo. Com funcionalidades que permitem a comunicação em tempo real, comentários em tarefas, e integração com outras ferramentas populares, ele facilita a colaboração entre membros da equipe, independentemente de onde estejam localizados.</p>

                <p>Outro diferencial do Cronos é sua capacidade de fornecer insights detalhados sobre o desempenho do projeto. Através de dashboards personalizados e relatórios abrangentes, os gerentes de projeto podem acompanhar o progresso em tempo real, identificar gargalos e tomar decisões informadas para manter o projeto no caminho certo.</p>

                <p>Em resumo, o <strong>Cronos Management System</strong> combina simplicidade, flexibilidade e colaboração em uma única plataforma, oferecendo uma alternativa eficaz às soluções tradicionais de gerenciamento de projetos.</p>
            </>
        }
    },
    {
        title: 'SOS Rosas',
        description: 'Aplicação mobile que tem como objetivo auxiliar mulheres a realizar pedidos de ajuda ou denúncias quando estiverem em situação de perigo ou estiverem sofrendo algum tipo de violência.',
        panelImg: 'https://raw.githubusercontent.com/AACJ/S.O.S-Rosas/master/assets/Screenshot_2021-05-02-12-54-43-207_com.example.sosrosas.jpg',
        positionImg: 'top center',
        content: {
            images: [
                SOSLogin,
                SOSHome,
                SOSMain,
                SOSMap,
                SOSDenuncia,
                SOSContact
            ],
            languages: [
                'android studio',
                'kotlin',
                'firebase'
            ],
            body: <>
                <p><strong>S.O.S Rosas</strong> é uma aplicação mobile desenvolvida para oferecer suporte e segurança a mulheres em situações de perigo ou violência. Com um foco em acessibilidade e discrição, a aplicação permite que usuárias enviem pedidos de ajuda via SMS, compartilhando automaticamente sua localização para facilitar a resposta rápida por parte das autoridades ou contatos de confiança.</p>

                <p>Além de facilitar pedidos de socorro, o <strong>S.O.S Rosas</strong> permite a realização de denúncias e oferece um guia abrangente sobre a localização de delegacias especializadas, departamentos de polícia e hospitais, com foco especial em crimes contra a mulher. A aplicação também mantém as usuárias informadas com notícias relevantes e atualizadas.</p>

                <p>Um dos diferenciais do <strong>S.O.S Rosas</strong> é sua tela de agenda menstrual, que serve como uma camada adicional de segurança. Esta funcionalidade foi desenvolvida para proteger as usuárias em situações de risco, permitindo que, caso sejam forçadas a acessar o aplicativo na presença de um agressor, a tela da agenda menstrual seja exibida, desviando a atenção para uma área segura e discreta, protegendo assim seus dados pessoais e intenções.</p>

                <p><strong>S.O.S Rosas</strong> combina tecnologia com um propósito social crucial, oferecendo uma ferramenta poderosa para a proteção de mulheres, em momentos críticos de suas vidas.</p>
            </>
        }
    },
    {
        title: 'Stars of Tomorrow',
        description: `Jogo no gênero shoot 'em up.`,
        panelImg: 'https://raw.githubusercontent.com/CunegundesA/Star_of_Tomorrow/master/assets/Inicio.png',
        positionImg: 'top center',
        content: {
            images: [
                STInicio,
                STCut,
                STMap,
                STFase
            ],
            languages: [
                'java'
            ],
            body: <>
                <p><strong>Stars of Tomorrow</strong> é um emocionante jogo do gênero <em>shoot 'em up</em> que leva os jogadores em uma jornada épica pelo sistema solar. A narrativa gira em torno de Jace Herondale e Ross Rigel, dois heróis determinados a impedir o terrível vilão conhecido como Sr. Galactus de espalhar ainda mais caos e destruição pelo cosmos.</p>

                <Typography variant='h5'>Enredo:</Typography>
                <p>Após sobreviverem à devastação causada pelo Sr. Galactus, Jace e Ross se unem para uma missão audaciosa: impedir o vilão de realizar novas atrocidades. Cada fase do jogo se passa em um dos planetas do sistema solar, onde os jogadores enfrentarão hordas de inimigos e desafios únicos, culminando em batalhas épicas contra os exércitos de Galactus.</p>

                <Typography variant='h5'>Personagens Principais:</Typography>

                <Typography variant='h6'>Jace Herondale</Typography>
                <p><strong>Idade:</strong> 17 anos</p>
                <p><strong>Origem:</strong> Planeta Hydris, em outra galáxia</p>
                <p><strong>História:</strong> Jace era um soldado planetário em Hydris, onde servia em missões intergalácticas. Sua coragem e conhecimento sobre naves e os cosmos são suas principais armas na luta contra Galactus.</p>
                <p><strong>Personalidade:</strong> Corajoso e introvertido</p>
                <p><strong>Habilidades:</strong> Perito em navegação espacial e estratégias de combate.</p>

                <Typography variant='h6'>Ross Rigel</Typography>
                <p><strong>Idade:</strong> 6 anos</p>
                <p><strong>Origem:</strong> Planeta Vulpecula</p>
                <p><strong>História:</strong> Ross é um jovem engenheiro de naves, pertencente à espécie alienígena Foxtriliana. Embora jovem, Ross é extremamente dedicado e possui uma habilidade inata para manusear e reparar naves, tornando-se um aliado indispensável para Jace.</p>
                <p><strong>Personalidade:</strong> Extrovertido e dedicado</p>
                <p><strong>Habilidades:</strong> Engenharia de naves e operações técnicas avançadas.</p>

                <Typography variant='h6'>Hall Prowse (Sr. Galactus)</Typography>
                <p><strong>Idade:</strong> 30 anos</p>
                <p><strong>Origem:</strong> Planeta Apolo</p>
                <p><strong>História:</strong> Nascido em um planeta onde seus pais governavam com sabedoria, Hall Prowse, insatisfeito com seu papel de rei, almejou o controle dos cosmos. Após a morte do rei Dorian, Hall ascendeu ao trono e começou sua busca por poder absoluto, transformando-se no perverso Sr. Galactus.</p>
                <p><strong>Personalidade:</strong> Ganancioso, autoritário e perverso</p>
                <p><strong>Motivação:</strong> Conquista total do universo, sem piedade para com seus oponentes.</p>

                <Typography variant='h5'>Gameplay:</Typography>
                <p>Os jogadores irão enfrentar uma série de desafios intergalácticos enquanto atravessam cada planeta do sistema solar. Com mecânicas rápidas e intensas, <strong>Stars of Tomorrow</strong> exige precisão, estratégia, e a colaboração entre Jace e Ross para derrotar as forças de Galactus e salvar o universo da destruição total.</p>

                <p>Este projeto é uma celebração do gênero <em>shoot 'em up</em>, combinando uma história envolvente com uma jogabilidade clássica, criando uma experiência inesquecível para os jogadores.</p>
            </>
        }
    },
    {
        title: 'Sorteador de Amigo Secreto',
        description: 'Aplicação Web ao qual realiza sorteios de amigos secretos.',
        panelImg: 'https://raw.githubusercontent.com/RuizHenrique01/RuizHenrique01/master/assets/sorteador-de-amigo-secreto/tela_lista_participantes.png',
        positionImg: 'top center',
        content: {
            images: [
                SoteadorParticipantes,
                SoteadorInical
            ],
            languages: [
                'typescript',
                'react',
                'recoil'
            ],
            body: <>
                <p>Este projeto é uma aplicação web desenvolvida em React com TypeScript, como parte de um curso de React oferecido pela empresa Alura. A aplicação foi criada com o objetivo de facilitar a organização de sorteios de amigos secretos, oferecendo uma interface simples e intuitiva.</p>

                <Typography variant='h5'>Funcionalidades Principais:</Typography>
                <ul>
                    <li><strong>Criação de Grupos Simples:</strong> Os usuários podem facilmente criar grupos para o sorteio, adicionando apenas os nomes dos participantes, sem necessidade de inserir e-mails.</li>
                    <li><strong>Sorteio Automatizado:</strong> O sorteio é realizado de forma automática com um único clique, assegurando que cada participante receba um amigo secreto diferente.</li>
                    <li><strong>Exibição Imediata dos Resultados:</strong> Os resultados do sorteio são exibidos diretamente na tela, proporcionando uma experiência rápida e sem complicações.</li>
                </ul>

                <Typography variant='h5'>Tecnologias Utilizadas:</Typography>
                <ul>
                    <li><strong>React com TypeScript:</strong> Utilizados para o desenvolvimento da aplicação, permitindo a criação de componentes reutilizáveis e a manutenção de um código seguro e robusto.</li>
                    <li><strong>Recoil:</strong> Utilizado para o gerenciamento de estado, proporcionando um controle eficiente dos dados da aplicação.</li>
                    <li><strong>HTML e CSS:</strong> Empregados para estruturar e estilizar a interface, garantindo uma experiência de usuário fluida e responsiva.</li>
                </ul>

                <Typography variant='h5'>Objetivo e Aprendizado:</Typography>
                <p>Desenvolver esta aplicação como parte do curso de React da Alura permitiu aprofundar meus conhecimentos em React e TypeScript, além de explorar o gerenciamento de estado com Recoil. O projeto foi uma oportunidade prática para aplicar e consolidar esses conhecimentos, resultando em uma aplicação funcional e de fácil uso.</p>
            </>
        }
    },
    {
        title: 'Bills System',
        description: 'Aplicação de gerenciamento de contas a receber, que tem como objetivo fazer com que empresas tenham uma noção mais completa do seu fluxo de caixa.',
        panelImg: 'https://raw.githubusercontent.com/RuizHenrique01/Bills_System/master/assets/tela_cadastro.PNG',
        positionImg: 'top center',
        content: {
            images: [
                BillsLogin,
                BillsCadastro,
                BillsClientes,
                BillsDividas,
                BillsHistorico
            ],
            languages: [
                'java',
                'mysql',
                'sql'
            ],
            body: <>
                <p>O Bills System é uma solução avançada de gerenciamento de contas a receber, desenvolvida para ajudar empresas a otimizar o fluxo de caixa e tomar decisões financeiras mais assertivas. Com essa aplicação, as empresas têm uma visão detalhada das suas finanças, o que possibilita uma melhor organização dos recebíveis, garantindo assim a saúde financeira a longo prazo.</p>
                <p>Através do Bills System, as empresas podem prever os dias ideais para realizar pagamentos, evitando problemas de fluxo de caixa. Além disso, o sistema oferece um controle rigoroso sobre inadimplências e permite a criação de condições vantajosas para clientes fidelizados, promovendo a retenção e o fortalecimento das relações comerciais.</p>
                <p>Com uma interface intuitiva e funcionalidades poderosas, o Bills System é a ferramenta ideal para empresas que buscam eficiência e segurança na gestão financeira, assegurando que todas as decisões sejam tomadas com base em dados precisos e atualizados.</p>
            </>
        }
    },
    {
        title: 'Study Manager',
        description: 'Aplicação Web de organização de projetos e estudos, onde o usuário pode criar projetos e dentro destes projetos o usuário pode organizar tarefas, adicionando nome, descrição e data de entrega.',
        panelImg: Study,
        positionImg: 'center center',
        content: {
            images: [
                SMLogin,
                SMList,
                Study
            ],
            languages: [
                'nodejs',
                'javascript',
                'react',
                'redux',
                'expressjs',
                'mongodb'
            ],
            body: <>
                <p>O <strong>Study Manager</strong> é uma aplicação web desenvolvida para otimizar o gerenciamento de projetos e o planejamento de estudos. Ela oferece aos usuários a capacidade de criar projetos detalhados e organizar tarefas dentro desses projetos, garantindo que cada aspecto do trabalho seja bem estruturado e facilmente acessível.</p>

                <Typography variant='h5'>Principais Funcionalidades:</Typography>
                <ul>
                    <li><strong>Gerenciamento de Projetos e Tarefas</strong>: Os usuários podem criar projetos e, dentro de cada projeto, organizar tarefas, adicionando nome, descrição detalhada e data de entrega.</li>
                    <li><strong>Rastreamento de Horas de Estudo</strong>: Além do gerenciamento de tarefas, o Study Manager permite aos usuários registrar e armazenar o total de horas dedicadas aos estudos, fornecendo insights valiosos sobre a produtividade e a alocação de tempo.</li>
                    <li><strong>Organização Aprimorada</strong>: A aplicação é projetada para ajudar os usuários a gerenciar suas tarefas de forma eficiente, melhorando a capacidade de executar e desenvolver projetos ou planos de estudo.</li>
                </ul>

                <p>O <strong>Study Manager</strong> tem como objetivo ser a ferramenta ideal para quem busca melhorar a eficiência no gerenciamento de projetos e estudos, oferecendo uma solução simples e eficaz para se manter organizado e no caminho certo para atingir seus objetivos.</p>
            </>
        }
    },
];

export default projects;