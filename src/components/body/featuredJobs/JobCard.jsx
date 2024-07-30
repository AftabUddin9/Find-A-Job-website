import React from 'react';
import { FaBriefcase, FaClock } from 'react-icons/fa';

const JobCard = ({ card }) => {
    return (
        <div className='border bg-white rounded-xl shadow-md px-6 py-10 relative'>
            <h2 className='text-2xl font-bold mb-4'>{card.title}</h2>
            <div className='flex items-center text-gray-600 mb-4'>
                <FaBriefcase className="mr-2" /> {card.status}
                <FaClock className="ml-4 mr-2" /> {card.postedTime}
            </div>
            <p className='text-gray-700'>{card.description}</p>
            <ul className='list-disc list-inside flex flex-row gap-8 mb-24 text-gray-600'>
                <li>{card.skill1}</li>
                <li>{card.skill2}</li>
            </ul>
            <button className='bg-[#9378DE] text-white border-[1px] border-[#785fbe] rounded-full min-w-32 pt-[4px] pb-[7px] hover:bg-[#9378DE] absolute bottom-10 right-6'>
                <span className='font-semibold'>Apply</span>
            </button>
        </div>
    )
}

export default JobCard