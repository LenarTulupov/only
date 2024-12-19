import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import SliderContent from "./slider-content/slider-content";
import { IHistorySlider } from "../../../../types/history-slider.interface";
import styles from "./history-slider.module.scss";
import Container from "../../../../components/ui/container/container";

export default function HistorySlider({ className, activeCategory }: IHistorySlider) {
  const [prevCategory, setPrevCategory] = useState(activeCategory);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div
      ref={containerRef}
      className={`${className || ""} ${styles['history-slider']}`}
    >
      <Container>

        <Swiper
          spaceBetween={80}
          slidesPerView={3}
          modules={[Navigation]}
          navigation
        >
          {activeCategory?.events.map((event) => (
            <SwiperSlide key={event.id}>
              <SliderContent year={event.year} text={event.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
