import React from 'react'
import image from "./image/img.svg"

const Login = () => {
  return (
    <>
    <div className='login-container'>
  
      <div><img className='login-image' src={image} alt="" srcset="" /></div>
      <p className='h5' >Palmfit</p>
      <div><h1 className='login-text'>Login to your account</h1>
      <div className='form-container'>
      <form action="">
        <div>
        <label className='Email' htmlFor="Email address">Email address</label>
        </div>
        <div>
        <input className="email-input" placeholder='Enter your email address' type="text" name="" id="" />
        </div>
        <div>
        <label className='Email' htmlFor="Email address">Password</label>
        </div>
        <div>
        <input className="password-input" placeholder='Enter your password' type="text" name="" id="" />
        <p className='forget-password'>Forget password?</p>
        </div>
      </form>
      <div>
        <button className='login-button'>Login</button>
        <p>Don't have an account? <b><a className='link' href="register" >Register</a></b></p>
      </div>
    </div>
      </div>
    
    </div>
    
    </>
  )
}

export default Login

