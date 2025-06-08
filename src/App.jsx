import { useState } from 'react'
import Footer from './components/Footer'
import Loader from './components/Loader';
import Footerr from './components/Footerr';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import { NavvBar } from './components/NavvBar';
import { Heroo } from './components/Heroo';
import FAQ from './components/Faq';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import AboutPage from './components/About';
import AcademyHero from './components/Academy';
import Academypage2 from './components/Academypage2';
import Academypage3 from './components/Academypage3';
import ServiceMain from './components/ServicesMain';
import ContactAcademy from './components/ContactAcademy';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>

    {/* {loading && <Loader onFinish={() => setLoading(false)} />}
      <Footer></Footer>
    {!loading && <Footerr/>} */}
    {/* <div className='bg-black'>
      <NavvBar/>
      <Heroo/>
    </div> */}
    <div>
     <ServiceMain/>
    </div>
    {/* <div>
      <AcademyHero/>
      <Academypage2/>
      <ContactAcademy/>
    </div> */}
  </>
  )
}

export default App
