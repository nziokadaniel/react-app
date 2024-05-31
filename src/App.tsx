import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'
import About from './components/Navbar/Aboutus/About'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div>APP
<Navbar/>
<Hero/>
<About/>
<div className='container'>
<Contact/>
</div >
</div >
  )
}
export default App