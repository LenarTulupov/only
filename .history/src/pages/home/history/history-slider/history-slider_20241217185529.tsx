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
  const activeCategory = circleItems.find((item) => item.id === activeButton)
  return (
    <div className={className || ''}>
      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        modules={[Navigation]}
        navigation
      >
        {activeCategory?.events.map(())}
            <SwiperSlide key={item.id}>
              <SliderContent year={event.year} text={event.title} />
            </SwiperSlide>
      </Swiper>
    </div>
  )
};
