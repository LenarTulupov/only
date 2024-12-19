import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./history-slider.module.scss";
import SliderContent from "./slider-content/slider-content";

interface IHistorySlider {
  className?: string;
  activeCategory: {
    id: number;
    category: string;
    events: {
      id: number;
      year: string;
      title: string;
    }[];
  };
}

export default function HistorySlider({ className, activeCategory }: IHistorySlider) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Анимация появления новых данных
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    });

    return () => ctx.revert(); // Сбросить контекст GSAP перед размонтированием
  }, [activeCategory]);

  return (
    <div ref={containerRef} className={`${className || ""} ${styles.historySlider}`}>
      <Swiper spaceBetween={80} slidesPerView={3} modules={[Navigation]} navigation>
        {activeCategory?.events.map((event) => (
          <SwiperSlide key={event.id}>
            <SliderContent year={event.year} text={event.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
