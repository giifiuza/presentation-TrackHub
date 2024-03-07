// TechnologiesItem.js
import React from 'react';

export default function TechnologiesItem({ icon, title, description }) {
    return (
        <div className='flex items-center bg-black rounded-lg shadow-md p-4'>
            <div className='relative flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#9E2896] to-[#18837E] rounded-full mr-4'>
                <img src={icon} alt={title} className='w-10 h-10 m-3' />
            </div>
            <div>
                <h1 className='text-white font-bold text-xl mb-2'>{title}</h1>
                <p className='text-gray-300 text-sm'>{description}</p>
            </div>
        </div>
    );
}
