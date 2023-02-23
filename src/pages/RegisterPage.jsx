import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div className="main-container">
      <form action="" method="POST" className="form-container">
        <header className="title-container mb-4">
          <h1>Registrar Usuario</h1>
        </header>
        <div className="form-group input-group-lg d-flex mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text input-icon" id="basic-addon1">
              <i class="fa fa-user" aria-hidden="true"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="username" />
        </div>
        <div className="form-group input-group-lg d-flex mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text input-icon" id="basic-addon1">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <input type="email" className="form-control" placeholder="email" />
        </div>
        <div className="form-group input-group-lg d-flex mb-5">
          <div class="input-group-prepend">
            <span class="input-group-text input-icon" id="basic-addon1">
              <i class="fa fa-key" aria-hidden="true"></i>
            </span>
          </div>
          <input type="password" className="form-control" placeholder="password" />
        </div>
        <div className='mt-3 mb-5'>
          <button type="submit" className="btn btn-block btn-action">Registrar</button>
        </div>
        <div>
          <Link to="/" className='redirect-link'>Iniciar Session</Link>
        </div>
      </form>
    </div>
  )
}
