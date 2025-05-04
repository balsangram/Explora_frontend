import React from "react";
import "./forgotten.css";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/button/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigate } from "react-router-dom";
// import { login } from "../../store/userSlice";

function Forgotten() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="authentication">
      <div className="forgot">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            type="text"
            name="name"
            placeholder="Enter your email, phone number or username"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <CustomButton type="submit">Send Login Link</CustomButton>
        </form>
        <p
          onClick={() =>
            navigate("/auth/authenticate", { state: { login: false } })
          }
        >
          Create New Account
        </p>
        <p
          onClick={() =>
            navigate("/auth/authenticate", { state: { login: true } })
          }
        >
          Back To Login
        </p>
      </div>
    </div>
  );
}

export default Forgotten;
