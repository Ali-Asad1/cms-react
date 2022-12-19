import React from 'react'
import './Sidebar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsCart3, BsBagCheck , BsCurrencyDollar } from 'react-icons/bs'
import { BiCommentDetail, BiDollar } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { IoPricetagsOutline } from 'react-icons/io5'
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h2 className="sidebar-title">به داشبورد خوش آمدید</h2>
            <ul className="sidebar-links">
                <li className='active'>
                    <a href="#"><AiOutlineHome /> صحفه اصلی</a>
                </li>
                <li>
                    <a href="#"><BsCart3 /> محصولات</a>
                </li>
                <li>
                    <a href="#"><BiCommentDetail /> کامنت ها</a>
                </li>
                <li>
                    <a href="#"><FiUsers /> کاربران</a>
                </li>
                <li>
                    <a href="#"><BsBagCheck /> سفارشات</a>
                </li>
                <li>
                    <a href="#"><IoPricetagsOutline /> تخفیف ها</a>
                </li>
                <div className="underline"></div>
            </ul>
        </div>
    )
}
