import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthToken } from '../../Action/authslice'
import { fetchUserData, getUserData } from '../../Action/User/userslice'
import UserEditForm from '../../Action/User/useredit'
import Account from '../../Action/account'

export default function Profile() {
    const dispatch = useDispatch()
    const [editToggle, setEditToggle] = useState(false)
    const user = useSelector(getUserData)
    const token = useSelector(getAuthToken)

    useEffect(() => {
        dispatch(fetchUserData(token))
    }, [dispatch, token])

    const handleClick = (e) => {
        e.preventDefault()
        setEditToggle(!editToggle)
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {user.firstName} {user.lastName}
                </h1>
                {editToggle ? (
                     <UserEditForm
                        editToggle={editToggle}
                        setEditToggle={setEditToggle}
                    />
                ) : (
                    <button
                        className="edit-button"
                        onClick={(e) => handleClick(e)}
                    >
                        Edit Name
                    </button>
                )}
            </div>
            {<Account /> }
        </main>
    )
}
