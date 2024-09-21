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
            "Responsável pelo desenvolvimento de aplicações back-end (REST API, RESTful API), utilizando Express.js e SequelizeORM com JavaScript e TypeScript.",
            "Responsável pelo desenvolvimento de aplicações front-end, utilizando React.js, Material UI, Redux e Redux-Saga.",
            "Realização do deploy das aplicações em ambiente de homologação e produção utilizando Git e PM2.",
            "Gerenciamento e modelagem de banco de dados utilizando MSSQL.",
            "Responsável pela integração de catracas Topdata, utilizando C# e .NET.",
            "Desenvolvimento de processos de integração e comunicação entre aplicações.",
            "Estudo contínuo de novas tecnologias, frameworks e boas práticas de desenvolvimento, geralmente orientado por um tech lead.",
            "Criação e atualização de documentação para funcionalidades e código."
        ],
        type: 'WORK'
    },
    {
        company: 'Grupo ICTS',
        logo: GrupoICTSLogo,
        role: 'Desenvolvedor Full Stack Pleno',
        time: 'Mar/2024 - Atual',
        activities: [
            "Responsável pelo desenvolvimento de aplicações back-end (REST API, RESTful API), utilizando Python, FastAPI, SQLAlchemy, C#, .NET e ASP.NET Core REST API.",
            "Responsável pelo desenvolvimento de aplicações front-end, utilizando React.js, Sass, Material UI e Recoil.",
            "Realização do deploy das aplicações em ambiente de homologação e produção utilizando Git e Docker.",
            "Gerenciamento e modelagem de banco de dados utilizando MSSQL.",
            "Responsável por integração de solução da CodeSoft para impressão de etiquetas, utilizando C# e .NET.",
            "Realização de integração e comunicação entre aplicações e dispositivos como robôs, CLPs e sistemas de visão utilizando Python.",
            "Resolução de problemas complexos e depuração de erros críticos.",
            "Aplicação de design patterns para solução de problemas.",
            "Participação ativa em processos de revisão de código pelo GitLab e colaboração na definição de padrões de codificação.",
            "Colaboração com outros desenvolvedores e auxílio a desenvolvedores juniores, ajudando-os a crescer tecnicamente."
        ],
        type: 'WORK'
    }
].reverse();

export default experience;