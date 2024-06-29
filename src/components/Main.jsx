import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn} from "react-icons/fa"
function Main() {
  return (
    <div id="main">
        <img className='w-full h-screen object-cover object-left' src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='m-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                <h1 className='sm:text-5xl text-4xl text-gray-800'>I am Gaurav Sahni</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I am a
                <TypeAnimation
      sequence={[
        'Developer',
        2000,
        'Coder',
        2000,
        'Tech Enthusiast',
        2000,
      ]}
      wrapper="div"
      cursor={true}
      style={{ fontSize: '1em',paddingLeft:"5px" }}
      repeat={Infinity}
    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <a href="https://www.facebook.com/profile.php?id=61551434794532"><FaFacebookF size={20} className='cursor-pointer'/></a>
                    <a href="https://www.instagram.com/itz_gaurav017/"><FaInstagram size={20} className='cursor-pointer'/></a>
                    <a href="https://www.linkedin.com/in/gauravsahni17/"><FaLinkedinIn size={20} className='cursor-pointer'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main