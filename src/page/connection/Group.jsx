import React from "react";
import CustomeMessage from "../../components/customeMessage";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import "./group.css";

function Group() {
  return (
    <div className="group">
      <CustomeMessage message="hello" />
      <CustomeMessage message="hi" />
      <div>
        <CustomInput type="text" name="text" placeholder="Message" />
        <CustomButton>send</CustomButton>
      </div>
    </div>
  );
}

export default Group;
