import React from 'react'
import './Header.css'
import { BsFillBrightnessHighFill , BsFillBellFill } from 'react-icons/bs'
export default function Header() {
    return (
        <div className='header'>
            <div className="admin-profile">
                <img src="./images/sample-user.png" alt="" />
                <div>
                    <h2>علی اسعد</h2>
                    <h3>برنامه نویس فرانت</h3>
                </div>
            </div>
            <div className="header-left">
                <div className="search-box">
                    <input type="text" placeholder='سرچ کنید ...' />
                    <button id='search-btn'>جست و جو</button>
                </div>
                <button className="header-icon">
                    <BsFillBellFill />
                </button>
                <button className="header-icon">
                    <BsFillBrightnessHighFill />
                </button>
            </div>
        </div>
    )
}
