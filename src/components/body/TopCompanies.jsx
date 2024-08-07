import React from 'react'
import CompanyCardSlider from './topCompanies/CompanyCardSlider'

const TopCompanies = () => {
    return (
        <div className='space-y-8'>
            {/* heading & subtitle */}
            <div className='flex flex-col items-center gap-4'>
                <p className='text-2xl md:text-4xl text-[#595959] font-bold'>Top Hiring Companies</p>
                <p className='text-lg md:text-2xl text-center text-[#989898]'>Find the right compay  that’s perfect for you.</p>
            </div>
            {/* categories slider */}
            <div className='md:mx-20'>
                {/* slider */}
                <CompanyCardSlider />
            </div>
        </div>
    )
}

export default TopCompanies