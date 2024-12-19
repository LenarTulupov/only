import Title from "../../../../../components/ui/title/title";
import styles from './slider-content.module.scss';

interface ISliderContent {
  year: string;
  text: string;
}

export default function SliderContent({ year, text }: ISliderContent) {
  return (
    <div className={styles['slider-content']}>
      <Title size="small" color="light-blue" className={styles['slider-content']}>{year}</Title>
      <p>{text}</p>
    </div>
  )
};
