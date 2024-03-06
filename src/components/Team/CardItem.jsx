import React from 'react'
import diegoPhoto from '../../assets/diego.jfif'
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'

export default function CardItem({name, position, image, github, linkedin}) {
  return (
    <div className='flex  mt-8 items-center flex-col border-[1px] border-slate-600 rounded p-4 h-[300px] w-[250px]'>
        <div className={`${image} mb-4 bg-cover rounded w-full h-[20rem]`}></div>
      {/* <img src={diegoPhoto} className='h-full w-full rounded' /> */}
      <h1 className='font-inter font-bold  text-lg'>{name}</h1>
      <h2 className='font-medium text-sm text-slate-500'>{position}</h2>
      <div className='flex flex-row mt-3'>
        <a href={github}>
            <img src={githubIcon} className='mt-[3px] w-[22px] h-[20px]' />
        </a>
        <a href={linkedin}>
            <img src={linkedinIcon} className='w-[28px] h-[28px]'/>
        </a>
      </div>
    </div>
  )
}
