import React from "react";
import "./profile.css";
import profileImg from "../../assets/profile/profile.jpg";

function Profile() {
  return (
    <div className="profile">
      <div className="profile_banner">
        <img className="profile_img" src={profileImg} alt="" />
        <h1></h1>
      </div>
      <div className="profile_details">
        <p>
          <span>Name : </span>Sangram Bal
        </p>
        <p>
          <span>Email : </span> balsangram@gmail.com
        </p>
        <p>
          <span>Phone No : </span> 6370404471
        </p>
        <p>
          <span>Location : </span>
        </p>
        <p>
          <span>Languages : </span>
        </p>
        <p>
          <span>Hobbies : </span>
        </p>
        <p>
          <span>Gender : </span>
        </p>
        <p>
          <span>Date Of Birth : </span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
