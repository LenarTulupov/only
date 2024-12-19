import { useState } from 'react';
import ContentContainer from '../../../components/ui/content-container/content-container';
import Divider from '../../../components/ui/divider/divider';
import Title from '../../../components/ui/title/title';
import Circle from './circle/circle';
import Dates from './dates/dates';
import HistorySlider from './history-slider/history-slider';
import styles from './history.module.scss';
import StepNavigation from './step-navigation/step-navigation';

export default function HistorySection() {
  const [activeButton, setActiveButton] = useState<number>(1);


  return (
    <section className={styles.history}>
      <div className={styles.history__content}>
        <div className={styles['history__content-col-1']}>
          <Title className={styles.history__title} showBefore>
            Исторические даты
          </Title>
          <StepNavigation className={styles['step-navigation']} />
        </div>
        <Circle className={styles.circle} activeButton, setActiveButton/>
        <Divider
          position="horizontal"
          className={styles.divider_horizontal}
        />
        <Dates className={styles.dates} />
      </div>
      <HistorySlider className={styles['history-slider']}/>
    </section>
  )
};
