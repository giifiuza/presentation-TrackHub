import React from 'react'

function HeaderItem({name, description}) {
    return (
        <a href='/'>
            <div className='flex items-center gap-5 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mt-2'>
                
                <h2 className='text-white'>{name}</h2>
            </div>
        </a>
    )
}

export default HeaderItem