import styles from './divider.module.scss';

interface IDivider {
  position?: 'horizontal' | 'vertical'; 
  className?: string;
}

export default function Divider({ 
  position = 'horizontal', className }: IDivider) {
  return <div className={`
    ${styles.divider} 
    ${styles[`divider_${position}`]}
    ${className || ''}
  `}/>
};
