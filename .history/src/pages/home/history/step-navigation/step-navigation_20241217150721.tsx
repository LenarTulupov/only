import { Dispatch } from "react";
import NavigationButtons from "./navigation-buttons/navigation-buttons";
import SliderStep from "./slider-step/slider-step";
import styles from './step-navigation.module.scss';

interface IStepNavigation {
  className?: string;
  activeButton: number;
  setActiveButton: Dispatch => void;
}

export default function StepNavigation({ 
  className,
  activeButton,
  setActiveButton }: IStepNavigation) {

    const handleNext = () => {
      setActiveButton((p: number) => (p < 6 ? p + 1 : 1))
    }

    const handlePrev = () => {
      setActiveButton((p: number) => (p > 1 ? p - 1 : 6))
    }
  return (
    <div className={`${styles['step-navigation']} ${className || ''}`}>
      <SliderStep activeButton={activeButton} />
      <NavigationButtons 
        handleNext={handleNext} 
        handlePrev={handlePrev}
      />
    </div>
  )
};
