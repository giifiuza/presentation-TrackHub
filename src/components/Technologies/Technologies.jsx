// Technologies.js
import React from 'react';
import nextIcon from '../../assets/next.svg';
import dockerIcon from '../../assets/docker.svg';
import fastapIcon from '../../assets/fastapi.svg';
import postgresqlIcon from '../../assets/postgresql.svg';
import nodeIcon from '../../assets/nodejs.svg';
import typescript from '../../assets/typescript.svg';
import TechnologiesItem from './TechnologiesItem';

export default function Technologies() {
    const languages = [
        {
            id: "01",
            icon: nextIcon,
            title: "Next",
            description: "Next.js, a React framework, enhances web apps with server-side rendering, static site generation, and API support."
        },
        {
            id: "02",
            icon: dockerIcon,
            title: "Docker",
            description: "Docker is a platform for developing, shipping, and running applications inside lightweight, portable containers."
        },
        {
            id: "03",
            icon: fastapIcon,
            title: "FastAPI",
            description: "FastAPI is a high-performance Python framework for building APIs quickly with automatic interactive documentation."
        },
        {
            id: "04",
            icon: nodeIcon,
            title: "NodeJS",
            description: "Node.js empowers server-side JavaScript. Express.js, its popular framework, simplifies web app development."
        },
        {
            id: "05",
            icon: postgresqlIcon,
            title: "PostgreSQL",
            description: "PostgreSQL is a powerful, open-source relational database known for its reliability, rich features, and high performance.            "
        },
        {
            id: "06",
            icon: typescript,
            title: "TypeScript",
            description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, improving code quality and maintainability."
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
