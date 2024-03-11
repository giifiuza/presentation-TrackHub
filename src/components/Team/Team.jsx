import React from 'react'
import CardItem from './CardItem'

export default function Team() {
    const member = [
        {
            id:"01",
            image:"bg-[url('/image/diego.jpg')]",
            name:"Diego Alencar",
            position: "Fullstack Developer",
            github: "https://github.com/giifiuza/",
            linkedin: "https://www.linkedin.com/in/diego-jacober-0a6b5b1b5/"
        },
        {
            id:"02",
            image:"bg-[url('/image/esther.jfif')]",
            name:"Esther da Cunha",
            position: "FrontEnd Developer",
            github: "https://github.com/EstherDaCunha",
            linkedin: "https://www.linkedin.com/in/esther-cunha-8a136b216/"
        },
        {
            id:"03",
            image:"bg-[url('/image/giovanna.jfif')]",
            name:"Giovanna Fiuza",
            position: "BackEnd Developer",
            github: "https://github.com/giifiuza/",
            linkedin: "https://www.linkedin.com/in/gifiuzaa/"
        },
        {
            id:"04",
            image:"bg-[url('/image/nicole.jfif')]",
            name:"Nicole Siqueira",
            position: "BackEnd Developer",
            github: "https://github.com/nisiq",
            linkedin: "https://www.linkedin.com/in/nicole-siqueira0101/"
        },
    ]
    return (
        <div className='flex flex-col  items-center justify-center mt-[50px] p-8'>
            <h1 className='text-white font-bold  font-inter text-center text-4xl '>Team</h1>
            <div className="h-2 w-[55px] mt-2 rounded bg-gradient-to-r from-[#9E2896] to-[#18837E] p-[1px]"></div>
            <div className=" content-center gap-5 md:flex">
                    {member.map((item) => (
                        <CardItem key={item.id} image={item.image} name={item.name} position={item.position} github={item.github} linkedin={item.linkedin} />
                    ))}
                </div>
        </div>
    )
}
