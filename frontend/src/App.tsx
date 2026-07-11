import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginUI from './Authentication/LoginSection/LoginUI'
import LandingPageComponent from './landingPage/LandingPageComponent'
import NavBarComponent from './NavBar/NavBarComponent'
function App() {

  return (
    <>
      <div className='bg-yellow-200'>
        <NavBarComponent/>
       <LandingPageComponent/>
      </div>
    </>
  )
}

export default App
