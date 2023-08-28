import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBadge
}
from 'mdb-react-ui-kit';

function Login() {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate('/register')
  }
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })
  const handlechange = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    const storedata = JSON.parse(localStorage.getItem('user'))
    const finduser = storedata.find((item) => item.username === login.username && item.password === login.password)
    console.log(finduser);
    if (finduser) {
      localStorage.setItem('login', JSON.stringify(finduser))
      navigate(`/dashboard/${finduser.role}`)
    } else {
      alert('invalid credention')
    }
  }

  return (
    <>

      <div className='container border border-black mt-5'>
        <div className='row mt-5'>
          <div className='col-6'>
          <MDBCardImage src='https://officesnapshots.com/wp-content/uploads/2020/09/ati-architects-offices-dubai.jpg' alt="login form" className='rounded-start w-100 img-thumbnail mb-5' />
          </div>

          <div className='col-6 mt-5'>
            <form onSubmit={handlesubmit}>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example1">Username</label>
                <input type="text" id="form2Example1" className="form-control" name='username' required value={login.username} onChange={handlechange} />
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" className="form-control" name='password' required value={login.password} onChange={handlechange} />
              </div>

              {/* <!-- Submit button --> */}
              <div className='text-center'>
                <button type="submit" className="btn btn-primary btn-lg btn-block mb-4 ">Sign in</button>
              </div>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <span>Not Registered Yet?</span>
                <Button onClick={handleRegister}>register</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login