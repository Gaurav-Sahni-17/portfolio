import React from 'react'
import ProjectItem from "./ProjectItem"
import ecom from "../assets/ecom.jpg"
import chat from "../assets/chat.jpg"
import tictactoe from "../assets/tictactoe.jpg"
import todo from "../assets/todo.jpg" 
function Projects() {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
       <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
       <p className='text-center py-8'>Here are some projects which I have done throughout my journey.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={ecom} title="E-commerce App" tech="MERN Stack" address="https://github.com/Gaurav-Sahni-17/ecom-react"/>
        <ProjectItem img={todo} title="Discussion App" tech="JavScript" address="https://github.com/Gaurav-Sahni-17/discussion_portal"/>
        <ProjectItem img={chat} title="Chatting App" tech="MERN Stack" address="https://github.com/Gaurav-Sahni-17/chatApp"/>
        <ProjectItem img={tictactoe} title="Tic Tac Toe" tech="C++" address="https://github.com/Gaurav-Sahni-17/tictactoe"/>
        </div>  
    </div>
  )
}

export default Projects