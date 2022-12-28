import React from 'react'
import ReactDOM from 'react-dom'
import './DetailModal.css'
export default function DetailModal({ onClose, productDetails }) {
    return ReactDOM.createPortal(
        <div className='modal-parent show-modal'>
            <div className="details-modal">
                <table className='table-modal'>
                    <thead>

                        <tr>
                            <th>اسم</th>
                            <th>قیمت</th>
                            <th>محبوبیت</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>{productDetails.title}</td>
                            <td>{productDetails.price}</td>
                            <td>{productDetails.popularity}%</td>
                        </tr>
                    </tbody>
                </table>
                <div className="details-modal-btns">
                    <button className="details-btn detail-close" onClick={() => onClose()}>بستن</button>
                </div>
            </div>
        </div>, document.getElementById('modals-parent')
    )
}
