import styles from './arrow-button.module.scss';

interface IArrowButton {
  rotation?: 'right'
  onClick: () => void;
}

export default function ArrowButton({rotation}: IArrowButton ) {
  return (
    <button 
      className={`${styles['arrow-button']} ${styles[rotation]}`}
      onClick={onClick}
    >
      <img src='/arrow.svg' alt="arrow" />
    </button>
  )
};
