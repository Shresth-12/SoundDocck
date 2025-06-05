import { useState } from 'react'
import Footer from './components/Footer'
import Loader from './components/Loader';
import Footerr from './components/Footerr';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import { NavvBar } from './components/NavvBar';
import { Heroo } from './components/Heroo';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>

    {/* {loading && <Loader onFinish={() => setLoading(false)} />}
      <Footer></Footer>
    {!loading && <Footerr/>} */}
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
    </div>
  </>
  )
}

export default App
