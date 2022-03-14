import React from "react";

const BackIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="none"
    viewBox="0 0 48 48"
    className={className}
  >
    <circle cx="24" cy="24" r="22.5" stroke="#0D0E0E" strokeWidth="3"></circle>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="3"
      d="M22.97 13.049L12.253 23.767l10.719 10.719M13 24h25"
    ></path>
  </svg>
);

export default BackIcon;
