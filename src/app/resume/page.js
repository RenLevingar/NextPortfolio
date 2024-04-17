"use client";

import Header from '../../Components/Header'
import { React, useEffect} from 'react'
import Footer from '../../Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {gsap} from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  gsap.registerPlugin(ScrollTrigger) 
  gsap.to(".jsBar", {scrollTrigger: ".jsBar", width: "60%", duration: 3, ease: "power3" });
  gsap.to(".cssBar", {scrollTrigger: ".jsBar", width: "70%", duration: 3, ease: "power3" });
  gsap.to(".htmlBar", { scrollTrigger: ".jsBar",width: "90%", duration: 3, ease: "power4" });
  }, [])
    

  return (
    <main className='resumeMain'>
      <Header listItem={"resume"}/>
      <div className='resumeContainer'>
        <section className='resumeSection'>
          <h1 data-aos='zoom-in'>Experience</h1>

          <div>
            <div data-aos='zoom-in-right'>
              <h2>Math Tutor</h2>
              <h3>Mathnasium | September 2023-Present</h3>
            </div>
            <p data-aos='zoom-in-left'>Provided tailored tutoring sessions for children spanning from kindergarten through calculus, enhancing their comprehension and proficiency in mathematics.</p>
          </div>

          <div>
            <div data-aos='fade-right'>
              <h2>President</h2>
              <h3>Future Business Leaders of America | August 2022 - August 2023</h3>
            </div>
            <p data-aos='fade-left'>Helped plan events, meetings, and competitions. Assisted in classroom management.</p>
          </div>

          <div>
            <div data-aos='zoom-in-right'>
              <h2>Troop Guide</h2>
              <h3>Scouts of America | July 2022 and December 2022</h3>
            </div>
            <p data-aos='zoom-in-left'>Served as a Troop Guide at two separate National Youth Leadership Training Courses. Guided patrols, gave presentations on using effective communication, and helped Scouts learn leadership skills.</p>
          </div>
        </section>

        <section className='resumeSection'>
          <h1 data-aos='zoom-in'>Education</h1>

          <div>
            <div data-aos='fade-right'>
              <h2>West-MEC</h2>
              <h3>August 2022 - Present</h3>
            </div>
            <p data-aos='fade-left'>This two-year interactive program prepares students for a career as a web designer. The program teaches students how to design and develop software, build apps for phones, tablets, websites, and write and test computer code.</p>
          </div>

          <div>
            <div data-aos='zoom-in-right'>
              <h2>Mountain Ridge High School</h2>
              <h3>August 2020 - Present</h3>
            </div>
            <p data-aos='zoom-in-left'>GPA 4.12 weighted, 3.67 unweighted</p>
          </div>
        </section>
        
        <section className='skillSection'>
          <h1 data-aos='zoom-in'>Key Skills</h1>

          <div>
            <div data-aos='fade-up' data-aos-delay="000">
              <h4>Autodesk</h4>
              <p data-aos='fade-left'>Proficient in Autodesk software for two years, showcasing expertise in design.</p>
            </div>

            <div data-aos='fade-up' data-aos-delay="250">
              <h4>Coding</h4>
              <p data-aos='fade-left'>Skilled in coding languages such as HTML, CSS, and JavaScript, specializing in web design.</p>
            </div>

            <div data-aos='fade-up' data-aos-delay="500">
              <h4>Team Setting</h4>
              <p data-aos='fade-left'>Experienced in utilizing GitHub and adept at collaborating within team settings.</p>
            </div>
          </div>
        </section>

        <section className='languageSection'>

          <div>
            <h4>JavaScript</h4>
            <div><div className='jsBar'><h6>60%</h6></div></div>
          </div>

          <div>
            <h4>HTML</h4>
            <div><div className='htmlBar'><h6>90%</h6></div></div>
          </div>

          <div className='endBlock'>
            <h4>CSS/SASS</h4>
            <div><div className='cssBar'><h6>70%</h6></div></div>
          </div>
        </section>
      </div>
      <Footer listItem={"resume"}/>
    </main>
  );
}
