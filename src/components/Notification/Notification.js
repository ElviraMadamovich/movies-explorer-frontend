import React from "react";
import "./Notification.css";

function Notification({ errorText }) {
  return <p className="notification__error">{errorText}</p>;
}

export default Notification;
