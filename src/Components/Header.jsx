import React from 'react'
import Link from 'next/link';

const Header = ({ listItem }) => {
  return (
    <main className='headerMain'>
      <div className='headerDiv'>
        <div className='titleInitials'>RL</div>
          <ul>
            {/* prop drills to correctly color the header */}
            <li><Link  className={listItem === "aboutme" ? "aboutTitle" : null} href={'/'}>ABOUT ME</Link></li>
            <li><Link  className={listItem === "resume" ? "resumeTitle" : null}href={'/resume'}>RESUME</Link></li>
            <li><Link  className={listItem === "projects" ? "projectsTitle" : null} href={'/experinces'}>PROJECTS</Link></li>
          </ul>
      </div>
      <div className='titleBox'>
        <h1>Ren Levingar</h1>
        <h2>{(listItem === "aboutme") ? "Web Designer" : (listItem === "resume") ? "Resume" : "Projects"}</h2>
      </div>
    </main>
  )
}

export default Header