import ArrowButton from '../../../../../components/ui/arrow-button/arrow-button';
import styles from './navigation-buttons.module.scss';

interface INavigationButtons {
  handleNext: () => void;
  handlePrev: () => void;
}

export default function NavigationButtons({ handleNext, handlePrev}: INavigationButtons) {
  return (
    <div className={styles['navigation-buttons']}>
      <ArrowButton handleNext={handleNext}/>
      <ArrowButton rotation='right' handlePrev/>
    </div>
  )
};
