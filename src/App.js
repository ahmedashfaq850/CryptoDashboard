import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import Coins from './Components/Coins'
import Exchange from './Components/Exchange'
import CoinDetails from './Components/CoinDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='/Exchange' element={<Exchange/>}/>
        <Route path='/coin/:id' element={<CoinDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App