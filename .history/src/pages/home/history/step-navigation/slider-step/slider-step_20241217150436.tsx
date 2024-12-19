import Title from "../../../../../components/ui/title/title";
import styles from './slider-step.module.scss';

interface ISliderStep {
  activeButton: number;
}

export default function SliderStep({ activeButton }: ISliderStep) {
  return <Title size="small" className={styles.font}>0/06</Title>
};
