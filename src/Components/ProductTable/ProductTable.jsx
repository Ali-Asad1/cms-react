import React, { useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import './ProductTable.css'
export default function ProductTable() {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)


    const deleteModalCalncelAction = () => {
        setIsShowDeleteModal(false)
    }
    const deleteModalConfirmAction = () => {
        setIsShowDeleteModal(false)
    }

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
                            <button className="product-table-btn" onClick={() => setIsShowDeleteModal(true)}>حذف</button>
                            <button className="product-table-btn">ویرایش</button>
                        </td>
                    </tr>

                </tbody>
            </table>
            {isShowDeleteModal && <DeleteModal deleteModalCalncelAction={deleteModalCalncelAction} deleteModalConfirmAction={deleteModalConfirmAction} />}
        </div>
    )
}
