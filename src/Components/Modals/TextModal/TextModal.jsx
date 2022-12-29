import React from 'react'
import ReactDOM from 'react-dom'
import './TextModal.css'
export default function TextModal({ closeBtn, commentText }) {
    return ReactDOM.createPortal(
        <div className='modal-parent show-modal'>
            <div className="texts-modal">
                <p>{commentText}</p>
                <div className="texts-modal-btns">
                    <button className="texts-btn text-close" onClick={() => closeBtn()}>بستن</button>
                </div>
            </div>
        </div>, document.getElementById('modals-parent')
    )

}
