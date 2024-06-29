import React from 'react'
import WorkItem from "./WorkItem"
const data = [
    {
        start:"August 2023",
        title: "Web Developer Intern",
        duration: "4 months",
        details: "As a Web Developer Intern learn different web technologies like MERN stack and build a number of projects. Also gain knowledge of programming languages like c,c++,java and scripting languages like Javascript.Also work on different SQL and NoSQL databases."
    }
];
function Work() {
    return (
        <div id="work" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {
                data.map((item, id) => {
                   return <WorkItem key={id} start={item.start} title={item.title} duration={item.duration} details={item.details} />
                })
            }
        </div>
    )
}

export default Work