import Title from '../../../../components/ui/title/title';
import styles from './dates.module.scss';

interface IDates {
  className?: string;
  lastDate
}

export default function Dates({ className }: IDates) {
  return (
    <div className={`${styles.dates} ${className || ''}`}>
      <Title color='blue' size='big'>2015</Title>
      <Title color='pink' size='big'>2022</Title>
    </div>
  )
};
