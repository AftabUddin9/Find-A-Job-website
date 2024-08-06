import React from 'react'
import SearchBar from './landingPage/SearchBar'

const LandingPage = () => {
    return (
        <div>
            {/* lines */}
            <div className='flex flex-col items-center md:mx-20 space-y-5 my-32'>
                <h1 className='text-2xl md:text-5xl text-center text-[#785fbe] font-extrabold'>Find The Right Job to Make Life Better</h1>
                <p className='text-xl md:text-2xl text-center text-[#989898] pb-8 md:pb-16'>Jobs, Employment & Career Opportunities</p>
                <SearchBar />
            </div>
        </div>
    )
}

export default LandingPage