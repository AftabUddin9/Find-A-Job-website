import React, { useRef } from 'react';
import CardCategory from './CardCategory';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';

const CardSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative mx-16">
            <Swiper
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                    // Explicitly set the navigation buttons after swiper initialization
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.update();
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="mx-5 py-8">
                        <CardCategory />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mx-5 py-8">
                        <CardCategory />
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
                ref={prevRef}
                className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10 border-[1px] p-7 border-[#785fbe] flex items-center justify-center w-10 h-10 text-gray-500 rounded-full cursor-pointer shadow-md"
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div
                ref={nextRef}
                className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 border-[1px] p-7 border-[#785fbe] flex items-center justify-center w-10 h-10 text-gray-500 rounded-full cursor-pointer shadow-md"
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
};

export default CardSlider;
