import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //   const [userData, setUserData] = useState(null);
  // localStorage.clear;
  const [userData, setUserData] = useState({ empData: [], adminData: null });

  const data = getLocalStorage();
  console.log("data in auth context", data);

  //   setUserData(getLocalStorage());

  useEffect(() => {
    // const { employee, admin } = getLocalStorage();
    // setUserData({ employee, admin });
    setLocalStorage();
    const { empData, adminData } = getLocalStorage();
    setUserData({ empData, adminData });
  }, []);

  //   console.log(data.adminData);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
