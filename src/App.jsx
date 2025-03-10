import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'
// import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Registration from './Components/Registration';

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      {/* <Hero/> */}
      <Footer/>
    </>
  )
}

export default App
