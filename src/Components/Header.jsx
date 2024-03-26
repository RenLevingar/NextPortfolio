import React from 'react'
import Link from 'next/link';

const Header = ({ listItem }) => {
  return (
    <main className='headerMain'>
        <div>RL</div>
        <ul>
          <li><Link  className={listItem === "aboutme" ? "aboutTitle" : null} href={'/'}>ABOUT ME</Link></li>
          <li><Link  className={listItem === "resume" ? "resumeTitle" : null}href={'/resume'}>RESUME</Link></li>
          <li><Link  className={listItem === "projects" ? "projectsTitle" : null} href={'/experinces'}>PROJECTS</Link></li>
        </ul>
    </main>
  )
}

export default Header