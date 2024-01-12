import classNames from 'classnames';
import styles from './Main.module.scss';
import stylesTheme from '../../styles/Theme.module.scss';
import Header from '../../components/Header';
import { Button, Card, CardContent, IconButton, Tooltip, Typography } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import skills from '../../mocks/skills';

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
            link: 'https://github.com/RuizHenrique01'
        },
        {
            name: 'LinkedIn',
            icon: <LinkedIn sx={{
                fontSize: '32px'
            }} />,
            link: 'https://www.linkedin.com/in/affonsoruiz/'
        },
        {
            name: 'Instagram',
            icon: <Instagram sx={{
                fontSize: '32px'
            }} />,
            link: 'https://www.instagram.com/ruiz_affonso?igsh=YTM5cnVrdHlyMGtv'
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
                <section className={styles.main__home} id="home">
                    <div className={styles.main__home__description}>
                        <div className={styles.main__home__description__box}>
                            <Typography variant='h2' className={styles.main__home__description__text}>{"Hello World!🌎"}</Typography>
                            <Typography variant='h4'>Eu sou <span className={stylesTheme.text_primary}>Affonso Ruiz</span></Typography>
                            <p className={styles.main__home__description__code}>{messages[count]}</p>
                            <div className={styles.main__home__description__icons}>
                                {contacts.map(c => (
                                    <Tooltip title={c.name} key={c.name}>
                                        <IconButton aria-label="delete" className={styles.main__home__description__icons__buttons} onClick={() => {
                                            window.open(c.link)
                                        }}>
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

                <section className={styles.main__about} id="about">
                    <article>
                        <Typography variant='h4' className={styles.main__about__title}>Sobre</Typography>
                        <p>Sou um desenvolvedor Full Stack Júnior e técnico de informática formado pelo <b>Instituto Federal de Educação, Ciência e Tecnologia do Amazonas (IFAM)</b>. Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Fametro.</p>
                        <p>Possuo experiência com o desenvolvimento de alguns projetos pessoais, como criação de APIs, que utilizam tecnologias como NodeJs, JavaScript, TypeScript, Express.js, MongoDB, JWT, TypeORM e entre outras tecnologias.</p>
                        <p>Também desenvolvi alguns outros projetos como aplicativos e web sites que utilizam tecnologias como Java, kotlin, HTML, CSS, SQL, Firebase e entre outros.</p>
                        <p>Sou alguém extremamente apaixonado por tecnologia e sempre que possível gosto de participar de eventos e workshops de programação. Espero sempre esta aprendendo e evoluindo na minha carreia como desenvolvedor.</p>
                    </article>
                </section>

                <hr className={styles.main__division}></hr>

                <section className={styles.main__skills} id="skills">
                    <Typography variant='h4' className={styles.main__skills__text}>Skills</Typography>
                    <div className={styles.main__skills__body}>
                        {
                            skills.map(s => (
                                <Card 
                                className={styles.main__skills__card}
                                key={s.name}
                                // onClick={() => 
                                //     {
                                //         window.open('https://stackoverflow.com/questions/6983026/javascript-assign-array-values-to-multiple-variables')
                                // }}
                                sx={{ width: 130, height: 170, pt: '16px', pb: '16px', pl: '8px', pr: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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