import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const { username, password } = form;

  const onHandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const onHandleSubmit = async(e) => {
    e.preventDefault();
    //Validar campos
    if(form.username.length === 0 && form.password === 0){
      console.log("el usuario o la contraseña esta vacia");
    }else{
      try {
        const request = await fetch('http://localhost:4000/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(form),
          headers:{
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
    </div>
  )
}
