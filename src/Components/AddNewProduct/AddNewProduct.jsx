import React, { useState } from 'react'
import { AiOutlineDollar } from 'react-icons/ai'
import { BsCursorText, BsBag } from 'react-icons/bs'
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'
import { TfiWrite } from 'react-icons/tfi'
import { VscSymbolColor } from 'react-icons/vsc'
import { IoImageOutline } from 'react-icons/io5'
import './AddNewProduct.css'
export default function AddNewProduct({ fetchDatas, successNotify, errorNotify }) {
    const [newProductName, setNewProductName] = useState('')
    const [newProductPrice, setNewProductPrice] = useState('')
    const [newProductCount, setNewProductCount] = useState('')
    const [newProductImg, setNewProductImg] = useState('')
    const [newProductPopularity, setNewProductPopularity] = useState('')
    const [newProductSale, setNewProductSale] = useState('')
    const [newProductColor, setNewProductColor] = useState('')

    const addNewProduct = (e) => {
        e.preventDefault()
        let newProduct = {
            title: newProductName,
            price: newProductPrice,
            count: newProductCount,
            img: newProductImg,
            popularity: newProductPopularity,
            sale: newProductSale,
            colors: newProductColor,
        }

        fetch('http://localhost:8000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }).then(res => {
            console.log(res)
            fetchDatas()
            successNotify('ثبت محصول موفقیت آمیز بود')
        }).catch(err => {
            errorNotify('ثبت محصول موفقیت آمیز نبود')
        })
        emptyInput()
    }

    const emptyInput = () => {
        setNewProductName('')
        setNewProductPrice('')
        setNewProductCount('')
        setNewProductImg('')
        setNewProductPopularity('')
        setNewProductSale('')
        setNewProductColor('')
    }
    return (
        <div className='products-main'>
            <h2 className='products-title'>افزودن محصول جدید</h2>
            <form action="" className="add-products-form">
                <div className="add-products-form-wrap">
                    <div className="add-products-form-group">
                        <BsCursorText />
                        <input type="text" placeholder='اسم محصول را بنویسید' className="add-products-input" value={newProductName} onChange={(e) => {
                            setNewProductName(e.target.value)
                        }} />
                    </div>
                    <div className="add-products-form-group">
                        <AiOutlineDollar />
                        <input type="text" placeholder='قیمت محصول را بنویسید' className="add-products-input" value={newProductPrice} onChange={(e) => {
                            setNewProductPrice(e.target.value)
                        }} />
                    </div>
                    <div className="add-products-form-group">
                        <BsBag />
                        <input type="text" placeholder='موجودی محصول را بنویسید' className="add-products-input" value={newProductCount} onChange={(e) => {
                            setNewProductCount(e.target.value)
                        }} />
                    </div>
                    <div className="add-products-form-group">
                        <IoImageOutline />
                        <input type="text" placeholder='آدرس عکس محصول را بنویسید' className="add-products-input" value={newProductImg} onChange={(e) => {
                            setNewProductImg(e.target.value)
                        }} />
                    </div>
                    <div className="add-products-form-group">
                        <TfiWrite />
                        <input type="text" placeholder='میزان محبوبیت محصول را بنویسید' className="add-products-input" value={newProductPopularity} onChange={(e) => {
                            setNewProductPopularity(e.target.value)
                        }} />
                    </div>
                    <div className="add-products-form-group">
                        <HiOutlineArrowTrendingUp />
                        <input type="text" placeholder='میزان فروش محصول را بنویسید' className="add-products-input" value={newProductSale} onChange={(e) => {
                            setNewProductSale(e.target.value)
                        }} />
                    </div>
                    <div className="add-products-form-group">
                        <VscSymbolColor />
                        <input type="text" placeholder='تعداد رنگ محصول را بنویسید' className="add-products-input" value={newProductColor} onChange={(e) => {
                            setNewProductColor(e.target.value)
                        }} />
                    </div>
                </div>
                <button className='add-products-form-submit' onClick={addNewProduct}>ثبت محصول</button>
            </form>
        </div>
    )
}

