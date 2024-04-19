'use client'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function Home() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger);

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
      <section className='projectsSection'>
        <div className='div1 panel'>Div 1</div>
        <div className='div2 panel'>Div 2</div>
        <div className='div3 panel'>Div 3</div>
        <div className='div4 panel'>Div 4</div>
        <div className='div5 panel'>Div 5</div>
      </section>
      <Footer listItem={"projects"}/>
    </main>
  );
}
