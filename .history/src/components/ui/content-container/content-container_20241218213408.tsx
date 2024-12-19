import { ReactNode } from 'react';
import styles from './content-container.module.scss';

interface IContentContainer {
  children: ReactNode;
  className?: string;
}

export default function ContentContainer({ 
  children, className }: IContentContainer) {
  return (
    <div className={`${styles['content-container']}`}>
      {children}
    </div>
  )
};
