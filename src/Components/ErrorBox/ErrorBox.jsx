import React from 'react'
import './ErrorBox.css'
export default function ErrorBox({ ErrMessage }) {
    return (
        <div className='cms-empty-error'>
            <h2>{ErrMessage}</h2>
        </div>
    )
}
