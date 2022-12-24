import React from 'react'
import ReactDOM from 'react-dom'
import './DetailModal.css'
export default function DetailModal({ onClose }) {
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
                            <td>آیفون 13</td>
                            <td>55.000.000</td>
                            <td>85%</td>
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
