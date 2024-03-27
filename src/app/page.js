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
      <Header listItem={"aboutme"}/>
      <div className='image-container'>
        <Image
          src="/images/computer.png"
          width={300}
          height={200}
          // style={imageStyle}
          alt="Computer displaying empty code"
        />
      </div>
      <div className='titleBox'>
        <h1>Ren Levingar</h1>
        <h2>Web Developer</h2>
      </div>
    </main>
  );
}
