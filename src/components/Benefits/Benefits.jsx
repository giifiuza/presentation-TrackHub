import React from 'react'
import BenefitItem from './BenefitItem'

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
    ]

    return (
        <div className=''>
            <div className="flex flex-row items-center justify-center px-12 content-center  gap-16 md:flex">
                {topics.map((item) => (
                    <BenefitItem key={item.id} title={item.title} description={item.description} />
                ))}
            </div>

        </div>
    )
}
