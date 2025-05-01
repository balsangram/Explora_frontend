import React, { useState } from "react";
import CustomButton from "../../components/button/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";

function RegisterAuth({ setExist }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const [isUser, setIsUSer] = useState(true);

  const userForm = () => {
    setIsUSer(true);
  };

  const GuideForm = () => {
    setIsUSer(false);
  };
  return (
    <div className="authentication">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="USerTypeChangeBTN">
          <CustomButton onClick={userForm}>User</CustomButton>
          <CustomButton onClick={GuideForm}>Guide</CustomButton>
        </div>

        {isUser ? (
          <>
            <CustomInput
              type="text"
              name="phoneNo"
              {...register("phoneNo")}
              placeholder="Enter your phoneNo"
            />
          </>
        ) : (
          <>
            <CustomInput
              type="text"
              name="AdharNo"
              {...register("AdharNo")}
              placeholder="Enter your AdharNo"
            />
          </>
        )}
        <CustomInput
          type="userName"
          name="userName"
          {...register("userName")}
          placeholder="Enter your userName"
        />
        <CustomInput
          type="email"
          name="email"
          {...register("email")}
          placeholder="Enter your email"
        />
        <CustomInput
          type="password"
          name="password"
          {...register("password")}
          placeholder="Enter the password"
        />
        <CustomInput
          type="conformPassword"
          name="conformPassword"
          {...register("conformPassword")}
          placeholder="Enter the cunformPassword"
        />
        <CustomButton disabled={false} delayDuration={3000}>
          Register
        </CustomButton>
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={() => setExist(true)} className="">
          Login
        </span>
      </p>
    </div>
  );
}

export default RegisterAuth;
