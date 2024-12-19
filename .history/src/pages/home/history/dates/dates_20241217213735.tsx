import { useEffect, useState } from 'react';
import Title from '../../../../components/ui/title/title';
import styles from './dates.module.scss';

interface IDates {
  className?: string;
  firstDate: string;
  lastDate: string;
}

export default function Dates({ className, firstDate, lastDate }: IDates) {
  const [currentFirstDate, setCurrentFirstDate] = useState(Number(firstDate));
  const [currentLastDate, setCurrentLastDate] = useState(Number(lastDate));

  useEffect(() => {
    const animateNumber = (
      from: number,
      to: number,
      setNumber: React.Dispatch<React.SetStateAction<number>>
    ) => {
      const stepTime = 20;
      const steps = 50;
      const delta = (to - from) / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep += 1;
        const nextValue = from + delta * currentStep;
        setNumber(Math.round(nextValue));

        if (currentStep >= steps) {
          clearInterval(interval);
          setNumber(to);
        }
      }, stepTime);
    };

    animateNumber(Number(currentFirstDate), Number(firstDate), setCurrentFirstDate);
    animateNumber(Number(currentLastDate), Number(lastDate), setCurrentLastDate);
  }, [firstDate, lastDate]);

  return (
    <div className={`${styles.dates} ${className || ''}`}>
      <Title color="blue" size="big">{currentFirstDate}</Title>
      <Title color="pink" size="big">{currentLastDate}</Title>
    </div>
  );
}
