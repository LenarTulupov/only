import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (prevCategory?.id !== activeCategory?.id) {
      if (containerRef.current) {
        containerRef.current.classList.add(styles["fade-out"]);
        
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.classList.remove(styles["fade-out"]);
            setPrevCategory(activeCategory);
            containerRef.current.classList.add(styles["fade-in"]);

            setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.classList.remove(styles["fade-in"]);
              }
            }, 500);
          }
        }, 500); 
      }
    }
  }, [activeCategory, prevCategory]);

  useEffect(() => {
    if (swiperRef.current) {
      const { navigation } = swiperRef.current.params;
      
      if (navigation && typeof navigation !== 'boolean') {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;

        swiperRef.current.navigation.destroy();
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }

      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);

      swiperRef.current.on("slideChange", () => {
        setIsBeginning(swiperRef.current.isBeginning);
        setIsEnd(swiperRef.current.isEnd);
      });

      return () => {
        swiperRef.current?.off("slideChange");
      };
    }
  }, [activeCategory]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0);
    }
  }, [activeCategory]);

  return (
    <div
      ref={containerRef}
      className={`${className || ""} ${styles["history-slider"]}`}
    >
      <ContentContainer>
        <Swiper
          spaceBetween={80}
          slidesPerView={2.5}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            900: {
              slidesPerView: 3.5
            },
            768: {
              slidesPerView: 3.5
            },
          }}
        >
          {activeCategory?.events.map((event) => (
            <SwiperSlide key={event.id}>
              <SliderContent year={event.year} text={event.title} />
            </SwiperSlide>
          ))}
        </Swiper>

        {!isBeginning && (
          <div ref={prevRef} className={styles.prev}>
            <ArrowButton
              onClick={() => swiperRef.current?.slidePrev()} 
              slider
              disabled={isBeginning}
            />
          </div>
        )}
        {!isEnd && (
          <div ref={nextRef} className={styles.next}>
            <ArrowButton
              rotation="right"
              onClick={() => swiperRef.current?.slideNext()}
              slider
              disabled={isEnd}
            />
          </div>
        )}
      </ContentContainer>
    </div>
  );
}
