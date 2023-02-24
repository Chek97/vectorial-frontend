import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export const UsersPage = () => {

  const [users, setUsers] = useState([]);
  const { token } = JSON.parse(localStorage.getItem("user")) || "";

  const notification = (ok) => ok ? toast.success("!!!Usuario eliminado con exito!!!", {
    duration: 3000,
    position: 'top-center'
  }) : toast.error("No fue posible eliminar al usuario", {
    duration: 3000,
    position: 'top-center'
  });

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
        notification(response.ok);
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
  }, []);

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
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-head">
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Empresa</th>
                  <th>Email</th>
                  <th className="text-center"><i className="fa fa-trash" aria-hidden="true"></i></th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, idx) => (
                    <tr key={user._id}>
                      <td>{idx + 1}</td>
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
      <Toaster />
    </div>
  )
}
