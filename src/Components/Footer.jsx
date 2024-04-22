import React from 'react'
import Link from 'next/link';

const Footer = ({ listItem }) => {
  return (
    <main className='footerMain'>
         <ul>
          {/* prop drills to correctly color the footer */}
            <li><Link  className={listItem === "aboutme" ? "aboutTitle" : null} href={'/'}>ABOUT ME</Link></li>
            <li><Link  className={listItem === "resume" ? "resumeTitle" : null}href={'/resume'}>RESUME</Link></li>
            <li><Link  className={listItem === "projects" ? "projectsTitle" : null} href={'/experinces'}>PROJECTS</Link></li>
          </ul>
          <h2>rblev157@gmail.com</h2>
    </main>
  )
}

export default Footer