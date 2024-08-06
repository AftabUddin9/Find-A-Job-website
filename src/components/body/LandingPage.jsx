import React from 'react'
import SearchBar from './landingPage/SearchBar'

const LandingPage = () => {
    return (
        <div>
            {/* lines */}
            <div className='flex flex-col items-center mx-20 space-y-5 my-20'>
                <h1 className='text-5xl text-[#785fbe] font-extrabold'>Find The Right Job to Make Life Better</h1>
                <p className='text-2xl text-[#989898] pb-16'>Jobs, Employment & Career Opportunities</p>
                <SearchBar />
            </div>
        </div>
    )
}

export default LandingPage