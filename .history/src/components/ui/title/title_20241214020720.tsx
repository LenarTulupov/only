import { ReactNode } from 'react';
import styles from './title.module.scss';

interface ITitle {
  children: ReactNode;
  className?: string;
  color?: 'main' | 'blue' | 'pink';
  size?: 'main' | 'small'| 'big';
  showBefore?: boolean;
}

export default function Title({ 
  children, 
  className,
  color = 'main',
  size = 'main',
  showBefore = false }: ITitle) {
  return (
    <h1
      className={`
        ${styles.title} 
        ${className || ''}
        ${styles[`title__color-${color}`]} 
        ${styles[`title__size-${size}`]} 
        ${showBefore ? styles['title_before'] : ''}
      `}>
      {children}
    </h1>
  )
};
