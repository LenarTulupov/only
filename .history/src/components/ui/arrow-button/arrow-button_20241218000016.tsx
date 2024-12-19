import styles from './arrow-button.module.scss';

interface IArrowButton {
  rotation?: 'right'
  onClick: () => void;
  slider?: boolean;
}

export default function ArrowButton({ 
  rotation, 
  onClick,
  slider }: IArrowButton ) {
  return (
    <button 
      className={`
        ${styles['arrow-button']} 
        ${styles[rotation]} 
        ${styles[slider]}`}
      onClick={onClick}
    >
      <img src='/arrow.svg' alt="arrow" />
    </button>
  )
};
