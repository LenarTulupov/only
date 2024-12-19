import styles from './arrow-button.module.scss';

interface IArrowButton {
  rotation?: 'right'
  handleNext: () => void;
  handlePrev: () => void;
}

export default function ArrowButton({rotation}: IArrowButton ) {
  return (
    <button className={`${styles['arrow-button']} ${styles[rotation]}`}>
      <img src='/arrow.svg' alt="arrow" />
    </button>
  )
};
