import React from "react";
import "./customfriend.css";

function CustomFriend({ profile, name, message, time }) {
  return (
    <div className="custom_friend">
      <img src={profile} alt={name} className="friend_profile" />
      <div className="friend-info">
        <div className="friend_name">{name}</div>
        <div className="message_time">
          <div className="friend-message">{message}</div>
          <div className="friend_time">{time}</div>
        </div>
      </div>
    </div>
  );
}

export default CustomFriend;
