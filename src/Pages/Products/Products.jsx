import React from 'react'
import AddNewProduct from '../../Components/AddNewProduct/AddNewProduct'
import DeleteModal from '../../Components/DeleteModal/DeleteModal'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'
import ProductTable from '../../Components/ProductTable/ProductTable'
import './Products.css'

export default function Products() {
  return (
    <>
      <AddNewProduct />
      <ErrorBox ErrMessage={'محصولی یافت نشد!'} />
      <ProductTable />
    </>
  )
}
