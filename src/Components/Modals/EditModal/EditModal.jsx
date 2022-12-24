import React from 'react'
import ReactDOM from 'react-dom'
import './EditModal.css'

export default function EditModal({ children, onClose, onSubmit }) {
    return ReactDOM.createPortal(
        <div className='modal-parent show-modal'>
            <form action="POST" className="edit-modal">
                <h1>اطلاعات جدید را وارد کنید</h1>
                {children}
                <div className='edit-modal-btns'>
                    <button className='edit-btn edit-modal-confirm-btn' onClick={(e) => onSubmit(e)}>ثبت</button>
                    <button className='edit-btn edit-modal-reject-btn' onClick={(e) => onClose(e)}>بستن</button>
                </div>
            </form>
        </div>, document.getElementById('modals-parent')
    )
}
