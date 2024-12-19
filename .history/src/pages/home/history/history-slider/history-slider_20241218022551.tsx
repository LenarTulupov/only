import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import SliderContent from "./slider-content/slider-content";
import { IHistorySlider } from "../../../../types/history-slider.interface";
import styles from "./history-slider.module.scss";
import ContentContainer from "../../../../components/ui/content-container/content-container";
import ArrowButton from "../../../../components/ui/arrow-button/arrow-button";  // Импортируем ваш компонент

export default function HistorySlider({ className, activeCategory }: IHistorySlider) {
  const [prevCategory, setPrevCategory] = useState(activeCategory);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

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

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevRef, nextRef]);

  return (
    <div
      ref={containerRef}
      className={`${className || ""} ${styles['history-slider']}`}
    >
      <ContentContainer>
        <Swiper
          spaceBetween={80}
          slidesPerView={3.5}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => swiperRef.current}
        >
          {activeCategory?.events.map((event) => (
            <SwiperSlide key={event.id}>
              <SliderContent year={event.year} text={event.title} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={prevRef} className={styles.prev}>
          <ArrowButton 
            onClick={() => prevRef.current?.click()} 
            slider
          />
        </div>
        <div ref={nextRef} className={styles.next}>
          <ArrowButton
            rotation="right"
            onClick={() => nextRef.current?.click()}
            slider
          />
        </div>
      </ContentContainer>
    </div>
  );
}
