import classNames from 'classnames';
import styles from './Main.module.scss';
import stylesTheme from '../../styles/Theme.module.scss';
import Header from '../../components/Header';
import { Button, Card, CardContent, IconButton, Tooltip, Typography } from '@mui/material';
import { Call, GitHub, Instagram, LinkedIn, Mail, Terminal } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import curriculoPDF from '../../assets/Curriculo - Affonso Ruiz 2024.pdf'
import skills from '../../mocks/skills';
import projects from '../../mocks/projects';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from '@mui/lab';
import experience from '../../mocks/experience';
import { enqueueSnackbar } from 'notistack';
import moment from 'moment';
import profileGitHub from '../../assets/profile2.jpeg';
import PieDonutChart from '../../components/PieDonutChart';
import { GitHubService } from '../../services/GitHub.service';

const Main = () => {

    const gitHubService = new GitHubService();

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

    const [statistics, setStatistics] = useState({
        total_commits: 0,
        total_prs: 0,
        total_stars: 0
    });

    const [graphic, setGraphic] = useState({});

    const statisticsNames: Array<{
        name: string;
        key: string;
    }> = [
            {
                name: 'Total de Commits',
                key: 'total_commits',
            },
            {
                name: 'Total de PRs',
                key: 'total_prs',
            },
            {
                name: 'Total de Estrelas',
                key: 'total_stars',
            },
        ];

    const contacts = [
        {
            name: 'GitHub',
            icon: <GitHub sx={{
                fontSize: '40px'
            }} />,
            link: 'https://github.com/RuizHenrique01'
        },
        {
            name: 'LinkedIn',
            icon: <LinkedIn sx={{
                fontSize: '40px'
            }} />,
            link: 'https://www.linkedin.com/in/affonsoruiz/'
        },
        {
            name: 'Instagram',
            icon: <Instagram sx={{
                fontSize: '40px'
            }} />,
            link: 'https://www.instagram.com/ruiz_affonso?igsh=YTM5cnVrdHlyMGtv'
        },
    ];

    const endContacts = [{
        icon: <Call />,
        contact: '(92)99249-7674',
        label: '(92)99249-7674'
    },
    {
        icon: <Mail />,
        contact: 'affonsohenriqueruiz@gmail.com',
        label: 'affonsohenriqueruiz@gmail.com'
    },
    {
        icon: <LinkedIn />,
        contact: 'https://www.linkedin.com/in/affonsoruiz/',
        label: 'Affonso Henrique Ruiz Jurema'
    },
    {
        icon: <GitHub />,
        contact: 'https://github.com/RuizHenrique01',
        label: 'RuizHenrique01'
    },
    {
        icon: <Instagram />,
        contact: 'https://www.instagram.com/ruiz_affonso?igsh=YTM5cnVrdHlyMGtv',
        label: 'ruiz_affonso'
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

    useEffect(() => {

        gitHubService.getRepositories().then(res => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
            const data = res.reduce((acm: any, cur: any) => {
                if (!cur.language) {
                    return acm;
                }

                if (acm[cur.language]) {
                    acm[cur.language] = acm[cur.language] + cur.size;
                } else {
                    acm[cur.language] = cur.size;
                }

                return acm;
            }, {});

            setGraphic(data);
        }).catch(err => console.log(err));
        gitHubService.getCommits().then(res => {
            setStatistics(s => {
                return { ...s, total_commits: res }
            });
        }).catch(err => console.log(err));
        gitHubService.getPullRequests().then(res => {
            setStatistics(s => {
                return { ...s, total_prs: res }
            });
        }).catch(err => console.log(err));
        gitHubService.getRepositories().then(res => {
            setStatistics(s => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return { ...s, total_stars: res.filter((r: any) => r.stargazers_count).reduce((acm: any, cur: any) => acm + cur.stargazers_count, 0) }
            });
        }).catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const orderGraphicValues: any= () => {
        const entries = Object.entries(graphic);

        // Ordenar o array com base nos valores
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        entries.sort((a: any, b: any) => b[1] - a[1]);

        // Construir um novo objeto JSON a partir do array ordenado (opcional)
        const sortedJson = Object.fromEntries(entries);
        return sortedJson;
    }

    const handleDownloadPDF = () => {
        // URL do PDF existente
        const pdfUrl = curriculoPDF;

        // Gerar um nome de arquivo para o PDF (opcional)
        const fileName = `Curriculo - Affonso Ruiz - ${new Date().toISOString()}.pdf`;

        // Criar um link temporário
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;

        // Adicionar o link ao DOM e clicar nele para iniciar o download
        document.body.appendChild(link);
        link.click();

        // Remover o link do DOM após o download
        document.body.removeChild(link);
    };

    const getYearsOld = () => {
        const today = moment();
        const birthday = moment("2003-02-09");
        return moment.duration(today.diff(birthday)).years();
    }

    const getDiferenceYears = (dateInit: string) => {
        const today = moment();
        const birthday = moment(dateInit);
        return moment.duration(today.diff(birthday)).years();
    }

    const getStatict = (key: string) => {
        const data = statistics[key as keyof typeof statistics];
        return data;
    }

    return (<div className={classNames(stylesTheme.light, styles.main)}>
        <Header />
        <div className={classNames(stylesTheme.background, styles.main__body)}>
            <div className={styles.main__shape}>
                <section className={styles.main__home} id="home">
                    <div className={styles.main__home__description}>
                        <div className={styles.main__home__description__box}>
                            <Typography variant='h2' className={styles.main__home__description__text}>Hello World! <Terminal
                                className={stylesTheme.text_secondary}
                                sx={{
                                    fontSize: '60px',
                                    marginLeft: '8px'
                                }} /></Typography>
                            <Typography variant='h4'>Eu sou <span className={stylesTheme.text_primary}>Affonso Ruiz</span></Typography>
                            <div className={styles.main__home__description__code}>{messages[count]}</div>
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
                            <Button variant='outlined' onClick={() => handleDownloadPDF()} className={styles.main__home__description__curriculo}>
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
                        <p>Olá! Sou Affonso Ruiz, tenho {getYearsOld()} anos de idade e sou um Analista e Desenvolvedor de Sistemas formado pela renomada Faculdade Metropolitana de Manaus (Fametro), com uma sólida formação técnica em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia do Amazonas (IFAM).</p>

                        <p>Com mais de {getDiferenceYears("2018-02-01")} anos dedicados ao estudo e prática da programação, possuo cerca de {getDiferenceYears("2021-12-13")} anos de experiência como Desenvolvedor FullStack Web, período em que concentrei meus esforços na criação de robustas API Rest, desenvolvimento de páginas web dinâmicas e integrações de processos de comunicação, contribuindo ativamente para projetos profissionais.</p>

                        <p>Além disso, tive a oportunidade de participar do desenvolvimento de diversas aplicações, incluindo web (backend e frontend), mobile, jogos, desktop e automação industrial.</p>

                        <p>Minha paixão pela tecnologia se reflete em meu trabalho diário e em meu incessante desejo de aprendizado. Busco constantemente participar de eventos e workshops de programação, mantendo-me atualizado com as últimas tendências do setor e aprimorando minhas habilidades técnicas.</p>

                        <p>Estou totalmente comprometido em evoluir continuamente em minha carreira como desenvolvedor, sempre em busca de novos desafios e oportunidades para aplicar meu conhecimento e criatividade em projetos inovadores.</p>

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
                                        <Typography gutterBottom variant="h6" component="div" sx={{
                                            fontSize: '1.125rem'
                                        }}>
                                            {s.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>
                </section>
                <hr className={styles.main__division}></hr>

                <section className={styles.main__projects} id="projects">
                    <Typography variant='h4' className={styles.main__projects__text}>Projetos</Typography>
                    <div className={styles.main__projects__body}>
                        {projects.map(p => (
                            <Card
                                key={p.title}
                                className={styles.main__projects__card}
                                sx={{
                                    width: '400px',
                                    minHeight: '450px',
                                    m: 0,
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                }}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '250px',
                                        flex: 1,
                                        background: `url(${p.panelImg})`,
                                        padding: 0,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: p.positionImg,
                                        display: 'block'
                                    }}
                                />
                                <CardContent sx={{
                                    justifySelf: 'flex-end',
                                }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {p.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        textAlign: 'justify',
                                        fontSize: '1rem'
                                    }}>
                                        {p.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <hr className={styles.main__division}></hr>

                <section className={styles.main__statistics} id="statistics">
                    <Typography variant='h4' className={styles.main__statistics__text}>Estatísticas do GitHub</Typography>
                    <div className={styles.main__statistics__body}>
                        {statisticsNames.map((p) => (
                            <Card
                                key={p.name}
                                className={styles.main__statistics__card}
                                sx={{
                                    flex: 1,
                                    minWidth: "230px",
                                    minHeight: '120px',
                                    m: 0,
                                    p: "16px",
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                <Typography gutterBottom variant="h6" component="div" className={styles.main__statistics__card__title}>
                                    {p.name}
                                </Typography>
                                <Typography gutterBottom variant="h4" component="div" className={styles.main__statistics__card__content}>
                                    {getStatict(p.key)}
                                </Typography>
                            </Card>
                        ))}
                    </div>
                    <div className={styles.main__statistics__body} style={{
                        marginTop: 0
                    }}>
                        <Tooltip title={<h2>
                            👨‍💻 Programando!
                        </h2>} placement='right'>

                            <Card
                                className={classNames([styles.main__statistics__card, styles.main__statistics__card__profile])}>
                                <div
                                    style={{
                                        width: '100%',
                                        flex: 1,
                                        background: `url(${profileGitHub})`,
                                        padding: 0,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                        objectFit: 'fill',
                                        display: 'block'
                                    }}
                                />
                                <Typography gutterBottom variant="h5" component="div" className={styles.main__statistics__card__title} style={{
                                    alignSelf: 'center',
                                    margin: '8px 0px 0px 0px'
                                }}>
                                    RuizHenrique01
                                </Typography>
                            </Card>
                        </Tooltip>
                        <Card
                            className={classNames([styles.main__statistics__card, styles.main__statistics__card__graph])}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.main__statistics__card__title}>
                                Linguagens Mais Usadas
                            </Typography>
                            <PieDonutChart series={Object.values(orderGraphicValues()).slice(0,5)} labels={Object.keys(orderGraphicValues()).slice(0,5)} />
                        </Card>
                    </div>
                </section>

                <hr className={styles.main__division}></hr>

                <section className={styles.main__experience} id="experience">
                    <Typography variant='h4' className={styles.main__experience__text}>Experiência</Typography>
                    <div className={styles.main__experience__body}>
                        <Timeline sx={{
                            width: '100%',
                            margin: 0,
                            padding: 0,
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                            },
                        }}>
                            {
                                experience.map(e => (
                                    <TimelineItem key={e.company}
                                        sx={
                                            {
                                                width: '100%',
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                                m: 0,
                                                p: 0
                                            }
                                        }>
                                        <TimelineSeparator sx={{
                                            height: '100%',
                                        }}>
                                            <TimelineDot sx={{
                                                width: '18px',
                                                height: '18px',
                                            }} />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Card
                                                className={styles.main__experience__card}
                                                sx={{
                                                    width: '800px',
                                                }}>
                                                <img
                                                    src={e.logo}
                                                    alt={e.company + " logo"}
                                                />
                                                <div>
                                                    <Typography variant='h4'>{e.company + " - " + e.time}</Typography>
                                                    <Typography variant='h6'>{e.role}</Typography>
                                                    <p>Atividades:</p>
                                                    <ul>
                                                        {
                                                            e.activities.map((a, i) => (
                                                                <li key={i}>{a}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </Card>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))
                            }
                        </Timeline>
                    </div>
                </section>

                <hr className={styles.main__division}></hr>

                <section className={styles.main__contact} id="contacts">
                    <Typography variant='h4' className={styles.main__contact__text}>Contatos</Typography>
                    <div className={styles.main__contact__body}>
                        {
                            endContacts.map((e, i) => (
                                <p key={i} className={styles.main__contact__paragraph} onClick={() => {
                                    navigator.clipboard.writeText(e.contact);
                                    enqueueSnackbar('Contato copiado!', {
                                        autoHideDuration: 3000,
                                        anchorOrigin: {
                                            vertical: 'bottom',
                                            horizontal: 'center'
                                        }
                                    })
                                }}>{e.icon} {e.label}</p>
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    </div >)
}

export default Main;