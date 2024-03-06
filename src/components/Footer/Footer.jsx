import React from 'react'
import { FaGithub } from "react-icons/fa";
import logoBosch from '../../assets/logoBosch.svg'


export default function Footer() {
  return (
    <footer className="w-full text-white font-inter px-6 mt-[100px]">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-[#939393] text-center md:justify-between">
        <img src={logoBosch} alt="logo-ct" className="w-[150px] h-auto" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-medium font-inter transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About
            </div>
          </li>
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-medium transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Documentation
            </div>
          </li>
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-medium transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Team
            </div>
          </li>
          <li>
            <a href='https://github.com/Track-Hub'>
              <FaGithub color='white' size={24} className='hover:color-[#18837E]' />
            </a>


          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center content-center">
        <hr className="my-4 w-full border-[#939393]" />
      </div>

      <div color="blue-gray" className="text-center text-[#939393] font-normal">
        &copy; 2024 TrackHub. All Rights Reserved.
      </div>
    </footer>

  )
}


