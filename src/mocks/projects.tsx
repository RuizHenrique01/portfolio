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
                <p><strong>Cronos Management System</strong> é uma aplicação web projetada para gerenciar tarefas dentro de projetos, inspirada em plataformas como Jira e Trello. Com foco em simplicidade e usabilidade, o Cronos oferece uma interface mais limpa e menos complexa, tornando-o acessível para usuários com diferentes níveis de experiência. Seu objetivo é fornecer uma solução eficiente para o gerenciamento de projetos, destacando-se como uma alternativa viável a ferramentas tradicionais, como Jira, Trello, Asana e Microsoft Project.</p>

                <p>O <strong>Cronos Management System</strong> foi desenvolvido para atender às necessidades de equipes que buscam uma ferramenta de gerenciamento de projetos que seja ao mesmo tempo poderosa e fácil de usar. Com uma interface intuitiva, o sistema permite a criação e organização de tarefas, a atribuição de responsabilidades e o monitoramento do progresso, tudo de forma simplificada e acessível.</p>

                <p>Uma das principais características do Cronos é a sua flexibilidade. Ele se adapta a diferentes metodologias de trabalho, como Scrum, Kanban e Waterfall, permitindo que as equipes personalizem seus fluxos de trabalho conforme suas preferências e necessidades. Essa adaptabilidade faz do Cronos uma escolha ideal para organizações de diferentes tamanhos e setores.</p>

                <p>Além disso, o <strong>Cronos Management System</strong> foi projetado para ser altamente colaborativo. Com funcionalidades que permitem a comunicação em tempo real, comentários em tarefas, e integração com outras ferramentas populares, ele facilita a colaboração entre membros da equipe, independentemente de onde estejam localizados.</p>

                <p>Outro diferencial do Cronos é sua capacidade de fornecer insights detalhados sobre o desempenho do projeto. Através de dashboards personalizados e relatórios abrangentes, os gerentes de projeto podem acompanhar o progresso em tempo real, identificar gargalos e tomar decisões informadas para manter o projeto no caminho certo.</p>

                <p>Em resumo, o <strong>Cronos Management System</strong> combina simplicidade, flexibilidade e colaboração em uma única plataforma, oferecendo uma alternativa eficaz às soluções tradicionais de gerenciamento de projetos.</p>
            </>
        }
    },
];

export default projects;