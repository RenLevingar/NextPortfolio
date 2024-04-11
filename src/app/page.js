import Header from '../Components/Header'
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* header import with proper prop drilling */}
      <Header listItem={"aboutme"}/>
      <section className='aboutMeSection'>
        <h1>ABOUT ME</h1>
        <p>Over two years of experience in web development, adept in delivering high-quality solutions tailored to clients' needs.</p>
        <Image src="/images/computer.png" width={500} height={500} alt='Computer image'/>
      </section>

      <section className='infoSectionContainer'>
        <section className='infoSection'>
          <p>I'm a skilled web developer with a track record of delivering top-notch websites tailored to meet client needs, leveraging my expertise in responsive design and user-eccentric optimization.</p>
        </section>
      </section>

      <section className='personalSection'>
        <h1>Personal Attributes</h1>
      </section>
    </main>
  );
}
