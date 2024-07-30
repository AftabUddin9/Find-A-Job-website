import React from 'react';
import SimpleCard from './SimpleCard';


const CardCategory = () => {
    const cards = [
        { title: 'Card 1', subtitle: 'Subtitle 1' },
        { title: 'Card 2', subtitle: 'Subtitle 2' },
        { title: 'Card 3', subtitle: 'Subtitle 3' },
        { title: 'Card 4', subtitle: 'Subtitle 4' },
        { title: 'Card 5', subtitle: 'Subtitle 5' },
        { title: 'Card 6', subtitle: 'Subtitle 6' },
        { title: 'Card 7', subtitle: 'Subtitle 7' },
        { title: 'Card 8', subtitle: 'Subtitle 8' },
        { title: 'Card 9', subtitle: 'Subtitle 9' },
        { title: 'Card 10', subtitle: 'Subtitle 10' },
        { title: 'Card 11', subtitle: 'Subtitle 11' },
        { title: 'Card 12', subtitle: 'Subtitle 12' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-10 mx-24 max-w-[1920px]">
            {cards.map((card, index) => (
                <SimpleCard key={index} title={card.title} subtitle={card.subtitle} />
            ))}
        </div>
    );
};

export default CardCategory;