import React from 'react'

const UserTable = ({ users, deleteUser, editUser }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length > 0 ? (
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <button className='button muted-button' onClick={() => editUser(user)}>Edit</button>
                                        <button className='button muted-button' onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>

                                </tr>
                            )
                        })
                    ) : (
                        <tr colSpan={3}>
                            No users
                        </tr>
                    )
                }

            </tbody>
        </table>
    )
}

export default UserTable