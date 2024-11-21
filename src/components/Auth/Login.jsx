import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    //Two way binding
    e.preventDefault();
    console.log("Your email is ", email);
    console.log("Your password is ", password);
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  //   console.log(handleLogin);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" border-2 rounded-md border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-[#FFFDD0] outline-none bg-transparent placeholder:text-[FFFDD0]"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-[#FFFDD0] outline-none bg-transparent placeholder:text-[] mt-3"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-emerald-500 w-full mt-5 rounded-3xl h-12 text-white font-semibold text-xl">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
