import React from 'react'

function ProjectItem({img,title,tech,address}) {
  return (
    <div className='relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
         <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
         <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
            <a href={address}>
                <p className='text-center p-3 rounded-lg bg-white text-gray-700font-bold cursor-pointer text-lg'>View Code</p>
            </a>
         </div>
    </div>
  )
}

export default ProjectItem