import { Link } from 'react-router-dom';
import CloseIcon from '../../assets/images/icons/close_icon.svg';

import styles from './CloseLink.module.css';

export const CloseLink = () => {
  return (
    <Link to='/' className={styles.close}>
      <CloseIcon className={styles.closeIcon} />
    </Link>
  );
};
