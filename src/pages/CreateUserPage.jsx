import { useState } from 'react';
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export const CreateUserPage = () => {

  const { token } = JSON.parse(localStorage.getItem("user")) || "";

  const [form, setForm] = useState({
    name: '',
    lastName: '',
    company: '',
    email: ''
  });

  const { name, lastName, company, email } = form;

  const onHanldeChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const notification = (ok) => ok ? toast.success("!!!Usuario creado con exito!!!", {
    duration: 3000,
    position: 'top-center'
  }) : toast.error("No fue posible crear al usuario", {
    duration: 3000,
    position: 'top-center'
  });

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    
    if(form.name === "" || form.lastName === "" || form.company === "" || form.email === ""){
      notification(false);
    }else{
      try {
        const request = await fetch('http://localhost:4000/api/users/create', {
          method: 'POST',
          body: JSON.stringify(form),
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
  }

  return (
    <div className="main-container">
      <form method="POST" className="form-container" onSubmit={onHandleSubmit}>
        <div className='logo-container'>
          <i className="fa fa-user-plus logo-plus" aria-hidden="true"></i>
        </div>
        <div className="form-group input-group-lg d-flex mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name='name'
            onChange={onHanldeChange}
            value={name}
          />
        </div>
        <div className="form-group input-group-lg d-flex mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name='lastName'
            onChange={onHanldeChange}
            value={lastName}
          />
        </div>
        <div className="form-group input-group-lg d-flex mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enterprise"
            name='company'
            onChange={onHanldeChange}
            value={company}
          />
        </div>
        <div className="form-group input-group-lg d-flex mb-4">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name='email'
            onChange={onHanldeChange}
            value={email}
          />
        </div>
        <div className="form-group input-group-lg d-flex mb-4">
          <button className="btn btn-block btn-action"><i className="fas fa-save"></i> Crear</button>
        </div>
        <div>
          <Link to="/users" className='btn redirect-link'><i className="fa fa-arrow-left" aria-hidden="true"></i> Regresar</Link>
        </div>
      </form>
      <Toaster />
    </div>
  )
}