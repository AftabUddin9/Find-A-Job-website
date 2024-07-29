import React from 'react'
import JobCardGrid from './featuredJobs/JobCardGrid'

const FeaturedJobs = () => {
    return (
        <div className='mt-20 space-y-8'>
            {/* heading & subtitle */}
            <div className='flex flex-col items-center gap-4'>
                <p className='text-4xl text-[#595959] font-bold'>Featured Jobs of The Day</p>
                <p className='text-2xl text-[#989898]'>Search and connect with the right jobs faster</p>
            </div>
            {/* categories slider */}
            <div className='max-w-full mx-20 items-center'>
                {/* slider */}
                <JobCardGrid />
            </div>
        </div>
    )
}

export default FeaturedJobs