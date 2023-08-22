import React from "react";
import EditProfile from "./EditProfile";
import ProfileCard from "./ProfileCard";

const UserProfile = () => {
  return (
    <div
      className="user-profile m-5"
      style={{ fontFamily: "Nunito Sans-Regular, Helvetica" }}
    >
      <div className="row" style={{ flexDirection: "row-reverse" }}>
        <div className="col-md-4 mb-5">
          <ProfileCard />
        </div>
        <div className="col-md-8">
          <EditProfile />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
