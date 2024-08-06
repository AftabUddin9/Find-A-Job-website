import React from 'react'

const SimpleCard = ({ title, subtitle }) => {
    return (
        <div className="border-[0.5px] border-[#e5dff7] bg-white  hover:shadow-violet rounded-2xl p-3 md:p-6">
            <h2 className="text-xl md:text-3xl font-semibold">{title}</h2>
            <p className="text-sm md:text-base text-gray-700">{subtitle}</p>
        </div>
    );
};

export default SimpleCard;