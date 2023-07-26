import React from "react";
import "./NotFound.css"

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="error-code">404</h1>
      <h3 className="error-message">Page not found</h3>
    </div>
  );
}

export default NotFound;
