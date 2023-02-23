import { Link } from "react-router-dom"

export const CreateUserPage = () => {
  return (
    <div className="main-container">
      <form action="" method="POST">
        <div>
          {/* Imagen de registro */}
          <Link to="/users"><i className="fa fa-arrow-left" aria-hidden="true"></i> Regresar</Link>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Last Name" />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enterprise" />
        </div>
        <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <button className="btn btn-block btn-primary"><i className="fas fa-save"></i> Crear</button>
        </div>
      </form>
    </div>
  )
}