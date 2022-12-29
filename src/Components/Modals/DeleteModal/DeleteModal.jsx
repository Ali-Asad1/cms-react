import React from 'react'
import ReactDOM from 'react-dom'
import './DeleteModal.css'


export default function DeleteModal({ onCancel, onConfirm }) {
    return ReactDOM.createPortal(
        <div className='modal-parent show-modal'>
            <div className="delete-modal">
                <h1>آیا از حذف اطمینان دارید؟</h1>
                <div className='delete-modal-btns'>
                    <button className='delete-btn delete-modal-accept-btn' onClick={() => onConfirm()}>بله</button>
                    <button className='delete-btn delete-modal-reject-btn' onClick={() => onCancel()}>خیر</button>
                </div>
            </div>
        </div>, document.getElementById('modals-parent')
    )
}