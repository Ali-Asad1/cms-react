import React from 'react'
import './ProductTable.css'
export default function ProductTable() {
    return (
        <div className="products-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>عکس</th>
                        <th>اسم</th>
                        <th>قیمت</th>
                        <th>موجودی</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="/images/iphone.jpg" alt="" className='product-table-img' />
                        </td>
                        <td>گوشی ایفون 13 پرو مکس</td>
                        <td>55.000.000</td>
                        <td>5</td>
                        <td>
                            <button className="product-table-btn">جزییات</button>
                            <button className="product-table-btn">حذف</button>
                            <button className="product-table-btn">ویرایش</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/airpods.jpg" alt="" className='product-table-img' />
                        </td>
                        <td>ایرپاد پرو</td>
                        <td>11.000.000</td>
                        <td>15</td>
                        <td>
                            <button className="product-table-btn">جزییات</button>
                            <button className="product-table-btn">حذف</button>
                            <button className="product-table-btn">ویرایش</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/laptop.jpg" alt="" className='product-table-img' />
                        </td>
                        <td>لپتاپ ایسوس</td>
                        <td>16.500.000</td>
                        <td>2</td>
                        <td>
                            <button className="product-table-btn">جزییات</button>
                            <button className="product-table-btn">حذف</button>
                            <button className="product-table-btn">ویرایش</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
