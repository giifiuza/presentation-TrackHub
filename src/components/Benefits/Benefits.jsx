// Benefits.js
import React from 'react';
import BenefitItem from './BenefitItem';

export default function Benefits() {
    const topics = [
        {
            id: "01",
            title: "Organization",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            id: "02",
            title: "Privacy and security",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            id: "03",
            title: "Monitoring",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
    ];

    return (
        <div className='flex flex-col items-center justify-center mt-10 px-5 md:px-12'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16">
                {topics.map((item) => (
                    <BenefitItem key={item.id} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    );
}
