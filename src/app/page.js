"use client"

import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <main>
      {/* header import with proper prop drilling */}
      <Header listItem={"aboutme"}/>
      <section className='aboutMeSection'>
        <h1>ABOUT ME</h1>
        <p>Over two years of experience in web development, adept in delivering high-quality solutions tailored to clients' needs.</p>
        <Image src="/images/computer.png" width={500} height={500} alt='Computer image'/>
      </section>
    
      {/* First page section about me */}
      <section className='infoSectionContainer'>
        <section className='infoSection'>
          <p>I'm a skilled web developer with a track record of delivering top-notch websites tailored to meet client needs, leveraging my expertise in responsive design and user-eccentric optimization.</p>
        </section>
      </section>

      {/* All of my personal skills */}
      <section className='personalSection'>
        <h1>Personal Attributes</h1>

        <div className='personalInfo'>

          {/* Adaptability */}
          <div className='personalBubble bubbleRight' data-aos='fade-up' data-aos-delay="000">
            <h3>Adaptability</h3>
            <p>Essential in the rapidly evolving IT industry, adaptability ensures quick acclimatization to new technologies and methodologies.</p>
          </div>

          {/* Problem Solving */}
          <div className='personalBubble bubbleLeft' data-aos='fade-down' data-aos-delay="000">
            <h3>Problem Solving</h3>
            <p>Crucial for troubleshooting efficiently and devising innovative solutions, strong problem-solving skills are a cornerstone of success in IT.</p>
          </div>

          {/* Attention To Detail */}
          <div className='personalBubble bubbleRight' data-aos='fade-left' data-aos-delay="000">
            <h3>Attention To Detail</h3>
            <p>Precision is paramount; meticulous attention to detail guarantees high-quality work in the detail-oriented realm of IT.</p>
          </div>

          {/* Communication */}
          <div className='personalBubble bubbleLeft' data-aos='fade-right' data-aos-delay="000">
            <h3>Communication</h3>
            <p>Effective communication is key for explaining technical concepts to non-technical stakeholders and collaborating seamlessly with team members.</p>
          </div>

          {/* Technical Expertise */}
          <div className='personalBubble bubbleRight' data-aos='fade-up-left' data-aos-delay="000">
            <h3>Technical Expertise</h3>
            <p>A deep understanding of relevant technologies and platforms is fundamental for proficiently executing tasks and staying updated with industry advancements.</p>
          </div>

          {/* Time Management */}
          <div className='personalBubble bubbleLeft' data-aos='fade-up-right' data-aos-delay="000">
            <h3>Time Management</h3>
            <p>With numerous tasks and projects, effective time management ensures consistent prioritization and meeting deadlines in the fast-paced IT environment.</p>
          </div>
          
        </div>

        <Footer listItem={"aboutme"}/>
      </section>
    </main>
  );
}
