import React from 'react';
import banner01 from '../../assets/banner01.png';

const ExploringBanner = () => {
    return (
        <div className="relative bg-gradient-to-r from-[#00b1b1] to-[#12cfa6] text-white flex items-center justify-between p-8 w-full max-w-[1230px] my-32 mx-auto rounded-tl-xl">
            <div >
                <div className="flex flex-col space-y-2">
                    <h1 className="text-2xl font-bold">Climb The Career Ladder</h1>
                    <p className="text-lg">Naukri 360's tools and resources help you take your career to the next level</p>
                </div>
                <div className='mt-8'>
                    <button className="bg-[#275df5] text-white  py-2 px-4 w-36 rounded-full font-semibold hover:bg-gray-200 transition">
                        Start Exploring
                    </button>
                </div>
            </div>

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <img
                    src={banner01}
                    alt="Banner"
                    className="w-[430px] h-[420px] rounded-full border-2 border-[#afcff8] shadow-lg"
                />
            </div>
        </div>
    );
};

export default ExploringBanner;
