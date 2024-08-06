import React from 'react'
import CardSlider from './jobCategory/CardSlider'
import CategoryTags from './jobCategory/CategoryTags'

const JobCategory = () => {
    return (
        <div className='space-y-6'>
            {/* heading & subtitle */}
            <div className='flex flex-col items-center gap-4'>
                <p className='text-4xl text-[#595959] font-bold'>Browse Jobs by Category</p>
                <p className='text-2xl text-[#989898]'>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
            </div>
            {/* category tags */}
            <CategoryTags />
            {/* categories slider */}
            <div className=''>
                <CardSlider />
            </div>
        </div>
    )
}

export default JobCategory