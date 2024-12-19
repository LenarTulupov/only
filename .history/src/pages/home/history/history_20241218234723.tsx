import { useState } from "react";
import Title from "../../../components/ui/title/title";
import { circleItems } from "../../../constants/circle-items";
import Circle from "./circle/circle";
import styles from './history.module.scss';
import StepNavigation from "./step-navigation/step-navigation";
import ContentContainer from "../../../components/ui/content-container/content-container";
import Divider from "../../../components/ui/divider/divider";
import Dates from "./dates/dates";
import HistorySlider from "./history-slider/history-slider";

export default function HistorySection() {
  const [activeButton, setActiveButton] = useState<number>(1);
  const activeCategory = circleItems.find((item) => item.id === activeButton);
  const firstDate = activeCategory?.events[0]?.year;
  const lastDate = activeCategory?.events.at(-1)?.year;
  return (
    <section className={styles.history}>
      <Title className={styles.history__title} showBefore>
        Исторические даты
      </Title>
      <div className={styles['circle-wrapper']}>
        <Circle
          className={styles.circle}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <Divider
          position="horizontal"
          className={styles.divider_horizontal}
        />
        <Dates firstDate={firstDate} lastDate={lastDate} />
      </div>
      <ContentContainer>
        <StepNavigation
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </ContentContainer>
      <ContentContainer>
        <HistorySlider
          activeCategory={activeCategory}
        />
      </ContentContainer>
    </section>
  )
};