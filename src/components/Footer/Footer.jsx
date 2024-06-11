import React from 'react'
import { FaGithub } from "react-icons/fa";
import logoBosch from '../../assets/logoBosch.svg'


export default function Footer() {
  return (
    <footer className="w-full text-white font-inter px-6 mt-[100px]">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-[#939393] text-center md:justify-between">
        <img src={logoBosch} alt="logo-ct" className="w-[110px] h-auto" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
              href="https://esthers-organization-1.gitbook.io/trackhub/"
              className="font-regular text-sm hover:text-slate-600 "
            >
              Documentation
            </a>
          </li>
          <li>
            <a href='https://github.com/Track-Hub'>
              <FaGithub color='white' size={24} />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center content-center">
        <hr className="my-4 w-full border-[#939393]" />
      </div>

      <div color="blue-gray" className="text-center cursor-default text-[#939393] text-sm pb-5">
        &copy; 2024 TrackHub. All Rights Reserved.
      </div>
    </footer>

  )
}


