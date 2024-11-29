import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import { HashRouter, Routes, Route } from "react-router-dom";
import Cart from './component/Cart';

function App() {

  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />

        </Routes>
      </HashRouter>

    </>
  )
}

export default App
