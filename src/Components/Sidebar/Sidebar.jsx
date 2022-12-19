import React from 'react'
import './Sidebar.css'
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h2 className="sidebar-title">به داشبورد خوش آمدید</h2>
            <ul className="sidebar-links">
                <li className='active'>
                    <a href="#">صحفه اصلی</a>
                </li>
                <li>
                    <a href="#">محصولات</a>
                </li>
                <li>
                    <a href="#">کامنت ها</a>
                </li>
                <li>
                    <a href="#">کاربران</a>
                </li>
                <li>
                    <a href="#">سفارشات</a>
                </li>
                <li>
                    <a href="#">تخفیف ها</a>
                </li>
            </ul>
        </div>
    )
}
