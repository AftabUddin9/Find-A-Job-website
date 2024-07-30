import React from 'react';
import banner01 from '../../assets/banner01.png';

const ExploringBanner = () => {
    return (
        <div className="relative flex mr-20">
            <div className="bg-gradient-to-r from-[#00b1b1] to-[#12cfa6] text-white flex flex-col justify-between p-8 w-5/6 my-32 mx-auto rounded-tl-xl relative z-0">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-4xl font-bold">Climb The Career Ladder</h1>
                    <p className="text-lg">Naukri 360's tools and resources help you take your career to the next level</p>
                </div>
                <div className="mt-8">
                    <button className="bg-[#275df5] text-white py-2 px-4 w-36 rounded-full font-semibold hover:bg-gray-200 transition">
                        Start Exploring
                    </button>
                </div>
            </div>

            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
                <img
                    src={banner01}
                    alt="Banner"
                    className="w-[360px] h-[350px] rounded-full border-2 border-[#afcff8] shadow-lg"
                />
            </div>
        </div>
    );
};

export default ExploringBanner;
