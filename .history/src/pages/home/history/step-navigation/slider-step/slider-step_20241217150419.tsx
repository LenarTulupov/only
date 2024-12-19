import Title from "../../../../../components/ui/title/title";
import styles from './slider-step.module.scss';

interface ISliderStep {
  activeButton: number;
}

export default function SliderStep() {
  return <Title size="small" className={styles.font}>01/06</Title>
};
