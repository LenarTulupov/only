import { Outlet } from 'react-router-dom';
import styles from './pages-layout.module.scss';

export default function PagesLayout() {
  return (
    <div className={styles['pages-layout']}>
      <Outlet />
    </div>
  )
};
