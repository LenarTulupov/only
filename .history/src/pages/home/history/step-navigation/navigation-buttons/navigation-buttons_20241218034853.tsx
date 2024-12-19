import ArrowButton from '../../../../../components/ui/arrow-button/arrow-button';
import styles from './navigation-buttons.module.scss';

interface INavigationButtons {
  handleNext: () => void;
  handlePrev: () => void;
  isBeginning: boolean;
  isEnd: boolean;
}

export default function NavigationButtons({ handleNext, handlePrev, isBeginning, isEnd }: INavigationButtons) {
  return (
    <div className={styles['navigation-buttons']}>
      <ArrowButton 
        onClick={handlePrev} 
        disabled={isBeginning} 
      />
      <ArrowButton 
        rotation='right' 
        onClick={handleNext} 
        className={isEnd ? styles.disabled : ''} 
        disabled={isEnd} 
      />
    </div>
  );
};
