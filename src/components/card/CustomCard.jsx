import { Heart, MessageCircle, Save, Share2 } from "lucide-react";
import React from "react";
import "./customerCard.css";

function CustomCard({
  userProfile,
  userName,
  title,
  body,
  img,
  view,
  description,
}) {
  return (
    <div className="card_border">
      <div className="card_heading">
        <img className="heading_img" src={userProfile} alt="" />
        <p className="heading_userName">{userName}</p>
      </div>
      <p className="card_title">{title}</p>
      <p className="card_body">{body}</p>
      <img className="body_img" src={img} alt="" />
      <div className="card_icons">
        <div className="icon_left">
          <Heart />
          <MessageCircle />
          <Share2 />
        </div>
        <div className="icon_right">
          <Save />
        </div>
      </div>
      <p className="card_view">{view} views</p>
      <p className="card_description">{description}</p>
      <input type="text" />
    </div>
  );
}

export default CustomCard;
