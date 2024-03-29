import Header from '../Components/Header'
import Image from 'next/image';

// const imageStyle = {
//   width: '60vw',
//   height: 'auto',
//   textAlign: 'center',
//   margin: 'auto'
// }

export default function Home() {
  return (
    <main>
      {/* header import with proper prop drilling */}
      <Header listItem={"aboutme"}/>

      {/* title */}
      <div className='titleBox'>
        <h1>Ren Levingar</h1>
        <h2>Web Developer</h2>
      </div>

      {/* short about me section */}
      {/* <section className='aboutMeSection'>
        <h3>ABOUT ME</h3>
        <p>Over two years of experience in web development, adept in delivering high-quality solutions tailored to clients' needs.</p>
        <Image src="/images/computer.png" width={150} height={80} alt='Computer displaying empty code'/>
      </section> */}
    </main>
  );
}
