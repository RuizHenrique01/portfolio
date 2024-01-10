import classNames from 'classnames';
import styles from './Main.module.scss';
import stylesTheme from '../../styles/Theme.module.scss';
import Header from '../../components/Header';
import { Button, Card, CardContent, IconButton, Tooltip, Typography } from '@mui/material';
import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const Main = () => {

    const helloMessages = [
        <p>printf(<span className={stylesTheme.text_secondary}>"Hello World!"</span>);</p>,
        <p>console.log(<span className={stylesTheme.text_secondary}>"Hello World!"</span>);</p>,
        <p>fmt.Println(<span className={stylesTheme.text_secondary}>"Hello World!"</span>)</p>,
        <p>std::cout &lt;&lt; <span className={stylesTheme.text_secondary}>"Hello World!"</span>;</p>,
        <p>print(<span className={stylesTheme.text_secondary}>"Hello World!"</span>)</p>,
        <p>System.out.println(<span className={stylesTheme.text_secondary}>"Hello World!"</span>);</p>,
        <p>Console.WriteLine(<span className={stylesTheme.text_secondary}>"Hello World!"</span>);</p>];
    const [messages] = useState(helloMessages);
    const [count, setCount] = useState<number>(0);

    const contacts = [
        {
            name: 'GitHub',
            icon: <GitHub sx={{
                fontSize: '32px'
            }} />,
            link: ''
        },
        {
            name: 'LinkedIn',
            icon: <LinkedIn sx={{
                fontSize: '32px'
            }} />,
            link: ''
        },
        {
            name: 'Instagram',
            icon: <Instagram sx={{
                fontSize: '32px'
            }} />,
            link: ''
        },
        {
            name: 'Facebook',
            icon: <Facebook sx={{
                fontSize: '32px'
            }} />,
            link: ''
        }
    ];

    const skills = [
        {
            name: 'JavaScript',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
            name: 'TypeScript',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
            name: 'NodeJS',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
            name: 'NPM',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
        },
        {
            name: 'Yarn',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg'
        },
        {
            name: 'HTML',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        {
            name: 'CSS',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        {
            name: 'React',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
            name: 'Express.js',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
        },
        {
            name: 'NestJS',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg'
        },
        {
            name: 'MongoDB',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'
        },
        {
            name: 'PostgreSQL',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        {
            name: 'MySQL',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        {
            name: 'Firebase',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
        },
        {
            name: 'Android',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg'
        },
        {
            name: 'Kotlin',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
        },
        {
            name: 'Java',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
        },
        {
            name: 'Spring',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
        },
        {
            name: 'Python',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
            name: 'Flask',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
        },
        {
            name: 'FastAPI',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
        },
        {
            name: 'C',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
        },
        {
            name: 'C++',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
        },
        {
            name: 'C#',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
        },
        {
            name: '.Net',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
        },
        {
            name: 'Golang',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg'
        },
        {
            name: 'Docker',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        },
        {
            name: 'VS Code',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
        },
        {
            name: 'Git',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        {
            name: 'GitHub',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        {
            name: 'AWS',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
        },
        {
            name: 'PuTTY',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg'
        },
    ];


    useEffect(() => {
        const timeoutId = setInterval(() => {
            setCount(m => m + 1 < messages.length ? m + 1 : 0);
        }, 10000);

        // Cleanup the timeout to avoid memory leaks
        return () => {
            clearInterval(timeoutId)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<div className={classNames(stylesTheme.light, styles.main)}>
        <Header />
        <div className={classNames(stylesTheme.background, styles.main__body)}>
            <div className={styles.main__shape}>
                <section className={styles.main__home}>
                    <div className={styles.main__home__description}>
                        <div className={styles.main__home__description__box}>
                            <Typography variant='h2' className={styles.main__home__description__text}>{"Hello World!🌎"}</Typography>
                            <Typography variant='h4'>Eu sou <span className={stylesTheme.text_primary}>Affonso Ruiz</span></Typography>
                            <p className={styles.main__home__description__code}>{messages[count]}</p>
                            <div className={styles.main__home__description__icons}>
                                {contacts.map(c => (
                                    <Tooltip title={c.name} key={c.name}>
                                        <IconButton aria-label="delete" className={styles.main__home__description__icons__buttons}>
                                            {c.icon}
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </div>
                            <Button variant='outlined' className={styles.main__home__description__curriculo}>
                                Download CV
                            </Button>
                        </div>
                    </div>
                    <div className={styles.main__home__profile}>
                        <div className={styles.main__home__profile__img}>

                        </div>
                    </div>
                </section>

                <hr className={styles.main__division}></hr>

                <section className={styles.main__about}>
                    <article>
                        <Typography variant='h4' className={styles.main__about__title}>Sobre</Typography>
                        <p>Sou um desenvolvedor Full Stack Júnior e técnico de informática formado pelo <b>Instituto Federal de Educação, Ciência e Tecnologia do Amazonas (IFAM)</b>. Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Fametro.</p>
                        <p>Possuo experiência com o desenvolvimento de alguns projetos pessoais, como criação de APIs, que utilizam tecnologias como NodeJs, JavaScript, TypeScript, Express.js, MongoDB, JWT, TypeORM e entre outras tecnologias.</p>
                        <p>Também desenvolvi alguns outros projetos como aplicativos e web sites que utilizam tecnologias como Java, kotlin, HTML, CSS, SQL, Firebase e entre outros.</p>
                        <p>Sou alguém extremamente apaixonado por tecnologia e sempre que possível gosto de participar de eventos e workshops de programação. Espero sempre esta aprendendo e evoluindo na minha carreia como desenvolvedor.</p>
                    </article>
                </section>

                <hr className={styles.main__division}></hr>

                <section className={styles.main__skills}>
                    <Typography variant='h4' className={styles.main__skills__text}>Skills</Typography>
                    <div className={styles.main__skills__body}>
                        {
                            skills.map(s => (
                                <Card sx={{ width: 130, height: 170, pt: '16px', pb: '16px', pl: '8px', pr: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img
                                        width="90px"
                                        height="90px"
                                        src={s.img}
                                        alt={s.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {s.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>
                </section>


                <hr className={styles.main__division}></hr>
            </div>
        </div>
    </div >)
}

export default Main;