import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UsersPage = () => {

  const [users, setUsers] = useState([]);
  const { token } = JSON.parse(localStorage.getItem("user")) || "";

  const onHanldleDelete = async(e, id) => {
    try {
      const request = await fetch(`http://localhost:4000/api/users/admin_delete_user/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token
          }
        });
        const response = await request.json();
        console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      const request = await fetch('http://localhost:4000/api/users/admin_list_active_users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-token': token
        }
      });
      const response = await request.json();
      setUsers(response.users);
    }
    getUsers();
  }, [users]);

  return (
    <div className="main-container">
      <div className="users-container">
        <header className="title-container mb-4">
          <h1>Lista De Usuarios Activos</h1>
        </header>
        <div className="mt-4 mb-4">
          <Link to="/users/create" className="btn btn-action btn-md p-2">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Nuevo Usuario
          </Link>
        </div>
        <div className="list-container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Empresa</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.company}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className="btn btn-danger" onClick={(e) => onHanldleDelete(e, user._id)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
