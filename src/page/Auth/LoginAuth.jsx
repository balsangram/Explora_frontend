import React from "react";
import CustomButton from "../../components/button/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";
import CustomSelect from "../../components/CustomSelect";
import "../authentication.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import "./login.css";

function LoginAuth({ setExist }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onError = (error) => {
    console.log(error, "error");
  };

  const onSubmit = (data) => {
    console.log("data", data);

    const { role, name, password } = data;
    const input = name?.trim();

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

    const validUsers = {
      user: {
        userName: "user1",
        email: "user@gmail.com",
        password: "user1234",
      },
      admin1: {
        userName: "admin1",
        email: "admin@gmail.com",
        password: "admin1234",
      },
      guide1: {
        userName: "guide1",
        email: "guide@gmail.com",
        password: "guide1234",
      },
    };

    const selectedUser = validUsers[role];

    if (!selectedUser) {
      alert("Invalid role selected!");
      return;
    }

    if (isEmail) {
      if (input === selectedUser.email && password === selectedUser.password) {
        loginSuccess(input);
      } else {
        alert("Invalid email or password!");
      }
    } else {
      if (
        input === selectedUser.userName &&
        password === selectedUser.password
      ) {
        loginSuccess(input);
      } else {
        alert("Invalid username or password!");
      }
    }

    function loginSuccess(input) {
      localStorage.setItem("token", "dummy-token");
      dispatch(login(input));
      navigate("/");
    }
  };

  return (
    <div className="">
      <div className="login">
        <h1>Explorer</h1>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <CustomSelect {...register("role")} name="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="guide">Guide</option>
          </CustomSelect>

          <CustomInput
            type="text"
            name="name"
            placeholder="Enter your email or username"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <CustomInput
            type="password"
            name="password"
            placeholder="Enter your password"
            {...register("password", { required: "This field is required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <CustomButton type="submit">Login</CustomButton>
        </form>

        <p onClick={() => navigate("/auth/forgot_password")}>
          Forgotten your password?
        </p>
      </div>
      <div className="login">
        <p>
          Don’t have an account?{" "}
          <span onClick={() => setExist(false)}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default LoginAuth;
