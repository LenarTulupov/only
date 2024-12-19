import { useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { gsap } from 'gsap';
import { circleItems } from '../../../../constants/circle-items';
import styles from './circle.module.scss';

interface ICircle {
  className?: string;
  activeButton: number;
  setActiveButton: Dispatch<SetStateAction<number>>;
}

export default function Circle({
  className,
  activeButton,
  setActiveButton,
}: ICircle) {
  const circleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement[]>([]);

  const handleActiveButton = (btnId: number) => {
    setActiveButton(btnId);
  };

  useEffect(() => {
    const updateRotation = () => {
      const isLargeScreen = window.innerWidth >= 992;
      const baseTranslateX = isLargeScreen ? 265 : 230; // Зависимость от ширины экрана
      const rotationAngle = (1 - activeButton) * 60;

      // Анимация круга
      gsap.to(circleRef.current, {
        rotate: rotationAngle,
        duration: 0.5,
        ease: 'power2.out',
      });

      // Анимация кнопок
      buttonsRef.current.forEach((btn, index) => {
        const btnRotation = (index + 1 - activeButton) * 60;
        gsap.to(btn, {
          transform: `rotate(${btnRotation}deg) translateX(${baseTranslateX}px) rotate(${-btnRotation}deg)`,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    };

    updateRotation();
    window.addEventListener('resize', updateRotation);

    return () => window.removeEventListener('resize', updateRotation);
  }, [activeButton]);

  return (
    <div ref={circleRef} className={`${styles.circle} ${className || ''}`}>
      {circleItems.map((item, index) => {
        const btnId = index + 1;
        return (
          <div
            key={btnId}
            ref={(el) => (buttonsRef.current[index] = el!)}
            className={`
              ${styles[`circle__btn-${btnId}`]} 
              ${styles.circle__btn} 
              ${activeButton === btnId ? styles.active : ''}
            `}
            onClick={() => handleActiveButton(btnId)}
          >
            {btnId}
            <span
              className={`
                ${styles['sub-title']} 
                ${activeButton === btnId ? styles.active : ''}
              `}
            >
              {item.category}
            </span>
          </div>
        );
      })}
    </div>
  );
}
