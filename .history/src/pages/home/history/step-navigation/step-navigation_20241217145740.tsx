import NavigationButtons from "./navigation-buttons/navigation-buttons";
import SliderStep from "./slider-step/slider-step";
import styles from './step-navigation.module.scss';

interface IStepNavigation {
  className?: string;
  activeButton: number;
  setActiveButton: (id: number) => void;
}

export default function StepNavigation({ 
  className }: IStepNavigation) {
  return (
    <div className={`${styles['step-navigation']} ${className || ''}`}>
      <SliderStep />
      <NavigationButtons />
    </div>
  )
};
