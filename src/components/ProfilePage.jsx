import React from 'react'
import '../styles/ProfilePage.css'
import facebookLogo from '../images/logos_facebook.svg';
import twitterLogo from '../images/logos_twitter.svg';
import whatsappLogo from '../images/logos_whatsapp.svg';


export default function ProfilePage () {
  return (
    <div className="element">
        <div className="profileholder">
            <h2 className="profiletag">Profile</h2>
            <div className="topholder">
                <div className="leftTop">
                    <h4>Account Settings</h4>
                    <span>These are your account information used to keep 
                        your account secure and send you notifications.
                    </span>
                </div>
                <div className="rightTop">
                    <div className="password">
                        <div className="oldpass">
                            <h3>Old Password</h3>
                            <input className="form-control p-2 me-2" type="text" />
                        </div>
                        <div className="newpass">
                            <h3>New Password</h3>
                            <input className="form-control p-2 me-2"  type="text" />
                        </div>
                    </div>

                    <div className="email">
                        <h3>Email Address</h3>
                        <input className="form-control p-2" type="text" placeholder='Enter your email address'/>
                    </div>

                    <div className="changePass">
                        <h3>Password</h3>
                        <button className="btn-teal">Change your password</button>
                    </div>
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

                        <a className="copy-link" onclick="copyReferralLink()">Copy link</a>
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
  )
}
