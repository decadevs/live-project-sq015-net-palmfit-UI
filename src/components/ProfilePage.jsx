import React, { useState } from 'react';
import '../styles/ProfilePage.css';
import facebookLogo from '../images/logos_facebook.svg';
import twitterLogo from '../images/logos_twitter.svg';
import whatsappLogo from '../images/logos_whatsapp.svg';

export default function ProfilePage() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');
  const [chageStatus, setChageStatus] = useState(null);


  const handleChangePassword = () => {
    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      email: email
    };

    const apiUrl = "https://palmfit-test.onrender.com/api/Auth/password-reset";
    fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          setChageStatus(response.data.message);
          console.log("Password changed successfully!");
        } else {
          setChageStatus(response.data.message);
          console.error("Password change failed!");
        }
      })
      .catch(error => {
        console.error("An error occurred:", error);
    } );
  };

  return (
    <div className="element">
      <div className="profileholder">
        <h2 className="profiletag">Profile</h2>
            <div className="topholder">
                <div className="rightTop">
                    <div className="password">
                    <div className="oldpass">
                        <h3>Old Password</h3>
                        <input
                        className="form-control p-2 me-2"
                        type="password"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                        />
                    </div>
                    <div className="newpass">
                        <h3>New Password</h3>
                        <input
                        className="form-control p-2 me-2"
                        type="password"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="email">
                <h3>Email Address</h3>
                <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </div>

                <div className="changePass">
                <button className="btn-teal" onClick={handleChangePassword}>
                    Change your password
                </button>
                </div>
                <span>Status: {chageStatus}</span>
            </div>
        </div>
        

        <div className="buttomholder">
                <div className="leftbutt">
                    <h3>Referral</h3>
                    <span>Refer your friends and let them join you on this journey.</span>
                </div>
                <div className="rightbutt">
                    <h3>Share referral link</h3>
                    <div className="linkHolder">
                        <div className="referralLink">
                        palmfit.com/referrals=1579292074940
                        </div>

                    </div>
                    <div className="socials">
                        <a href="https://www.facebook.com/yourfacebookprofile" target="_blank" rel="noopener noreferrer">
                        <img className="logos-facebook" alt="Logos facebook" src={facebookLogo} />
                        </a>
                        <a href="https://www.twitter.com/yourtwitterprofile" target="_blank" rel="noopener noreferrer">
                        <img className="logos-twitter" alt="Logos twitter" src={twitterLogo} />
                        </a>
                        <a href="https://api.whatsapp.com/send?07033027118" target="_blank" rel="noopener noreferrer">
                        <img className="logos-whatsapp" alt="Logos whatsapp" src={whatsappLogo} />
                        </a>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}
