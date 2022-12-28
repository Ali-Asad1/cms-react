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
    const [productId, setProductId] = useState(null)
    const [mainProduct, setMainProduct] = useState(null)
    const [productNewName, setproductNewName] = useState('')
    const [productNewPrice, setProductNewPrice] = useState('')
    const [productNewCount, setProductNewCount] = useState('')
    const [productNewImg, setProductNewImg] = useState('')
    const [productNewPopularity, setProductNewPopularity] = useState('')
    const [productNewSale, setProductNewSale] = useState('')
    const [productNewColor, setProductNewColor] = useState('')

    useEffect(() => {
        fetchDatas()
    }, [])


    const fetchDatas = () => {
        setIsInProgress(true)
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
        setProductId(null)
    }
    const deleteModalConfirmAction = () => {
        // delete product with API
        console.log(productId);
        setIsShowDeleteModal(false)
        fetch(`http://localhost:8000/api/products/${productId}`, {
            method: 'DELETE',
        })
            .then(res => {
                console.log(res)
                fetchDatas()
            })
            .then(result => {
                fetchDatas()

            })
            .catch(err => console.log(err))
    }

    //* Details Modal Actions
    const detailsModalClose = () => {
        setIsShowDetailsModal(false)
        setMainProduct(null)
    }

    //* Edit Modal Actions
    const updateProductInfos = () => {
        // update product infos with API
        let productNewInfo = {
            title: productNewName,
            price: productNewPrice,
            count: productNewCount,
            img: productNewImg,
            popularity: productNewPopularity,
            sale: productNewSale,
            colors: productNewColor,
        }
        fetch(`http://localhost:8000/api/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productNewInfo)
        }).then(res => {
            console.log(res);
            fetchDatas()
        })
        setIsShowEditModal(false)
    }
    const editModalClose = () => {
        setIsShowEditModal(false)
        setproductNewName('')
        setProductNewPrice('')
        setProductNewCount('')
        setProductNewImg('')
        setProductNewPopularity('')
        setProductNewSale('')
        setProductNewColor('')
        setProductId(null)
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
                                                        <button className="product-table-btn" onClick={() => {
                                                            setIsShowDeleteModal(true)
                                                            setProductId(product.id)
                                                        }}>حذف</button>
                                                        <button className="product-table-btn" onClick={() => {
                                                            setproductNewName(product.title)
                                                            setProductNewPrice(product.price)
                                                            setProductNewCount(product.count)
                                                            setProductNewImg(product.img)
                                                            setProductNewPopularity(product.popularity)
                                                            setProductNewSale(product.sale)
                                                            setProductNewColor(product.colors)
                                                            setIsShowEditModal(true)
                                                            setProductId(product.id)
                                                        }}>ویرایش</button>
                                                        <button className="product-table-btn" onClick={() => {
                                                            setIsShowDetailsModal(true)
                                                            setMainProduct(product)
                                                        }}>جزییات</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                ) : (
                                    <ErrorBox ErrMessage={"محصولی یافت نشد..."} />
                                )

                            }
                            {isShowDeleteModal && <DeleteModal onCancel={deleteModalCalncelAction} onConfirm={deleteModalConfirmAction} />}
                            {isShowDetailsModal && <DetailModal onClose={detailsModalClose} productDetails={mainProduct} />}
                            {
                                isShowEditModal &&
                                <EditModal onClose={editModalClose} onSubmit={updateProductInfos}>
                                    <div className="edit-form-group">
                                        <BsCursorText />
                                        <input type="text" className="edit-form-input" placeholder='نام جدید ...' value={productNewName} onChange={(e) => {
                                            setproductNewName(e.target.value)
                                        }} />
                                    </div>
                                    <div className="edit-form-group">
                                        <BsCursorText />
                                        <input type="text" className="edit-form-input" placeholder='قیمت جدید ...' value={productNewPrice} onChange={(e) => {
                                            setProductNewPrice(e.target.value)
                                        }} />
                                    </div>
                                    <div className="edit-form-group">
                                        <BsCursorText />
                                        <input type="text" className="edit-form-input" placeholder='موجودی جدید ...' value={productNewCount} onChange={(e) => {
                                            setProductNewCount(e.target.value)
                                        }} />
                                    </div>
                                    <div className="edit-form-group">
                                        <BsCursorText />
                                        <input type="text" className="edit-form-input" placeholder='عکس جدید ...' value={productNewImg} onChange={(e) => {
                                            setProductNewImg(e.target.value)
                                        }} />
                                    </div>
                                    <div className="edit-form-group">
                                        <BsCursorText />
                                        <input type="text" className="edit-form-input" placeholder='محبوبیت جدید ...' value={productNewPopularity} onChange={(e) => {
                                            setProductNewPopularity(e.target.value)
                                        }} />
                                    </div>
                                    <div className="edit-form-group">
                                        <BsCursorText />
                                        <input type="text" className="edit-form-input" placeholder='میزان فروش جدید ...' value={productNewSale} onChange={(e) => {
                                            setProductNewSale(e.target.value)
                                        }} />
                                    </div>
                                    <div className="edit-form-group">
                                        <BsCursorText />
                                        <input type="text" className="edit-form-input" placeholder='تعداد رنگ جدید ...' value={productNewColor} onChange={(e) => {
                                            setProductNewColor(e.target.value)
                                        }} />
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
