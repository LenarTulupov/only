import { Swiper, SwiperSlide } from "swiper/react";
import { circleItems } from "../../../../constants/circle-items";
import SliderContent from "./slider-content/slider-content";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface IHistorySlider {
  className?: string;
  activeButton: number;
}

export default function HistorySlider({ className, activeButton }: IHistorySlider) {
  return (
    <div className={className || ''}>
      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        modules={[Navigation]}
        navigation
      >
        {circleItems.map((item) => {
          console.log(item.events.map((event) => event.year))
          return (
            
            <SwiperSlide key={item.id}>
              <SliderContent year={item.events} text={item.category} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
};
