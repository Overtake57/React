import React, { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Message from "./Message";

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useStat(false);
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };
  let button;
  if (isLoggedIn) {
    button = <LogoutButton />;
  } else {
    button = <LoginButton />;
  }
  return (
    <div>
      <Message isLoggedIn={isLoggedIn} />
    </div>
  );
};
