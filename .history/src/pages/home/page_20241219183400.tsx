import Container from "../../components/ui/container/container";
import Divider from "../../components/ui/divider/divider";
import HistorySection from "./history/history";
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <div className={styles['home-page']}>
      <Container>
        <div className={styles['home-page__wrapper']}>
          <Divider 
            position="vertical" 
            className={styles.divider_vertical}
          />
          <HistorySection />
        </div>
      </Container>
    </div>
  )
};
