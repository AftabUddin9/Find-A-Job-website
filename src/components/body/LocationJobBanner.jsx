import React from 'react'
import banner02 from '../../assets/banner02.png'
import LocationCardSlider from './locationJobCategory/LocationCardSlider'

const LocationJobBanner = () => {
    return (
        <div className='flex flex-col md:flex-row mb-20 md:mx-24 max-w-screen-2xl'>
            <div className='md:w-1/2'>
                {/* picture */}
                <img src={banner02} alt='Banner' className='w-[432px] h-[328px]' />
                <div className="flex flex-col space-y-2">
                    <h1 className="text-2xl md:text-3xl text-center font-bold text-[#6951AD]">Discover jobs across your location</h1>
                    <p className="text-lg md:text-xl text-center text-[#717171]">Select a role and we'll show you relevant jobs for it!</p>
                </div>
            </div>
            <div className='md:w-1/2'>
                {/* slider location */}
                <LocationCardSlider />
            </div>
        </div>

    )
}

export default LocationJobBanner