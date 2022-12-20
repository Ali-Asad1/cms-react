import React from 'react'
import './Sidebar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsCart3, BsBagCheck } from 'react-icons/bs'
import { BiCommentDetail } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { IoPricetagsOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h2 className="sidebar-title">به داشبورد خوش آمدید</h2>
            <ul className="sidebar-links">
                <li className='active'>
                    <Link to='/products'><AiOutlineHome /> صحفه اصلی</Link>
                </li>
                <li>
                    <Link to='/products'><BsCart3 /> محصولات</Link>
                </li>
                <li>
                    <Link to='/comments'><BiCommentDetail /> کامنت ها</Link>
                </li>
                <li>
                    <Link to='/users'><FiUsers /> کاربران</Link>
                </li>
                <li>
                    <Link to='/orders'><BsBagCheck /> سفارشات</Link>
                </li>
                <li>
                    <Link to='/offs'><IoPricetagsOutline /> تخفیف ها</Link>
                </li>
                <div className="underline"></div>
            </ul>
        </div>
    )
}
