import ArrowButton from '../../../../../components/ui/arrow-button/arrow-button';
import styles from './navigation-buttons.module.scss';

interface INavigationButtons {
  handleNext: () => void;
  handlePrev: ()
}

export default function NavigationButtons() {
  return (
    <div className={styles['navigation-buttons']}>
      <ArrowButton />
      <ArrowButton rotation='right' />
    </div>
  )
};
