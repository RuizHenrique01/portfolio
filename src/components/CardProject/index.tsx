import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import styles from './CardProject.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import { Chip, Divider, IconButton, SpeedDial, Typography } from '@mui/material';
import { ArrowBack, Close } from '@mui/icons-material';
import languagesColors from '../../mocks/languagesColors';

interface IProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    title: string,
    images: Array<string>,
    languages: Array<string>,
    body: JSX.Element
}

const CardProject = ({ open, setOpen, images, title, languages, body }: IProps) => {

    const [index, setIndex] = React.useState(0);

    const [windowSize, setWindowSize] = React.useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const handleClose = () => {
        setOpen(false);
        setIndex(0);
    }

    React.useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{
                "& .MuiDialog-container": {
                    position: "relative",
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: windowSize[0] > 1130 ? "90vw" : 1032 < windowSize[0] ? "95vw" : "none",  // Set your width here
                        height: "100%",
                        maxHeight: 1032 < windowSize[0] ? "90vh" : "none",
                    },
                },
            }}
            fullScreen={1032 > windowSize[0]}
        >
            {1032 < windowSize[0] && <IconButton sx={{
                position: "absolute",
                right: 10,
                top: 10,
                zIndex: 4,
            }}
                onClick={handleClose}
            >
                <Close />
            </IconButton>}
            <div className={styles.cardProject__container}>
                <div className={styles.cardProject__container__carousel}>
                    <Carousel interval={9000} activeIndex={index} onSelect={handleSelect} style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        {
                            images.map((image, index) =>
                                <Carousel.Item key={index} style={{
                                    width: '100%',
                                    height: '100%'
                                }}>
                                    <img className="d-block" src={image} style={{
                                        objectFit: 'contain',
                                        width: "100%",
                                        maxHeight: "80vh"
                                    }} />
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                </div>
                <div className={styles.cardProject__container__content}>
                    <Typography variant="h4" sx={{
                        textAlign: 'center'
                    }}>{title}</Typography>
                    <Divider variant="middle" component={"h4"} sx={{
                        width: '60%',
                        border: "1px solid black"
                    }} />
                    <div className={styles.cardProject__container__content__bagde}>

                        {
                            languages.map((language: string, index) => {
                                const color = languagesColors[language as keyof typeof languagesColors];
                                return <Chip key={index} label={language} variant="outlined" sx={{
                                    color: color,
                                    borderColor: color,
                                    '&:hover': {
                                        backgroundColor: color,
                                        color: 'white'
                                    }
                                }}
                                />
                            }
                            )
                        }
                    </div>

                    <article className={styles.cardProject__container__content__body}>
                        {body}
                    </article>
                </div>
            </div>
            {1032 > windowSize[0] && <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={
                    {
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        ".MuiSpeedDial-fab": {
                            backgroundColor: "#d27619",
                          }
                    }}
            icon={<ArrowBack />}
            onClick={handleClose}
            >
        </SpeedDial>}
        </Dialog >
    );
}

export default CardProject;