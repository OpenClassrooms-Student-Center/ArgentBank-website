import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUserData, updateUserData } from '../../Action/User/userslice'
import { getAuthToken } from '../../Action/authslice'

function UserEditForm({ setEditToggle }) {
    const dispatch = useDispatch()
    const token = useSelector(getAuthToken)
    const user = useSelector(getUserData)
    const [userNames, setUserNames] = useState({
        firstName: '',
        lastName: '',
    })

    const canSave = Boolean(userNames.firstName) && Boolean(userNames.lastName)

    const handleCancel = () => {
        setEditToggle(false)
    }

    const handleChange = (event) => {
        setUserNames({
            ...userNames,
            [event.target.name]: event.target.value,
        })
    }

    const handleEdit = async (token, userNames) => {
        const data = { token, userNames }
        if (canSave) {
            dispatch(updateUserData(data))
            setEditToggle(false)
        }
    }

    return (
        <div>
            <div className="edit-wrapper">
                <input
                    type="text"
                    name="firstName"
                    placeholder={user.firstName}
                    value={userNames.firstName}
                    autoFocus
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder={user.lastName}
                    value={userNames.lastName}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="edit-wrapper">
                <button
                    className="edit-content-button"
                    disabled={!canSave}
                    onClick={() => handleEdit(token, userNames)}
                >
                    Save
                </button>
                <button
                    className="edit-content-button"
                    onClick={() => handleCancel(token, userNames)}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default UserEditForm