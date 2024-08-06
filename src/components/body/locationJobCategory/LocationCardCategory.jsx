import React from 'react';
import SimpleCard from '../jobCategory/SimpleCard';



const LocationCardCategory = () => {
    const cards = [
        { title: 'Dhaka', subtitle: '10K+ Jobs' },
        { title: 'Rajshahi', subtitle: '540 Jobs' },
        { title: 'Chattogram', subtitle: '9K+ jobs' },
        { title: 'Barishal', subtitle: '430 Jobs' },
        { title: 'Khulna', subtitle: '350 Jobs' },
        { title: 'Sylhet', subtitle: '380 Jobs' },
    ];

    return (
        <div className="grid grid-cols-1 border rounded-2xl shadow-lg md:grid-cols-2 gap-4 p-10 max-w-[1920px]">
            {cards.map((card, index) => (
                <div className='hover:scale-105'>
                    <SimpleCard key={index} title={card.title} subtitle={card.subtitle} />
                </div>

            ))}
        </div>
    );
};

export default LocationCardCategory;