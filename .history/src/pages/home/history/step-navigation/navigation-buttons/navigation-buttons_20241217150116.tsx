import ArrowButton from '../../../../../components/ui/arrow-button/arrow-button';
import styles from './navigation-buttons.module.scss';

interface INavigationButtins

export default function NavigationButtons() {
  return (
    <div className={styles['navigation-buttons']}>
      <ArrowButton />
      <ArrowButton rotation='right' />
    </div>
  )
};
