import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Services } from './pages/Service';
import { Contact } from './pages/Contact';

import './index.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}