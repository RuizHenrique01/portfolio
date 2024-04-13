import classNames from 'classnames';
import style from './Header.module.scss';
import styleTheme from '../../styles/Theme.module.scss';
import { useEffect, useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

const Header = () => {

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const menuItems = [{
        name: 'Home',
        link: '#home'
    },
    {
        name: 'Sobre',
        link: '#about'
    },
    {
        name: 'Skills',
        link: '#skills'
    },
    {
        name: 'Projetos',
        link: '#projects'
    },
    {
        name: 'Estatísticas',
        link: '#statistics'
    },
    {
        name: 'Experiência',
        link: '#experience'
    },
    {
        name: 'Contatos',
        link: '#contacts'
    },
    ]

    return <header className={classNames(styleTheme.background, style.header)}>
        {
            windowSize[0] < 600 ?
                <IconButton aria-label="menu" size="large" onClick={() => setOpen(true)} >
                    <Menu fontSize="inherit" className={styleTheme.text_secondary} />
                </IconButton> :
                <ul className={style.header__menu}>
                    {
                        menuItems.map(m => (
                            <li key={m.name} >
                                <a href={m.link}>{m.name}</a>
                            </li>
                        ))
                    }
                </ul>
        }
        <Drawer
            anchor='left'
            open={open}
            variant="temporary"
            onClose={() => setOpen(false)}
            sx={{
                width: "170px",
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: "170px",
                  boxSizing: 'border-box',
                },
              }}
        >
            <ul className={style.header__menu__side} style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                margin: "16px 0",
                padding: 0,
                height: 'auto',
                gap: 0,
            }}>
                {
                    menuItems.map(m => (
                        <li key={m.name} style={{
                            width: '100%',
                            display: 'flex',
                            justifySelf: 'flex-start',
                            alignSelf: 'flex-end',
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}
                        onClick={() => setOpen(false)}
                        >
                            <a href={m.link} style={{
                                width: '70%',
                                padding: "8px 16px",
                                textAlign: 'center',
                            }}>{m.name}</a>
                        </li>
                    ))
                }
            </ul>
        </Drawer>
    </header>
}

export default Header;