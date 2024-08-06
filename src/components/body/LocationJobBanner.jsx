import React from 'react'
import banner02 from '../../assets/banner02.png'
import LocationCardCategory from './locationJobCategory/LocationCardCategory'
import LocationCardSlider from './locationJobCategory/LocationCardSlider'

const LocationJobBanner = () => {
    return (
        <div className='flex flex-row mb-20 mx-20 max-w-[1230px]'>
            <div className='w-1/2'>
                {/* picture */}
                <img src={banner02} alt='Banner' className='w-[432px] h-[328px]' />
                <div className="flex flex-col space-y-2">
                    <h1 className="text-3xl font-bold text-[#6951AD]">Discover jobs across your location</h1>
                    <p className="text-xl text-[#717171]">Select a role and we'll show you relevant jobs for it!</p>
                </div>
            </div>
            <div className='w-1/2'>
                {/* slider location */}
                <LocationCardSlider />
            </div>
        </div>

    )
}

export default LocationJobBanner