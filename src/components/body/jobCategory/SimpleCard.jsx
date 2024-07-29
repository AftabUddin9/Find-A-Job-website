import React from 'react'

const SimpleCard = ({ title, subtitle }) => {
    return (
        <div className="border bg-white shadow-md rounded-2xl p-4 m-2">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-700">{subtitle}</p>
        </div>
    );
};

export default SimpleCard;