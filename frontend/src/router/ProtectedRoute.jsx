import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectUserLoggedInUser,
} from "../features/auth/AuthSlice";

const ProtectedRoute = ({ children }) => {
//   const userInfo = useSelector(selectUserInfo);

  const user = useSelector(selectUserLoggedInUser);

//   console.log(userInfo);

  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  if (user && user.user?.role !== "admin") {
    return <Navigate to="/" replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
