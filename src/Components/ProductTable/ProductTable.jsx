import React, { useEffect, useState } from 'react'
import DeleteModal from '../Modals/DeleteModal/DeleteModal'
import DetailModal from '../Modals/DetailModal/DetailModal'
import EditModal from '../Modals/EditModal/EditModal'
import { BsCursorText, BsBag } from 'react-icons/bs'
import ErrorBox from '../ErrorBox/ErrorBox'
import './ProductTable.css'


export default function ProductTable() {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [allProduct, setAllProduct] = useState([])
    const [isInProgress, setIsInProgress] = useState(true)

    useEffect(() => {
        fetchDatas()
    }, [])


    const fetchDatas = () => {
        fetch('http://localhost:8000/api/products')
            .then(res => res.json())
            .then(data => {
                setAllProduct(data)
                setTimeout(() => {
                    setIsInProgress(false)
                }, 2000);
            })
            .catch(err => console.warn(err))
    }
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
                {
                    isInProgress ? (
                        <div className='loader-container'>
                            <span className="loader"></span>
                        </div>
                    ) : (
                        <>
                            {
                                allProduct.length ? (
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
                                            {allProduct.map(product => (
                                                <tr key={product.id}>
                                                    <td>
                                                        <img src={product.img} alt={product.title} className='product-table-img' />
                                                    </td>
                                                    <td>{product.title}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.count}</td>
                                                    <td>
                                                        <button className="product-table-btn" onClick={() => setIsShowDetailsModal(true)}>جزییات</button>
                                                        <button className="product-table-btn" onClick={() => setIsShowDeleteModal(true)}>حذف</button>
                                                        <button className="product-table-btn" onClick={() => setIsShowEditModal(true)}>ویرایش</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                ) : (
                                    <ErrorBox ErrMessage={"محصولی یافت نشد..."} />
                                )

                            }
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
                        </>
                    )
                }
            </div>



        </>
    )
}
