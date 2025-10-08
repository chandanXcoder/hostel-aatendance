import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import About from './component/About'
import Hero from './component/Hero'
import Contact from './component/Contact'
import Footer from './component/Footer'
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Hero />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
