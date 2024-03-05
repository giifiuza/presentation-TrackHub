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

    // Split languages into chunks of 3 items
    const chunkedLanguages = languages.reduce((acc, _, i) => {
        if (i % 3 === 0) acc.push(languages.slice(i, i + 3));
        return acc;
    }, []);

    return (
        <div className='flex flex-col  items-center justify-center mt-[50px]'>
            <h1 className='text-white font-bold  font-inter text-center text-4xl'>Technologies</h1>
            <div className="h-2 w-[55px] mt-2 rounded bg-gradient-to-r from-[#9E2896] to-[#18837E] p-[1px]"></div>
            <div className='px-[140px]'>
                {chunkedLanguages.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex mt-12">
                        {row.map((item) => (
                            <TechnologiesItem key={item.id} icon={item.icon} title={item.title} description={item.description} />
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
}
