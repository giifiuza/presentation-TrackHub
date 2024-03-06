import React from 'react'

export default function TechnologiesItem({ icon, title, description }) {
    return (
        <div className='flex flex-row w-full gap-3 cursor-default'>
            <div className=" w-full rounded-full bg-gradient-to-r from-[#9E2896] to-[#18837E] p-[3px]">
                <div className="flex h-full w-full rounded-full items-center justify-center p-2 bg-black ">
                    <img src={icon} />
                </div>

            </div>
            <div>
                <h1 className='font-bold'>
                    {title}
                </h1>
                <h2 className='text-sm text-[#919191]'>
                    {description}
                </h2>
            </div>
        </div>
    )
}
