// Technologies.js
import React from 'react';
import reactIcon from '../../assets/react.svg';
import dockerIcon from '../../assets/docker.svg';
import fastapIcon from '../../assets/fastapi.svg';
import mysqlIcon from '../../assets/mysql.svg';
import nodeIcon from '../../assets/nodejs.svg';
import typescript from '../../assets/typescript.svg';
import TechnologiesItem from './TechnologiesItem';

export default function Technologies() {
    const languages = [
        {
            id: "01",
            icon: reactIcon,
            title: "React",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            id: "02",
            icon: dockerIcon,
            title: "Docker",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            id: "03",
            icon: fastapIcon,
            title: "FastAPI",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            id: "04",
            icon: nodeIcon,
            title: "NodeJS",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            id: "05",
            icon: mysqlIcon,
            title: "MySQL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            id: "06",
            icon: typescript,
            title: "TypeScript",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
    ];

    return (
        <div className='flex flex-col items-center justify-center mt-8 md:mt-[50px]'>
            <h1 className='text-white font-bold font-inter text-center text-4xl'>Technologies</h1>
            <div className="h-2 w-24 mt-2 rounded bg-gradient-to-r from-[#9E2896] to-[#18837E] mx-auto md:mx-0"></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-8 px-4 md:px-[140px]'>
                {languages.map((language) => (
                    <TechnologiesItem key={language.id} icon={language.icon} title={language.title} description={language.description} />
                ))}
            </div>
        </div>
    );
}
