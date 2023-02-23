import { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = form;

  const onHanldeChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const response = await request.json();
      console.log(response);
      localStorage.setItem("user", JSON.stringify({
        user: response.user,
        token: response.token
      }));

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-container">
      <form onSubmit={onHandleSubmit} method="POST" className="form-container">
        <header className="title-container mb-4">
          <h1>Registrar Usuario</h1>
        </header>
        <div className="form-group input-group-lg d-flex mb-4">
          <div className="input-group-prepend">
            <span className="input-group-text input-icon" id="basic-addon1">
              <i className="fa fa-user" aria-hidden="true"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            value={username}
            onChange={onHanldeChange}
          />
        </div>
        <div className="form-group input-group-lg d-flex mb-4">
          <div className="input-group-prepend">
            <span className="input-group-text input-icon" id="basic-addon1">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            name="email"
            value={email}
            onChange={onHanldeChange}
          />
        </div>
        <div className="form-group input-group-lg d-flex mb-5">
          <div className="input-group-prepend">
            <span className="input-group-text input-icon" id="basic-addon1">
              <i className="fa fa-key" aria-hidden="true"></i>
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            name="password"
            value={password}
            onChange={onHanldeChange}
          />
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
