import styles from './arrow-button.module.scss';

interface IArrowButton {
  rotation?: 'left' | 'right'
  onClick?: () => void;
  slider?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function ArrowButton({
  rotation,
  onClick,
  slider = false,
  disabled = false}: IArrowButton) {
  return (
    <button
      className={`
        ${styles['arrow-button']} 
        ${styles[rotation]} 
        ${slider ? styles['arrow-button_slider'] : ''}
        ${className || ''}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" stroke-width="2" />
      </svg>
    </button>
  )
};
