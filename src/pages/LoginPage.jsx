import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const LoginPage = () => {

  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const { username, password } = form;

  const onHandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const notification = (ok) => ok ? toast.success("!!!Login Exitoso!!!", {
    duration: 3000,
    position: 'top-center'
  }) : toast.error("!Usuario y(o) contraseña incorrectas", {
    duration: 3000,
    position: 'top-center'
  });

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (form.username === "" || form.password === "") {
      notification(false);
    } else {
      try {
        const request = await fetch('http://localhost:4000/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const response = await request.json();

        notification(response.ok);

        localStorage.setItem("user", JSON.stringify({
          user: response.user,
          token: response.token
        }));

        if (response.ok !== false) {
          setTimeout(() => {
            navigate("/users");
          }, 4000);
        }

      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="main-container">
      <form method="POST" className='form-container' onSubmit={onHandleSubmit}>
        <div className='logo-container'>
          <i className="fa fa-user logo" aria-hidden="true"></i>
        </div>
        <div className="form-group input-group-lg d-flex mb-4">
          <div className="input-group-prepend">
            <span className="input-group-text input-icon" id="basic-addon1">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name='username'
            value={username}
            onChange={onHandleChange}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="form-group input-group-lg  d-flex mb-5">
          <div className="input-group-prepend">
            <span className="input-group-text input-icon" id="basic-addon1">
              <i className="fa fa-key" aria-hidden="true"></i>
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            name='password'
            value={password}
            onChange={onHandleChange}
          />
        </div>
        <div className='mt-3 mb-5'>
          <button type="submit" className="btn btn-block btn-action">Login</button>
        </div>
        <div className='p-2'>
          <Link to="/register" className='redirect-link'>Registrate</Link>
        </div>
      </form>
      <Toaster />
    </div>
  )
}
