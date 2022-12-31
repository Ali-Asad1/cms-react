import React, { useEffect, useState } from 'react'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'
import Loader from '../../Components/Loader/Loader'
import AcceptModal from '../../Components/Modals/AcceptModal/AcceptModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Users.css'

export default function Users() {
    const [allUsers, setAllUsers] = useState([])
    const [isInProgress, setIsInProgress] = useState([])
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [userID, setUsertID] = useState(null)

    useEffect(() => {
        fetchDatas()
    }, [])

    const fetchDatas = () => {
        setIsInProgress(true)
        fetch('http://localhost:8000/api/users')
            .then(res => res.json())
            .then(data => {
                setAllUsers(data.reverse())
                setTimeout(() => {
                    setIsInProgress(false)
                }, 2000);
            })
            .catch(err => console.warn(err))
    }


    // delete user action
    const deleteModalConfirmAction = () => {
        fetch(`http://localhost:8000/api/users/${userID}`, {
            method: 'DELETE'
        }).then(res => {
            console.log(res);
            fetchDatas()
            successNotify('کاربر با موفقیت حذف شد')
        }).catch(err => {
            console.log(err);
            errorNotify('حذف کاربر موفقیت آمیز نبود')
        })
        setIsShowDeleteModal(false)
        setUsertID(null)
    }
    const deleteModalCancelAction = () => {
        setIsShowDeleteModal(false)
        setUsertID(null)
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
            <div className="users-table">
                {
                    isInProgress && <Loader />
                }
                <table className="table">
                    {
                        allUsers ? (
                            <>
                                <thead>
                                    <tr>
                                        <th>نام و نام خانواگی</th>
                                        <th>یوزر نیم</th>
                                        <th>رمز عبور</th>
                                        <th>شماره تماس</th>
                                        <th>ایمیل</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allUsers.map(user => (
                                            <tr key={user.id}>
                                                <td>{user.firsname} {user.lastname}</td>
                                                <td>{user.username}</td>
                                                <td>{user.password}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <button className="users-table-btn" onClick={() => {
                                                        setIsShowDeleteModal(true)
                                                        setUsertID(user.id)
                                                    }}>حذف</button>
                                                    <button className="users-table-btn">ویرایش</button>
                                                    <button className="users-table-btn">جزییات</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </>
                        ) : (
                            <ErrorBox ErrMessage={'کاربری یافت نشد!'} />
                        )
                    }

                </table>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {
                isShowDeleteModal && <AcceptModal onConfirm={deleteModalConfirmAction} onCancel={deleteModalCancelAction} title={'آیا از حذف اطمینان دارید؟'}/>
            }
        </>
    )
}
