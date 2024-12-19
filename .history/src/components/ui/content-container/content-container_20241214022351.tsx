import { ReactNode } from 'react';
import styles from './content-container.module.scss';

interface IContentContainer {
  children: ReactNode;
}

export default function ContentContainer({ children }: IContentContainer) {
  return (
    <div className={styles['content-container']}>
      {children}
    </div>
  )
};
