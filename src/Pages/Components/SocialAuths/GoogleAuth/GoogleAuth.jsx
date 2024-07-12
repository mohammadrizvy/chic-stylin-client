import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleAuth = () => {
  const handleGoogleLogin = () => {
    alert("The google feature is yet to come")
    console.log("Google");
  };

  return (
    <div>
      <FaGoogle
        onClick={handleGoogleLogin}
        className="text-3xl cursor-pointer"
      />
    </div>
  );
};

export default GoogleAuth;
