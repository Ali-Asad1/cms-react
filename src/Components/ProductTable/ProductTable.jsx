import React, { useState } from 'react'
import DeleteModal from '../Modals/DeleteModal/DeleteModal'
import DetailModal from '../Modals/DetailModal/DetailModal'
import EditModal from '../Modals/EditModal/EditModal'
import { BsCursorText, BsBag } from 'react-icons/bs'


import './ProductTable.css'
export default function ProductTable() {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)

    //* Delete Modal Actions
    const deleteModalCalncelAction = () => {
        setIsShowDeleteModal(false)
    }
    const deleteModalConfirmAction = () => {
        // delete product with API
        setIsShowDeleteModal(false)
    }

    //* Details Modal Actions
    const detailsModalClose = () => {
        setIsShowDetailsModal(false)
    }

    //* Edit Modal Actions
    const updateProductInfos = (e) => {
        // update product infos with API
        e.preventDefault()
        setIsShowEditModal(false)
    }
    const editModalClose = (e) => {
        e.preventDefault()
        setIsShowEditModal(false)
    }

    return (
        <>
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
                                <button className="product-table-btn" onClick={() => setIsShowDetailsModal(true)}>جزییات</button>
                                <button className="product-table-btn" onClick={() => setIsShowDeleteModal(true)}>حذف</button>
                                <button className="product-table-btn" onClick={() => setIsShowEditModal(true)}>ویرایش</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
                {isShowDetailsModal && <DetailModal onClose={detailsModalClose} />}
                {isShowDeleteModal && <DeleteModal onCancel={deleteModalCalncelAction} onConfirm={deleteModalConfirmAction} />}
                {
                    isShowEditModal &&
                    <EditModal onClose={editModalClose} onSubmit={updateProductInfos}>
                        <div className="edit-form-group">
                            <BsCursorText />
                            <input type="text" className="edit-form-input" placeholder='نام جدید ...' />
                        </div>
                        <div className="edit-form-group">
                            <BsCursorText />
                            <input type="text" className="edit-form-input" placeholder='نام جدید ...' />
                        </div>
                    </EditModal>
                }
            </div>
        </>
    )
}
