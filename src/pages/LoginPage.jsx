import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const { username, password } = form;
  
  return (
    <div className="main-container">
      <form method="POST" className='form-container'>
        <div className='logo-container'>
          <i className="fa fa-user logo" aria-hidden="true"></i>
        </div>
        <div className="form-group input-group-lg d-flex mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text input-icon" id="basic-addon1">
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="form-group input-group-lg  d-flex mb-5">
          <div class="input-group-prepend">
            <span class="input-group-text input-icon" id="basic-addon1">
              <i class="fa fa-key" aria-hidden="true"></i>
            </span>
          </div>
          <input type="password" className="form-control" placeholder="Contraseña" />
        </div>
        <div className='mt-3 mb-5'>
          <button type="submit" className="btn btn-block btn-action">Login</button>
        </div>
        <div className='p-2'>
          <Link to="/register" className='redirect-link'>Registrate</Link>
        </div>
      </form>
    </div>
  )
}
