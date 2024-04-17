import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

export default function Home() {
  return (
    <main>
      <Header listItem={"projects"}/>
      <section className='projectsSection'>
        <div className='div1'>Div 1</div>
        <div className='div2'>Div 2</div>
        <div className='div3'>Div 3</div>
        <div className='div4'>Div 4</div>
        <div className='div5'>Div 5</div>
      </section>
      <Footer listItem={"projects"}/>
    </main>
  );
}
