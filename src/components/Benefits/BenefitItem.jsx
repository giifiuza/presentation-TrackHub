import React from 'react'

function BenefitItem({ title, description }) {
    return (

        <div className='flex flex-col m-4 text-[15px] items-center  font-semibold '>
            <h1 className='text-white text-center mb-3'>{title}</h1>
            <h2 className='text-[#939393] text-justify '>{description}</h2>
        </div>

    )
}

export default BenefitItem