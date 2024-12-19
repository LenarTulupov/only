import styles from './arrow-button.module.scss';

interface IArrowButton {
  rotation?: 'left' | 'right'
  onClick: () => void;
  slider?: boolean;
}

export default function ArrowButton({
  rotation,
  onClick,
  slider = false }: IArrowButton) {
  return (
    <button
      className={`
        ${styles['arrow-button']} 
        ${styles[rotation]} 
        ${slider ? styles[эarrow-button_sliderэ] : ''}
      `}
      onClick={onClick}
    >
      <img src='/arrow.svg' alt="arrow" />
    </button>
  )
};