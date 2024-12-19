import Title from '../../../../components/ui/title/title';
import styles from './dates.module.scss';

interface IDates {
  className?: string;
  
}

export default function Dates({ className, firstDate, astDate }: IDates) {
  return (
    <div className={`${styles.dates} ${className || ''}`}>
      <Title color='blue' size='big'>2015</Title>
      <Title color='pink' size='big'>2022</Title>
    </div>
  )
};
