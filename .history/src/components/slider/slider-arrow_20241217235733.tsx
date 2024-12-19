export default function SliderArrow() {
  return (
    <button 
      className={`${styles['slider-button']} ${styles[rotation]}`}
      onClick={onClick}
    >
      <img src='/arrow.svg' alt="arrow" />
    </button>
  )
};
