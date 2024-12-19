import Title from "../../../../../components/ui/title/title";
import styles from './slider-content.module.scss';

interface ISliderContent {
  year: string;
  text: string;
}

export default function SliderContent({ year, text }: ISliderContent) {
  console.log(date)
  return (
    <div className={styles['slider-content']}>
      <Title>{date}</Title>
      <p>{text}</p>
    </div>
  )
};
