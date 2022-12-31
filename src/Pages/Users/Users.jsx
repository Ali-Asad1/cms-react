import React, { useEffect, useState } from 'react'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'
import Loader from '../../Components/Loader/Loader'
import './Users.css'
export default function Users() {
    const [allUsers, setAllUsers] = useState([])
    const [isInProgress, setIsInProgress] = useState([])

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
        </>
    )
}
