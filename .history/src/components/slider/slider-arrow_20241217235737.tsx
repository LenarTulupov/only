export default function SliderArrow() {
  return (
    <button 
      className={`${styles['slider-arrow']} ${styles[rotation]}`}
      onClick={onClick}
    >
      <img src='/arrow.svg' alt="arrow" />
    </button>
  )
};
