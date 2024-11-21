import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   setLocalStorage();
  // }, []);

  const [user, setUser] = useState(null);

  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);
  // console.log("Authdata", authData);
  // console.log("Auth data edmin", authData.adminData);
  // console.log("Auth data emp", authData.empData);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //       // console.log("Set USer is", setUser);
  //     }
  //   }
  // }, [authData]);

  // console.log("Find function", authData.empData.find("eemployee1@example.com"));

  // console.log("HEllo");

  // console.log(
  //   "This is emp data",
  //   authData.empData.find((e) => email === e.email && e.password === password)
  // );
  // console.log(authdas);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    // console.log(loggedInUser);
    if (loggedInUser) {
      // console.log("user logged in ");
      const userData = JSON.parse(loggedInUser);
      console.log(userData);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
      console.log("logged in userdata", loggedInUserData);
    }
  }, []);
  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.adminData.find(
        (e) => email === e.email && password === e.password
      )
    ) {
      console.log("This is admin");
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.empData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        console.log("This is user");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );

        // setUser("employee");
        setUser("employee");
        setLoggedInUserData(employee);
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  // const data = useContext(AuthContext);
  // console.log(data);

  // handleLogin("user@me.com", "123");

  return (
    <div className="bg-[#1c1c1c] h-screen">
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard data={loggedInUserData} />}
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </div>
  );
};

export default App;
