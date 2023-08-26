import React, { useState } from 'react';
// import '../styles/SignUpPage1.css';
// import SignUpBanner from '../images/SignUpBanner.svg';
import axios from 'axios';

function SignUpPage1() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [error, setError] = useState('');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const isPasswordValid = passwordRegex.test(password);
    const isEmailValid = emailRegex.test(email);

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            
            if (!isEmailValid) {
                setError('Please enter a valid email address.');
                return;
            }
            if (password !== verifyPassword) {
                setError('Passwords do not match');
                return;
            }

            if (!isPasswordValid) {
                setError('Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.');
                return;
            }

            

            const response = await axios.post('https://localhost:7069/api/SignUp/register', {
                firstName,
                lastName,
                email,
                password
            });

            // Handle the response here, e.g., show a success message to the user.
            console.log(response.data);

            // Clear input fields after successful registration
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setVerifyPassword('');
            setAgreeTerms(false);
            setError('');
        } catch (error) {
            // Handle API errors, e.g., show an error message to the user
            console.error('Error during registration:', error);
            setError('An error occurred during registration');
        }
    };

    return (
        <div className="wrapper">
            <form id="signup-form">
                <section>
                    <div className="inner">
                        <div className="image-holder">
                            {/* <img src={SignUpBanner} alt="" height="600vh" width="100%" /> */}
                        </div>
                        <div className="form-content">
                            <div className="form-header">
                                <h3 id="SignUp-H3">Register for Palmfit</h3>
                            </div>
                            {/* ... Other form elements ... */}
                            <div className="form-row">
                                <div className="form-holder">
                                    <label><b>First name</b></label>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-holder">
                                    <label><b>Last name</b></label>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
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
                                    <small> Must have uppercase, lowercase, number, special character.</small>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-holder">
                                    <label><b>Verify password</b></label>
                                    <input
                                        type="password"
                                        placeholder="Verify your password"
                                        className="form-control"
                                        value={verifyPassword}
                                        onChange={(e) => setVerifyPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="checkbox-circle">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={agreeTerms}
                                        onChange={() => setAgreeTerms(!agreeTerms)}
                                    />
                                    <small>I have read and understand the <a href="#">privacy policy</a> and <a href="#">terms and conditions</a></small>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            {/* Display error message */}
                            {error && <div className="form-holder" style={{ color: 'red', textAlign: 'center' }}>
                                <small><b>{error}</b></small>
                            </div>}
                            <div className="form-row">
                                <div className="form-holder">
                                    <button
                                        className="btn btn-success form-control"
                                        type="submit"
                                        style={{ backgroundColor: 'rgb(26,141,141)', color: 'white', marginTop: '2vh' }}
                                        onClick={handleRegister}
                                        disabled={!agreeTerms} // Disable button if terms are not agreed
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                            <div className="form-holder" style={{ textAlign: 'center' }}>
                                <label>
                                    <small><b> Already have an account? <a href="#">Login</a></b></small>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
}

export default SignUpPage1;
