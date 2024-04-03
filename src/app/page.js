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
    </main>
  );
}
