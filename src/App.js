import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Comments from './Pages/Comments/Comments'
import Offs from './Pages/Offs/Offs'
import Orders from './Pages/Orders/Orders'
import Products from './Pages/Products/Products'
import Users from './Pages/Users/Users'
export default function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className="main">
        <Header />
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/users' element={<Users />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/offs' element={<Offs />} />
        </Routes>
      </div>
    </div>
  )
}
