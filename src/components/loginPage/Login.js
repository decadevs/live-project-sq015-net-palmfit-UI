import React, { useState } from 'react';
import "../../styles/SignUpPage1.css";
import SignUpBanner from '../../images/SignUpBanner.svg';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import the cookie library

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    
    const [error, setError] = useState('');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const isPasswordValid = passwordRegex.test(password);
    const isEmailValid = emailRegex.test(email);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            
            if (!isEmailValid) {
                setError('Please enter a valid email address.');
                setSuccessMessage('');
                return;
            }
            

            if (!isPasswordValid) {
                setError('Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.');
                setSuccessMessage('');
                return;
            }

            

            const response = await axios.post('https://localhost:7069/api/Auth/login', {
                email,
                password
            });
         
            if (response.data.succeeded) {
                // Access the Authorization header from the response headers
                const authorizationHeader = response.headers['authorization'];
                
                if (authorizationHeader) {
                    const token = authorizationHeader.replace('Bearer ', '');
                    console.log(token)
                    // Storing the token in a cookie with an expiry time of 1 day
                    Cookies.set('token', token, { expires: 1 });
                    
                }
              
                setError(''); // Clear any previous error
                setSuccessMessage(response.data.data);
            }
            else
            {
                setSuccessMessage('');
                setError(response.data.data); // Display the error message
            }
            

            // Clear input fields after successful login
            setEmail('');
            setPassword('');
            
            setError('');
        }
        catch (error)
        {
            if (error.response)
            {
                setSuccessMessage('');
                setError(error.response.data.data);  
            }
            else
            {
                setSuccessMessage('');
                console.error(error);
                setError('An error occurred during Login');
            }
        }
        finally
        {
            setLoading(false);
        }
    };


    return (
        <div className="wrapper">
            <form id="signup-form">
                <section>
                    <div className="inner">
                        <div className="image-holder">
                            <img src={SignUpBanner} alt="" height="600vh" width="100%" />
                        </div>
                        <div className="form-content">
                            <div className="form-header">
                                <h3 id="SignUp-H3">Login to Palmfit</h3>
                            </div>
                            {/* ... Other form elements ... */}
                           
                            <div className="form-row">
                                <div className="form-holder">
                                    <label><b>Email address</b></label>
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-holder">
                                    <label><b>Password</b></label>
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                
                                </div>
                            </div>
                            
                             
                            {/* Display error message */}
                            {error && <div className="form-holder" style={{ color: 'red', textAlign: 'center' }}>
                                <small><b>{error}</b></small>
                            </div>}
                            {/* Display success message */}
                            {successMessage && <div className="form-holder" style={{ color: 'green', textAlign: 'center' }}>
                                <small><b>{successMessage}</b></small>
                            </div>}
                            {/* Display loading spinner */}
                            {loading && <div className="form-holder" style={{ textAlign: 'center' }}>
                                <small>Loading...</small>
                            </div>}
                            <div className="form-row">
                                <div className="form-holder">
                                    <button
                                        className="btn btn-success form-control"
                                        type="submit"
                                        style={{ backgroundColor: 'rgb(26,141,141)', color: 'white', marginTop: '2vh' }}
                                        onClick={handleLogin}
                                        disabled={loading}
                                    >
                                       Login
                                    </button>
                                </div>
                            </div>
                            <div className="form-holder" style={{ textAlign: 'center' }}>
                                <label>
                                    <small><b> Dont have an account? <a href="#">Register</a></b></small>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
}

export default Login;
