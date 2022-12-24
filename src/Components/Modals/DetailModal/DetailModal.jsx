import React from 'react'
import './DetailModal.css'
export default function DetailModal() {
    return (
        <div className='modal-parent show-modal'>
            <div className="details-modal">
                <table className='table-modal'>
                    <tr>
                        <th>اسم</th>
                        <th>قیمت</th>
                        <th>محبوبیت</th>
                    </tr>
                    <tr>
                        <td>آیفون 13</td>
                        <td>55.000.000</td>
                        <td>85%</td>
                    </tr>
                </table>
                <div className="details-modal-btns">
                    <button className="details-btn detail-close">بستن</button>
                </div>
            </div>
        </div>
    )
}
