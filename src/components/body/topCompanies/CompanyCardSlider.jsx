import React, { useRef } from 'react';
import CompanyCard from './CompanyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CompanyCardSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative">
            <Swiper
                slidesPerView={1}
                spaceBetween={80}
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
                className="mySwiper mx-6"
            >
                <SwiperSlide>
                    <div className="py-8">
                        <CompanyCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-8">
                        <CompanyCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-8">
                        <CompanyCard />
                    </div>
                </SwiperSlide>
                {/* Add more SwiperSlide components as needed */}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
                ref={prevRef}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 border-[1px] bg-white rounded-full cursor-pointer"
            >
                <svg
                    className={`w-4 h-4 fill-current`}
                    viewBox="0 0 20 20"
                >
                    <path d="M12.707 14.707a1 1 0 010-1.414L8.414 10l4.293-3.293a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414 0z" />
                </svg>
            </div>
            <div
                ref={nextRef}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 border-[1px] bg-white rounded-full cursor-pointer"
            >
                <svg
                    className={`w-4 h-4 fill-current`}
                    viewBox="0 0 20 20"
                >
                    <path d="M7.293 14.707a1 1 0 010-1.414L11.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
            </div>
        </div>
    );
};

export default CompanyCardSlider;
