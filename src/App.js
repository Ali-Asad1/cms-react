import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
export default function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className="main">
        <Header />
      </div>
    </div>
  )
}
