import Title from "../../../../../components/ui/title/title";
import styles from './slider-content.module.scss';

interface ISliderContent {
  date: number;
  text: string;
}

export default function SliderContent({ date, text }: ISliderContent) {
  return (
    <div className={styles['slider-content']}>
      <Title>{date}</Title>
      <p>{text}</p>
    </div>
  )
};
