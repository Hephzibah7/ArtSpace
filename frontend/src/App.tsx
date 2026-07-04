import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginUI from './Authentication/LoginSection/LoginUI'
import HomeComponent from './landingPage/Home/HomeComponent'

function App() {

  return (
    <>
      <div>
        <HomeComponent/>
      </div>
    </>
  )
}

export default App
