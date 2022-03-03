import React from 'react'
import logo from '../assets/logo.svg'
import './App.css'
import { Home } from './home/Home'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Home />
    </div>
  )
}

export default App
