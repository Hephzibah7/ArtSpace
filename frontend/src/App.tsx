import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginUI from './Authentication/LoginSection/LoginUI'
import LandingPageComponent from './landingPage/LandingPageComponent'
import NavBarComponent from './NavBar/NavBarComponent'
import FooterComponent from './Footer/FooterComponent'
function App() {

  return (
    <>
      <div className='bg-yellow-200'>
        <NavBarComponent/>
       <LandingPageComponent/>
       <FooterComponent/>
      </div>
    </>
  )
}

export default App
