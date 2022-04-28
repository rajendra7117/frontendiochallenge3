import React from 'react'
import './Main.css'
import hero from '../../images/image-hero-desktop.png'
import c1 from '../../images/client-audiophile.svg'
import c2 from  '../../images/client-databiz.svg'
import c3 from '../../images/client-maker.svg'
import c4 from '../../images/client-meet.svg'
const Main = () => {
  return (
<main className='container'>
    <section className='text-sec'>
        <h1>Make <br/> remote work</h1>
        <h1>Make remote work</h1>
        <p>  Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.</p>
  <button>Learn more</button>
  <div className='icons'>
    <img src={c1}/>
    <img src={c2}/>
    <img src={c3}/>
    <img src={c4}/>
  </div>
    </section>
    <section className='img-sec'>
            <img src={hero}/>
    </section>
</main>
  )
}

export default Main