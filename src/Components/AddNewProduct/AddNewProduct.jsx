import React from 'react'
import { AiOutlineDollar } from 'react-icons/ai'
import { BsCursorText, BsBag } from 'react-icons/bs'
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'
import { TfiWrite } from 'react-icons/tfi'
import { VscSymbolColor } from 'react-icons/vsc'
import { IoImageOutline } from 'react-icons/io5'
import './AddNewProduct.css'
export default function AddNewProduct() {
    return (
        <div className='products-main'>
            <h2 className='products-title'>افزودن محصول جدید</h2>

            <form action="" className="add-products-form">
                <div className="add-products-form-wrap">
                    <div className="add-products-form-group">
                        <BsCursorText />
                        <input type="text" placeholder='اسم محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <AiOutlineDollar />
                        <input type="text" placeholder='قیمت محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <BsBag />
                        <input type="text" placeholder='موجودی محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <IoImageOutline />
                        <input type="text" placeholder='آدرس عکس محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <TfiWrite />
                        <input type="text" placeholder='میزان محبوبیت محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <HiOutlineArrowTrendingUp />
                        <input type="text" placeholder='میزان فروش محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <VscSymbolColor />
                        <input type="text" placeholder='تعداد رنگ محصول را بنویسید' className="add-products-input" />
                    </div>
                </div>
                <button className='add-products-form-submit'>ثبت محصول</button>
            </form>
        </div>
    )
}

