import React from 'react'

export default function Button({ title, color, navigate, colorHover }) {
    return (
        <button className="flex w-[90px] h-[30px] font-medium">
            <div className={`${color} items-center rounded ${colorHover}`}>
                <h1 className='text-center font-inter p-1 px-5 '>
                    {title}
                </h1>
            </div>
        </button >
    )
}
