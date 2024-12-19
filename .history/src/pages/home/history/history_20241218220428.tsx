import { useState } from "react";
import Title from "../../../components/ui/title/title";
import { circleItems } from "../../../constants/circle-items";
import Circle from "./circle/circle";
import styles from './history.module.scss';
import StepNavigation from "./step-navigation/step-navigation";
import ContentContainer from "../../../components/ui/content-container/content-container";
import Divider from "../../../components/ui/divider/divider";

export default function HistorySection() {
  const [activeButton, setActiveButton] = useState<number>(1);
  const activeCategory = circleItems.find((item) => item.id === activeButton);
  const firstDate = activeCategory?.events[0]?.year;
  const lastDate = activeCategory?.events.at(-1)?.year;
  return (
    <section className={styles.history}>
      <ContentContainer>
        <Title className={styles.history__title} showBefore>
          Исторические даты
        </Title>
          </ContentContainer>
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
        </div>
        <ContentContainer>

        </ContentContainer>
        <StepNavigation
          // className={styles['step-navigation']}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
    </section>
  )
};

// import { useState } from 'react';
// import Divider from '../../../components/ui/divider/divider';
// import Title from '../../../components/ui/title/title';
// import Circle from './circle/circle';
// import Dates from './dates/dates';
// import HistorySlider from './history-slider/history-slider';
// import styles from './history.module.scss';
// import StepNavigation from './step-navigation/step-navigation';
// import { circleItems } from '../../../constants/circle-items';
// import ContentContainer from '../../../components/ui/content-container/content-container';

// export default function HistorySection() {
//   const [activeButton, setActiveButton] = useState<number>(1);
//   const activeCategory = circleItems.find((item) => item.id === activeButton);
//   const firstDate = activeCategory?.events[0]?.year;
//   const lastDate = activeCategory?.events.at(-1)?.year;

//   return (
//     <section className={styles.history}>
//       <div className={styles.history__content}>
//         <div className={styles['history__content-col-1']}>
//           <ContentContainer className={styles.container}>
//             <Title className={styles.history__title} showBefore>
//               Исторические даты
//             </Title>
//           </ContentContainer>
//             <Circle
//               className={styles.circle}
//               activeButton={activeButton}
//               setActiveButton={setActiveButton}
//             />
//         </div>
//         <StepNavigation
//           className={styles['step-navigation']}
//           activeButton={activeButton}
//           setActiveButton={setActiveButton}
//         />
//         <Divider
//           position="horizontal"
//           className={styles.divider_horizontal}
//         />
//         <Dates
//           className={styles.dates}
//           firstDate={firstDate}
//           lastDate={lastDate}
//         />
//       </div>
//       <HistorySlider
//         activeCategory={activeCategory}
//         className={styles['history-slider']}
//       />
//     </section>
//   )
// };