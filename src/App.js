import { useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

function App() {
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', username: '' })

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = (id) => {
    setEditing(false)
    setUsers(users.filter((user) => { return user.id !== id }))
  }

  const editUser = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }
  return (
    <div className="container">
      <h1>CRUD application with hooks</h1>
      <div className="flex-row">
        {editing ? (
          <div className="flex-large">
            <h2>Edit user</h2>
            <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
          </div>
        ) : (
          <div className="flex-large">
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}


        <div className="flex-large">

          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
