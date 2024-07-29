import React from 'react'
import JobCard from './JobCard';

const JobCardGrid = () => {
    const jobDescription = [
        { title: "UI/UX Designer", status: "Full Time", postedTime: "2 days ago", skill1: "Adobe XD", skill2: "Figma", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit facilis doloribus dolores porro provident, non illum vitae debitis ut itaque quibusdam maiores accusamus! Voluptates, fugit. Voluptatibus ducimus voluptate expedita?" },
        { title: "UI/UX Designer", status: "Full Time", postedTime: "2 days ago", skill1: "Adobe XD", skill2: "Figma", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit facilis doloribus dolores porro provident, non illum vitae debitis ut itaque quibusdam maiores accusamus! Voluptates, fugit. Voluptatibus ducimus voluptate expedita?" },
        { title: "UI/UX Designer", status: "Full Time", postedTime: "2 days ago", skill1: "Adobe XD", skill2: "Figma", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit facilis doloribus dolores porro provident, non illum vitae debitis ut itaque quibusdam maiores accusamus! Voluptates, fugit. Voluptatibus ducimus voluptate expedita?" },
        { title: "UI/UX Designer", status: "Full Time", postedTime: "2 days ago", skill1: "Adobe XD", skill2: "Figma", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit facilis doloribus dolores porro provident, non illum vitae debitis ut itaque quibusdam maiores accusamus! Voluptates, fugit. Voluptatibus ducimus voluptate expedita?" },
        { title: "UI/UX Designer", status: "Full Time", postedTime: "2 days ago", skill1: "Adobe XD", skill2: "Figma", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit facilis doloribus dolores porro provident, non illum vitae debitis ut itaque quibusdam maiores accusamus! Voluptates, fugit. Voluptatibus ducimus voluptate expedita?" },
        { title: "UI/UX Designer", status: "Full Time", postedTime: "2 days ago", skill1: "Adobe XD", skill2: "Figma", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit facilis doloribus dolores porro provident, non illum vitae debitis ut itaque quibusdam maiores accusamus! Voluptates, fugit. Voluptatibus ducimus voluptate expedita?" },
    ];

    return (
        <div className="grid grid-cols-3 gap-4 mx-24 max-w-[1920px]">
            {jobDescription.map((card, index) => (
                <JobCard key={index} card={card} />
            ))}
        </div>
    )
}

export default JobCardGrid