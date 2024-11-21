import React, { useState } from "react";
import Login from "../components/Auth/Login";
import { data } from "autoprefixer";
import { setLocalStorage } from "../utils/localStorage";

const Header = () => {
  const logoutUser = () => {
    // setLocalStorage{'loggedInUser',}
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };
  //   const logoutBtn = () => {
  //     return <Login />;
  //     console.log("its pressing");
  //   };
  //   const [isLoggedIn, setIsLoggedIn] = useState(true);
  //   const logoutBtn = () => {
  //     setIsLoggedIn(false);
  //   };
  // console.log("data firstname", data.firstName);

  // const [username, setUsername] = useState("");
  // if (!data) {
  //   setUsername("admin");
  // } else {
  //   setUsername(data.firstName);
  // }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl font-semibold ">username👋</span>
      </h1>
      {/* {isLoggedIn ? (
        <button
          onClick={logoutBtn}
          className="bg-red-500 px-5 py-2 rounded-sm text-lg font-medium text-white"
        >
          Log Out
        </button>
      ) : (
        <Login />
      )} */}
      <button
        onClick={logoutUser}
        className="bg-red-500 px-5 py-2 rounded-sm text-lg font-medium text-white"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
