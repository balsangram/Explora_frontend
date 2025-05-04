import { Heart, MessageCircle, Save, Share2 } from "lucide-react";
import React, { useState } from "react";
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
  const [comment, setComment] = useState("");

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && comment.trim() !== "") {
      console.log("Comment send:", comment);
      setComment("");
    }
  }
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
      <input
        className="card_comment"
        type="text"
        placeholder="Write a comment..."
        value={comment}
        onChange={handleCommentChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default CustomCard;
