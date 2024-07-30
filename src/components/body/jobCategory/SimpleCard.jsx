import React from 'react'

const SimpleCard = ({ title, subtitle }) => {
    return (
        <div className="border-[0.5px] border-[#e5dff7] bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-gray-700">{subtitle}</p>
        </div>
    );
};

export default SimpleCard;