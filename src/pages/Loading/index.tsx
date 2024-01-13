
import classNames from 'classnames';
import stylesTheme from '../../styles/Theme.module.scss';
import styles from './Loading.module.scss';
import { CircularProgress } from '@mui/material';

const Loading = () => {
    return <div className={classNames(stylesTheme.background, styles.load__body)}>
        <CircularProgress className={styles.load__body__load} />
    </div>
};

export default Loading;