import React, { useState } from 'react'

const AddUserForm = ({ addUser }) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!user.name || !user.username) return

        addUser(user)
        setUser(initialFormState)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleChange} />
            <button>Add new user</button>
        </form>

    )
}

export default AddUserForm