import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IHistorySlider } from "../../../../types/history-slider.interface";
import SliderContent from "./slider-content/slider-content";
import ArrowButton from "../../../../components/ui/arrow-button/arrow-button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./history-slider.module.scss";

export default function HistorySlider({ className, activeCategory }: IHistorySlider) {
  const [prevCategory, setPrevCategory] = useState(activeCategory);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
  }, [activeCategory, windowWidth]);

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
      <Swiper
        key={windowWidth}
        spaceBetween={40}
        slidesPerView={1.5}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1200: {
            spaceBetween: 80,
            slidesPerView: 3.5,
            pagination: false
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 25,
            pagination: false
          },
          480: {
            pagination: false 
          },
          0: {
            pagination: { clickable: true }
          }
        }}
      >
        <div className={styles.wrapper}>

       

        {activeCategory?.events.map((event) => (
          <SwiperSlide key={event.id}>
            <SliderContent year={event.year} text={event.title} />
          </SwiperSlide>
        ))}
         </div>
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
      </Swiper>

    </div>
  );
}
