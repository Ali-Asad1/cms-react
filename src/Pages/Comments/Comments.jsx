import React, { useEffect, useState } from 'react'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Comments.css'
import Loader from '../../Components/Loader/Loader';
import TextModal from '../../Components/Modals/TextModal/TextModal';
export default function Comments() {
  const [allComments, setAllComments] = useState([])
  const [isInProgress, setIsInProgress] = useState(true)
  const [isShowTextModal, setIsShowTextModal] = useState(false)
  const [mainCommentText, setMainCommentText] = useState('')


  useEffect(() => {
    fetchDatas()
  }, [])

  const fetchDatas = () => {
    setIsInProgress(true)
    fetch('http://localhost:8000/api/comments')
      .then(res => res.json())
      .then(data => {
        setAllComments(data.reverse())
        setTimeout(() => {
          setIsInProgress(false)
        }, 2000);
      })
      .catch(err => console.warn(err))
  }


  const closeTextModal = () => {
    setIsShowTextModal(false)
    setMainCommentText('')
  }

  //* notify
  const successNotify = (toastMessage) => {
    toast.success(toastMessage, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const errorNotify = (toastMessage) => {
    toast.error(toastMessage, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>

      <div className="comments-table">

        {
          isInProgress && (
            <Loader />
          )
        }
        {
          allComments.length ? (
            <table className="table">
              <thead>
                <tr>
                  <th>نام کاربر</th>
                  <th>محصول</th>
                  <th>تاریخ</th>
                  <th>ساعت</th>
                  <th>متن کامنت</th>
                </tr>
              </thead>
              <tbody>
                {
                  allComments.map((comment) => (
                    <tr>
                      <td>{comment.userID}</td>
                      <td>{comment.productID}</td>
                      <td>{comment.date}</td>
                      <td>{comment.hour}</td>
                      <td>
                        <button className="comments-table-btn" onClick={() => {
                          setIsShowTextModal(true)
                          setMainCommentText(comment.body)
                        }}>
                          دیدن کامنت
                        </button>
                      </td>
                      <td>
                        <button className="comments-table-btn">حذف</button>
                        <button className="comments-table-btn">ویرایش</button>
                        <button className="comments-table-btn">پاسخ</button>
                        <button className="comments-table-btn">تایید</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          ) : (
            <ErrorBox ErrMessage={'کامنتی یافت نشد!'} />
          )
        }
        {
          isShowTextModal && <TextModal closeBtn={closeTextModal} commentText={mainCommentText} />
        }
      </div>
    </>
  )
}
