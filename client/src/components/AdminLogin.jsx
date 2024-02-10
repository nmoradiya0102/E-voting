import logo from './user/User-tool/image/e-election-vertical.png'
import formlogo from './user/User-tool/image/form logo.png'
import "./user/User-tool/User.css"
import './user/User-tool/userResponsive.css'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ADMIN_LOGIN, BASE_URL } from '../redux_saga/constant'
import Cookies from 'js-cookie'

const AdminLogin = () => {

  const name = useRef()
  const password = useRef()
  const handleLogin = () => {
    const data = {
      name: name.current.value,
      password: password.current.value
    }
    console.log(data);
    axios.post(BASE_URL + ADMIN_LOGIN, data).then((res) => {
      console.log(res);
      Cookies.set("role", res.data.data.role)
      Cookies.set("name", res.data.data.name)
      window.location = "/"
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <div className='row user-login'>
        <div className='col-6 l-1 e-logo'>
          <img src={logo} className='w-25' alt='e-election-vertical-logo' />
        </div>
        <div className='col-6 e-form e-logo'>
          <div className='form'>
            <center>
              <div className='mb-3 formlogo'>
                <img src={formlogo} />
              </div>
            </center>
            <p>Admin Login</p>
            <div className="form-group">
              <label>Username </label>
              <input type="text" placeholder='Username' className="form-control" ref={name} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder='Password' className="form-control" ref={password} />
            </div>
            <button className='btn w-100 btn-primary'  onClick={handleLogin}>Login</button>
            <button className='btn btn-light w-100'><Link className='login-text-send' to={"/"}>User Login</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin