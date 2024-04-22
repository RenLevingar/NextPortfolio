'use client'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Image from 'next/image';

export default function Home() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger);

  // gsap intializer
  useGSAP(() => {
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false
      });
  });
    
  })

  return (
    <main>
      <Header listItem={"projects"}/>

      {/* project 1 */}
      <section className='projectsSection'>
        <div className='panel'>
          <div className='divContainer'>
            <h3>Coding Projects - United Way of Northern Arizona</h3>
            {/* <div className='div1'></div> */}
            <a href='https://github.com/JRigney6993-coder/uwna-internship-project'><Image src='/images/uwna.png' alt="United Way Of Northern Arizona" height={500} width={500}></Image></a>
            <p>Created a mental health wellness app for Native American teenagers who were struggling with various different mental health issues.</p>
          </div>
        </div>

        {/* project 2 */}
        <div className='panel'>
          <div className='divContainer'>
              <h3>Coding Projects - Ji Long Grill</h3>
              {/* <div className='div2'></div> */}
              <a href='https://github.com/EthanTransier/FBLA-Website_Project-V2'><Image src='/images/jilong.png' alt="United Way Of Northern Arizona" height={500} width={500}></Image></a>
              <p>Devloped a website for a FBLA state competition based around a chinese restraunt. This was done in a team of three people and we ended placing tenth in the state.</p>
          </div>
        </div>

        {/* project 3 */}
        <div className='panel'>
          <div className='divContainer'>
              <h3>Coding Projects - Social Media Website</h3>
              {/* <div className='div3'></div> */}
              <a href='https://github.com/RenLevingar/social_media'><Image src='/images/socialmedia.png' alt="United Way Of Northern Arizona" height={500} width={500}></Image></a>
              <p>This is a fake social media platform that was made in a two person team for a classroom assignment. It aimed to have basic neccessities such as encryption and saftey standards.</p>
          </div>
        </div>

        {/* project 4 */}
        <div className='panel'>
          <div className='divContainer'>
              <h3>Coding Projects - Quote Generator</h3>
              {/* <div className='div4'></div> */}
              <a href='https://github.com/RenLevingar/random_quote'><Image src='/images/quote.png' alt="United Way Of Northern Arizona" height={500} width={500}></Image></a>
              <p>My first time working with API&apos;s I used a quote generator that I implemented into a website that I made. This website ended winning a classroom competition for design.</p>
          </div>
        </div>

        {/* project 5 */}
        <div className='panel'>
          <div className='divContainer'>
              <h3>Coding Projects - Emberland</h3>
              {/* <div className='div5'></div> */}
              <a href='https://github.com/gbaref949/Emberland'><Image src='/images/emberland.png' alt="United Way Of Northern Arizona" height={500} width={500}></Image></a>
              <p>This is the most recent game I&apos;ve made called Emberland. It was done in a three person team and involves various basic game mechanics such as sprites and animations.</p>
          </div>
        </div>
      </section>
      <Footer listItem={"projects"}/>
    </main>
  );
}
