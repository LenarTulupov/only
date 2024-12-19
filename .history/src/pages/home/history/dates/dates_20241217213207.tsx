import Title from '../../../../components/ui/title/title';
import styles from './dates.module.scss';

interface IDates {
  className?: string;
  firstDate: string;
  lastDate: string;
}

export default function Dates({ className, firstDate, lastDate }: IDates) {
  const 
  return (
    <div className={`${styles.dates} ${className || ''}`}>
      <Title color='blue' size='big'>{firstDate}</Title>
      <Title color='pink' size='big'>{lastDate}</Title>
    </div>
  )
};
