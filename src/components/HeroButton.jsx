import React from "react";
import { Link } from "react-router-dom";


export default function ArrowButton({
  children,
    to = "/"
}) {

  return (
    <Link to={to} className="button__container">
      <span className="hero__button">
        {children}
      </span>

   
    </Link>
  );
}