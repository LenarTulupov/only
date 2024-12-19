import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import SliderContent from "./slider-content/slider-content";
import { IHistorySlider } from "../../../../types/history-slider.interface";
import ContentContainer from "../../../../components/ui/content-container/content-container";
import ArrowButton from "../../../../components/ui/arrow-button/arrow-button";
import styles from "./history-slider.module.scss";

export default function HistorySlider({ className, activeCategory }: IHistorySlider) {
  const [prevCategory, setPrevCategory] = useState(activeCategory);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<any>(null);

  // Анимация смены категории
  useEffect(() => {
    if (prevCategory?.id !== activeCategory?.id) {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline();

        timeline
          .to(containerRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.in",
          })
          .set(containerRef.current, { clearProps: "all" })
          .fromTo(
            containerRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          );
      });

      setPrevCategory(activeCategory);

      return () => ctx.revert();
    }
  }, [activeCategory]);

  // Обновляем состояние кнопок при смене категории или слайдов
  useEffect(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);

      swiperRef.current.on("slideChange", () => {
        setIsBeginning(swiperRef.current.isBeginning);
        setIsEnd(swiperRef.current.isEnd);
      });
    }
  }, [activeCategory]);

  return (
    <div
      ref={containerRef}
      className={`${className || ""} ${styles["history-slider"]}`}
    >
      <ContentContainer>
        <Swiper
          key={activeCategory?.id} // Переинициализируем Swiper при смене категории
          spaceBetween={80}
          slidesPerView={3.5}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {activeCategory?.events.map((event) => (
            <SwiperSlide key={event.id}>
              <SliderContent year={event.year} text={event.title} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопка "Назад" */}
        {!isBeginning && (
          <div className={styles.prev}>
            <ArrowButton
              onClick={() => swiperRef.current?.slidePrev()}
              slider
            />
          </div>
        )}

        {/* Кнопка "Вперед" */}
        {!isEnd && (
          <div className={styles.next}>
            <ArrowButton
              rotation="right"
              onClick={() => swiperRef.current?.slideNext()}
              slider
            />
          </div>
        )}
      </ContentContainer>
    </div>
  );
}
