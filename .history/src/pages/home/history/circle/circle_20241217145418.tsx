import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { circleItems } from '../../../../constants/circle-items';
import styles from './circle.module.scss';

interface ICircle {
  className?: string;
  activeButton: number;
  setActiveButton
}

export default function Circle({ className }: ICircle) {
  const circleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement[]>([]);

  const handleActiveButton = (btnId: number) => {
    setActiveButton(btnId);
  };

  useEffect(() => {
    const rotationAngle = (1 - activeButton) * 60;
    gsap.to(circleRef.current, {
      rotate: rotationAngle,
      duration: 0.5,
      ease: 'power2.out',
    });

    buttonsRef.current.forEach((btn) => {
      let buttonRotation = 0;

      switch(activeButton) {
        case 2:
          buttonRotation = 60;
          break;
        case 3:
          buttonRotation = 120;
          break;
        case 4:
          buttonRotation = 180;
          break;
        case 5:
          buttonRotation = 240;
          break;
        case 6:
          buttonRotation = 300;
          break;
        default:
          buttonRotation = 0;
          break;
      }
        
      gsap.to(btn, {
        rotate: buttonRotation,
        duration: 0.5,
        ease: 'power2.out',
      });
    });
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
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
  );
}