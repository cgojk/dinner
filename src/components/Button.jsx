import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  className = "",
  size = "medium",
  variant = "primary",
  to,
  onClick,
}) {
  const allClasses = `
    button
    button--${variant}
    button--${size}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={allClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={allClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
}