import hostgator from '../assets/hostgator.svg';

const skills = [
    {
        name: 'JavaScript',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    },
    {
        name: 'TypeScript',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        link: 'https://www.typescriptlang.org/'
    },
    {
        name: 'NodeJS',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        link: 'https://nodejs.org/'
    },
    {
        name: 'NPM',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
        link: 'https://www.npmjs.com/'
    },
    {
        name: 'Yarn',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg',
        link: 'https://yarnpkg.com/'
    },
    {
        name: 'HTML',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
    },
    {
        name: 'CSS',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },
    {
        name: 'React',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        link: 'https://react.dev/'
    },
    {
        name: 'Express.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        link: 'https://expressjs.com/'
    },
    {
        name: 'NestJS',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
        link: 'https://nestjs.com/'
    },
    {
        name: 'Angular',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        link: 'https://angular.io/'
    },
    {
        name: 'MongoDB',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
        link: 'https://www.mongodb.com/'
    },
    {
        name: 'PostgreSQL',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        link: 'https://www.postgresql.org/'
    },
    {
        name: 'MySQL',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        link: 'https://www.mysql.com/'
    },
    {
        name: 'MSSQL',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg',
        link: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019'
    },
    {
        name: 'Firebase',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        link: 'https://firebase.google.com/'
    },
    {
        name: 'Android',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
        link: 'https://developer.android.com/studio'
    },
    {
        name: 'Kotlin',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
        link: 'https://kotlinlang.org/'
    },
    {
        name: 'Java',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        link: 'https://www.oracle.com/java/'
    },
    {
        name: 'Spring',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        link: 'https://spring.io/'
    },
    {
        name: 'Python',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        link: 'https://www.python.org/'
    },
    {
        name: 'Flask',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
        link: 'https://flask.palletsprojects.com/'
    },
    {
        name: 'FastAPI',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
        link: 'https://fastapi.tiangolo.com/'
    },
    {
        name: 'C',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
    },
    {
        name: 'C++',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        link: 'https://learn.microsoft.com/pt-br/cpp/cpp/?view=msvc-170'
    },
    {
        name: 'C#',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        link: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
    },
    {
        name: '.Net',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
        link: 'https://dotnet.microsoft.com/'
    },
    {
        name: 'PHP',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
        link: 'https://www.php.net/'
    },
    {
        name: 'Golang',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
        link: 'https://go.dev/'
    },
    {
        name: 'Docker',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        link: 'https://www.docker.com/'
    },
    {
        name: 'VS Code',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        link: 'https://code.visualstudio.com/'
    },
    {
        name: 'Git',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        link: 'https://git-scm.com/'
    },
    {
        name: 'GitHub',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        link: 'https://github.com/'
    },
    {
        name: 'AWS',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        link: 'https://aws.amazon.com/'
    },
    {
        name: 'PuTTY',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg',
        link: 'https://www.putty.org/'
    },
    {
        name: 'Jenkins',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
        link: 'https://www.jenkins.io/'
    },
    {
        name: 'HostGator',
        img: hostgator,
        link: 'https://www.hostgator.com/'
    }
];

export default skills;
