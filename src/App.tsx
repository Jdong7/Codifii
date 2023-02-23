import { useState } from 'react'
import './App.scss'
import React from 'react'
import { Landing } from './components/Landing/landing'
import {Dash} from './components/Dashboard/dash'
import {Topbar} from './components/Topbar/topbar'
function App() {


  return (
    <div className="App">
      <Landing/>
    <Dash/>
    </div>
  )
}

export default App
