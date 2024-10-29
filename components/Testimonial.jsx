import { useCallback, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ImQuotesLeft } from "react-icons/im";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import AnimatedText from "./AnimatedText";

const sliders = [
  {
    img: "/assets/testimonial/img-1.png",
    name: "Ema Johnson",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas ratione labore."
  },
  {
    img: "/assets/testimonial/img-2.png",
    name: "Sophia Martinez",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas ratione labore."
  },
  {
    img: "/assets/testimonial/img-3.png",
    name: "Jems Smith",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas ratione labore."
  },
  {
    img: "/assets/testimonial/img-4.png",
    name: "Olivia Williams",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas ratione labore."
  },
  {
    img: "/assets/testimonial/img-5.png",
    name: "Isabella Brown",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas ratione labore."
  },
  {
    img: "/assets/testimonial/img-6.png",
    name: "Liam Davis",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas ratione labore."
  },
]

export default function TestimonialBtns() {
  const [swiperRef, setSwiperRef] = useState(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const handlePreviews = useCallback(() =>{
    swiperRef?.sliderPrev();
  }, [swiperRef]);

  const handleNext = useCallback(() =>{
    swiperRef?.sliderNext();
  }, [swiperRef]);

  return (
    <div className="py-24 overflow-hidden">
      <div className="container mx-auto">
        <AnimatedText text="What Client Says" textStyle="h2 mb-[30px] xl:mb-[60px] text-center" />
        <div className="flex flex-col lg:flex-row gap-12">
          {/** slider Info */}
            <div className="w-max xl:w-[600px] flex flex-col justify-center items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
              <ImQuotesLeft className="text-9xl text-accent/20 leading-none mb-4" />
              <h3 className="h3 mb-2">{sliders[activeSlide].name}</h3>
              <p className="mb-8 max-w-[360px]">{sliders[activeSlide].message}</p>
              <div className="flex gap-3">
                <button onClick={handlePreviews} className="text-2xl bg-accent w-[48px] h-[48px] flex items-center justify-center hover:bg-accent-hover transition-all duration-500 text-white rounded-full">
                  <FiArrowLeft />
                </button>
                
                <button onClick={handleNext} className="text-2xl bg-accent w-[48px] h-[48px] flex items-center justify-center hover:bg-accent-hover transition-all duration-500 text-white rounded-full">
                  <FiArrowRight />
                </button>
              </div>
            </div>
          {/** swiper slider */}
          <Swiper
           slidesPerView={1}
           spaceBetween={30}
           loop={true}
           onSwiper={swiperRef}
           breakpoints={{
            640: {slidesPerView: 1},
            768: {slidesPerView: 2},
            1024: {slidesPerView: 3},
            1280: {slidesPerView: 4},
           }}
           onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
           modules={[Autoplay]}
           autoplay={{
            delay: 3000,
            disableOnInteraction: false
           }}
           className="w-full h-[400px] xl:h-[500px]">
            {sliders.map((slide, index) => {
              return <SwiperSlide key={index} className="w-full select-none">
                <div className="w-full h-full flex items-end">
                  <div className={`${activeSlide === index ? 'h-full' : 'h-[240px]' } flex items-end rounded-2xl overflow-hidden transition-all duration-500 relative w-full`}>
                      <Image src={slide.img} fill quality={100} className=" object-cover object-center" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
