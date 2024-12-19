import { useEffect, useRef, useState } from "react";
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
  const [prevCategory, setPrevCategory] = useState(activeCategory);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prevCategory?.id !== activeCategory?.id) {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline();
        
        // Сначала анимируем исчезновение старой категории
        timeline
          .to(containerRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.in",
          })
          .set(containerRef.current, { clearProps: "all" })  // Очищаем все стили после исчезновения
          
          // После того как старая категория исчезнет, показываем новую
          .fromTo(
            containerRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          );
      });

      // Обновляем предшествующую категорию
      setPrevCategory(activeCategory);

      return () => ctx.revert(); // Очищаем контекст анимации при размонтировании
    }
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
