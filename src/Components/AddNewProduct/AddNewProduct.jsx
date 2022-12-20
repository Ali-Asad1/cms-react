import React from 'react'
import './AddNewProduct.css'
export default function AddNewProduct() {
    return (
        <div className='products-main'>
            <h2 className='products-title'>افزودن محصول جدید</h2>

            <form action="" className="add-products-form">
                <div className="add-products-form-wrap">
                    <div className="add-products-form-group">
                        <input type="text" placeholder='اسم محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <input type="text" placeholder='قیمت محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <input type="text" placeholder='موجودی محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <input type="text" placeholder='آدرس عکس محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <input type="text" placeholder='میزان محبوبیت محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <input type="text" placeholder='میزان فروش محصول را بنویسید' className="add-products-input" />
                    </div>
                    <div className="add-products-form-group">
                        <input type="text" placeholder='تعداد رنگ محصول را بنویسید' className="add-products-input" />
                    </div>
                </div>
            </form>
        </div>
    )
}

