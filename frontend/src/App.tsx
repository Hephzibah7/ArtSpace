import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginUI from './Authentication/LoginSection/LoginUI'
import LandingPageComponent from './landingPage/LandingPageComponent'
function App() {

  return (
    <>
      <div className='bg-yellow-200'>
       <LandingPageComponent/>
      </div>
    </>
  )
}

export default App
