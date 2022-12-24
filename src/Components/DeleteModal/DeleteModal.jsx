import React from 'react'
import ReactDOM from 'react-dom'
import './DeleteModal.css'


export default function DeleteModal({ deleteModalCalncelAction, deleteModalConfirmAction }) {
    return ReactDOM.createPortal(
        <div className='modal-parent active'>
            <div className="delete-modal">
                <h1>آیا از حذف اطمینان دارید؟</h1>
                <div className='delete-modal-btns'>
                    <button className='delete-btn delete-modal-accept-btn' onClick={() => deleteModalConfirmAction()}>بله</button>
                    <button className='delete-btn delete-modal-reject-btn' onClick={() => deleteModalCalncelAction()}>خیر</button>
                </div>
            </div>
        </div>, document.getElementById('modals-parent')
    )
}
