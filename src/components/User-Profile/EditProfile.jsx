import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import styled from "styled-components";

// .pay-now-container input {
//   border-radius: 5px;
//   width: 100%;
//   padding: 10px;
//   margin-top: 5px;
//   border: 1px solid var(--grey, #B3BABA);
//   background: #FFF;
//   height: 2rem;

// }

const EditProfile = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "John",
    username: "Doe",
    aboutMe: ""
    // ... other fields
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value
    }));
  };

  const editButtonColor = "#1A8D8D";
  const StyledInput = styled.input`
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid var(--grey, #b3baba);
    background: #fff;
    height: 3rem;
  `;

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <StyledInput
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <StyledInput
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <StyledInput
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <StyledInput
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <StyledInput
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter your address"
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <StyledInput type="text" className="form-control" id="city" />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <StyledInput type="text" className="form-control" id="country" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="postalCode" className="form-label">
            Postal Code
          </label>
          <StyledInput type="text" className="form-control" id="postalCode" />
        </div>
        <div className="mb-3">
          <label htmlFor="aboutMe" className="form-label">
            About Me
          </label>
          <textarea className="form-control" id="aboutMe" rows="4"></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: editButtonColor,
            borderRadius: "5px"
          }}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;

{
  /* <ProfileCard
        fullName={userInfo.fullName}
        username={userInfo.username}
        aboutMe={userInfo.aboutMe}
      /> */
}
