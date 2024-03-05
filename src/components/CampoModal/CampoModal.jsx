import React from 'react'

export default function CampoModal({title}) {
  return (
    <div>
        <h1 className='text-bold text-black text-[15px] '>
            {title}<span className='font-thin text-slate-400'>*</span>
        </h1>
      <input className='rounded h-[30px] mt-2 w-full border border-slate-300'>
      
      </input>
    </div>
  )
}
