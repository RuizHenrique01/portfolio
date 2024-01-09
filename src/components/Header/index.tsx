import classNames from 'classnames';
import style from './Header.module.scss';
import styleTheme from '../../styles/Theme.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItems = [{
        name: 'Home',
        link: ''
    },
    {
        name: 'Sobre',
        link: ''
    },
    {
        name: 'Skills',
        link: ''
    },
    {
        name: 'Projetos',
        link: ''
    },
    {
        name: 'Experiência',
        link: ''
    },
    {
        name: 'Contatos',
        link: ''
    },
    ]

    return <header className={classNames(styleTheme.background, style.header)}>
        <ul className={style.header__menu}>
            {
                menuItems.map(m => (
                    <li key={m.name} >
                        <Link to={m.link}>{m.name}</Link>
                    </li>
                ))
            }
        </ul>
    </header>
}

export default Header;