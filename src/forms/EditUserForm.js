import React, { useState, useEffect } from 'react'

const EditUserForm = ({ updateUser, currentUser, setEditing }) => {
    const [user, setUser] = useState(currentUser)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        setUser(currentUser)
    }, [currentUser])
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                updateUser(user.id, user)
            }}
        >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
            />
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
            />
            <button>Update user</button>
            <button
                onClick={() => setEditing(false)}
                className="button muted-button"
            >
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm