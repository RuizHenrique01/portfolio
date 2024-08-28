import GrupoICTSLogo from '../assets/grupo_icts_logo.jpg';
import IFAMLogo from '../assets/ifam_logo.jpg';
import FametroLogo from '../assets/soufametro_logo.jpg';

const experience = [
    {
        company: 'IFAM',
        logo: IFAMLogo,
        role: 'Técnico em Informática',
        time: 'Fev/2018 - Jan/2020',
        activities: [
            "Ensino Médio Técnico.",
        ],
        type: 'STUDY'
    },
    {
        company: 'FAMETRO',
        logo: FametroLogo,
        role: 'Analista e Desenvolvedor de Sistemas',
        time: 'Ago/2021 - Dez/2023',
        activities: [
            "Tecnólogo em Análise e Desenvolvimento de Sistemas.",
        ],
        type: 'STUDY'
    },
    {
        company: 'Grupo ICTS',
        logo: GrupoICTSLogo,
        role: 'Desenvolvedor Full Stack Junior',
        time: 'Dez/2021 - Fev/2024',
        activities: [
            "Responsável pelo desenvolvimento de aplicações back-end (REST API, RESTful API).",
            "Responsável pelo desenvolvimento de aplicações front-end.",
            "Realização do deploy das aplicações em ambiente de homologação e produção.",
            "Desenvolvimento de processos de integração e comunicação entre aplicações.",
            "Gerenciamento e modelagem de banco de dados.",
            "Realização de pair programming para o desenvolvimento de algumas funcionalidades.",
            "Estudo contínuo de novas tecnologias, frameworks e boas práticas de desenvolvimento, geralmente orientado por um tech lead.",
            "Criação e atualização de documentação para funcionalidades e código, ajudando a manter o conhecimento acessível e organizado."
        ],
        type: 'WORK'
    },
    {
        company: 'Grupo ICTS',
        logo: GrupoICTSLogo,
        role: 'Desenvolvedor Full Stack Pleno',
        time: 'Mar/2024 - Atual',
        activities: [
            "Responsável pelo desenvolvimento de aplicações back-end (REST API, RESTful API).",
            "Responsável pelo desenvolvimento de aplicações front-end.",
            "Realização do deploy das aplicações em ambiente de homologação e produção.",
            "Aplicação de design patterns para solução de problemas.",
            "Resolução de problemas complexos e depuração de erros críticos.",
            "Participação ativa em processos de revisão de código e colaboração na definição de padrões de codificação.",
            "Contribuição para a arquitetura de software e decisões de design.",
            "Realização de integração e comunicação entre aplicações e dispositivos.",
            "Gerenciamento e modelagem de banco de dados.",
            "Colaboração com outros desenvolvedores, participação em reuniões de sprint, e auxílio a desenvolvedores juniores, ajudando-os a crescer tecnicamente."
        ],
        type: 'WORK'
    }
].reverse();

export default experience;