import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Header} from './components/Header'
import { Home } from './pages/Home';
import './index.css'

export default function  App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Home/>
        
        
      </BrowserRouter>
    </div>
  )
}

