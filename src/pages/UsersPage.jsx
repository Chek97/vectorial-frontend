

export const UsersPage = () => {
  return (
    <div className="main-container">
      <header>
        <h1>Lista De Usuarios Activos</h1>
      </header>
      <div>
        <button className="btn btn-success"><i className="fa fa-plus-circle" aria-hidden="true"></i> Nuevo Usuario</button>
      </div>
      <div className="list-container">
        <table>
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
            <tr>
              <td>1</td>
              <td>Cristian</td>
              <td>Checa</td>
              <td>Proceso</td>
              <td>felychk203@hotmail.com</td>
              <td>
                <a href="#" className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
