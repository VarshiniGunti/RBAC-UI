import React, { useState } from "react";
import "/Users/varshini/Desktop/VRV Security/src/app.css";

function App() {
  const [users, setUsers] = useState([]);
  const [permissions, setPermissions] = useState([]);

  const addUser = () => {
    setUsers([
      ...users,
      {
        name: "New User",
        email: "new@example.com",
        role: "Admin",
        status: "Active",
        editing: false, // Add 'editing' state for each user
      },
    ]);
  };

  const addPermission = () => {
    setPermissions([
      ...permissions,
      {
        userName: "New User",
        role: "Admin",
        read: "Choose",
        write: "Choose",
        delete: "Choose",
        editing: false, // Add 'editing' state for each permission
      },
    ]);
  };

  const editRow = (index, listType) => {
    const list = listType === "users" ? [...users] : [...permissions];
    const isEditing = list[index].editing;
    list[index].editing = !isEditing;
    if (isEditing) {
      // Save the edited data (if necessary)
      // For example: handle changes in inputs here before switching back to non-editing mode
    }
    listType === "users" ? setUsers(list) : setPermissions(list);
  };

  const handleChange = (e, index, listType, field) => {
    const list = listType === "users" ? [...users] : [...permissions];
    list[index][field] = e.target.value;
    listType === "users" ? setUsers(list) : setPermissions(list);
  };

  const deleteRow = (index, listType) => {
    const list = listType === "users" ? [...users] : [...permissions];
    list.splice(index, 1);
    listType === "users" ? setUsers(list) : setPermissions(list);
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <h1>VRV Security - RBAC</h1>
        </div>
      </header>

      <main className="main-container">
        {/* User Management Section */}
        <section id="user-management" className="container">
          <h2>User Management</h2>
          <button className="add-btn" onClick={addUser}>
            +
          </button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    {user.editing ? (
                      <input
                        type="text"
                        value={user.name}
                        onChange={(e) => handleChange(e, index, "users", "name")}
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td>
                    {user.editing ? (
                      <input
                        type="email"
                        value={user.email}
                        onChange={(e) => handleChange(e, index, "users", "email")}
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td>
                    {user.editing ? (
                      <select
                        value={user.role}
                        onChange={(e) => handleChange(e, index, "users", "role")}
                      >
                        <option value="Admin">Admin</option>
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                      </select>
                    ) : (
                      user.role
                    )}
                  </td>
                  <td>
                    {user.editing ? (
                      <select
                        value={user.status}
                        onChange={(e) => handleChange(e, index, "users", "status")}
                      >
                        <option value="Inactive">Inactive</option>
                        <option value="Active">Active</option>
                      </select>
                    ) : (
                      user.status
                    )}
                  </td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => editRow(index, "users")}
                    >
                      {user.editing ? "Save" : "Edit"}
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteRow(index, "users")}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Permissions Management Section */}
        <section id="permissions-management" className="container">
          <h2>Permissions Management</h2>
          <button className="add-btn" onClick={addPermission}>
            +
          </button>
          <table>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Role</th>
                <th>Read</th>
                <th>Write</th>
                <th>Delete</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((permission, index) => (
                <tr key={index}>
                  <td>
                    {permission.editing ? (
                      <input
                        type="text"
                        value={permission.userName}
                        onChange={(e) => handleChange(e, index, "permissions", "userName")}
                      />
                    ) : (
                      permission.userName
                    )}
                  </td>
                  <td>
                    {permission.editing ? (
                      <input
                        type="text"
                        value={permission.role}
                        onChange={(e) => handleChange(e, index, "permissions", "role")}
                      />
                    ) : (
                      permission.role
                    )}
                  </td>
                  <td>
                    {permission.editing ? (
                      <select
                        value={permission.read}
                        onChange={(e) => handleChange(e, index, "permissions", "read")}
                      >
                        <option value="Enable">Enable</option>
                        <option value="Disable">Disable</option>
                      </select>
                    ) : (
                      permission.read
                    )}
                  </td>
                  <td>
                    {permission.editing ? (
                      <select
                        value={permission.write}
                        onChange={(e) => handleChange(e, index, "permissions", "write")}
                      >
                        <option value="Enable">Enable</option>
                        <option value="Disable">Disable</option>
                      </select>
                    ) : (
                      permission.write
                    )}
                  </td>
                  <td>
                    {permission.editing ? (
                      <select
                        value={permission.delete}
                        onChange={(e) => handleChange(e, index, "permissions", "delete")}
                      >
                        <option value="Enable">Enable</option>
                        <option value="Disable">Disable</option>
                      </select>
                    ) : (
                      permission.delete
                    )}
                  </td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => editRow(index, "permissions")}
                    >
                      {permission.editing ? "Save" : "Edit"}
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteRow(index, "permissions")}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer className="footer">
        RBAC UI Front Developer Intern Assignment by Gunti Varshini
      </footer>
    </div>
  );
}

export default App;