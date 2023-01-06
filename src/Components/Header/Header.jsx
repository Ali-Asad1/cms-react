import React from "react";
import "./Header.css";
import { BsFillBrightnessHighFill, BsFillBellFill } from "react-icons/bs";
export default function Header({ adminInfo }) {
    return (
        <div className='header'>
            <div className='admin-profile'>
                <img src={adminInfo ? adminInfo.img : "./images/sample-user.png"} alt='' />
                <div>
                    <h2>
                        {adminInfo ? `${adminInfo.firstname}  ${adminInfo.lastname}` : "ناشناس"}
                    </h2>
                    <h3>{adminInfo ? adminInfo.task : "ناشناس"}</h3>
                </div>
            </div>
            <div className='header-left'>
                <div className='search-box'>
                    <input type='text' placeholder='سرچ کنید ...' />
                    <button id='search-btn'>جست و جو</button>
                </div>
                <button className='header-icon'>
                    <BsFillBellFill />
                </button>
                <button className='header-icon'>
                    <BsFillBrightnessHighFill />
                </button>
            </div>
        </div>
    );
}
