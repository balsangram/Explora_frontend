import React from "react";
import CustomCard from "../../components/card/CustomCard";
import "./social.css";
import profileImg from "../../assets/profile/profile.jpg";
import img from "../../assets/img/pexels-pixabay-60597.jpg";

function Social() {
  return (
    <div className="social_home">
      {/* Social */}
      {/* <CustomCard title="hello" body="how are you" /> */}
      <CustomCard
        userProfile={profileImg}
        userName="sangram"
        img={img}
        description="its so important "
      />
      <CustomCard
        userProfile={profileImg}
        userName="sangram"
        title="hello"
        body="jdsvnkj"
        description="its so important "
      />
      <CustomCard userProfile={profileImg} userName="sangram" img={img} />
      <CustomCard userProfile={profileImg} userName="sangram" img={img} />
      <CustomCard userProfile={profileImg} userName="sangram" img={img} />
    </div>
  );
}

export default Social;
