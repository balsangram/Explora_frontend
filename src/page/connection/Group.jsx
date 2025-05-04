import React from "react";
import CustomeMessage from "../../components/message/CustomeMessage";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import "./group.css";
import PersonalMessage from "../../components/message/PersonalMessage";
function Group() {
  return (
    <div className="group">
      <CustomeMessage message="hello" />
      <CustomeMessage message="hi" />
      <PersonalMessage message="mangao" />
      <div className="send_message">
        <CustomInput
          className="group_input input_full"
          type="text"
          name="text"
          placeholder="Message"
        />
        <CustomButton>send</CustomButton>
      </div>
    </div>
  );
}

export default Group;
