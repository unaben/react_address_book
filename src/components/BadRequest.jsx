import React from "react";
import { Link } from "react-router-dom";

export default function BadRequest() {
  const requestStyle = {
    minHeight: "60vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const btnStyle = {
    display: "flex",
    justifyContent: "end",
  };

  return (
    <>
      <div style={btnStyle}>
        <button className="btn" style={{ margin: 20 }} type="click">
          <Link
            style={{
              listStyleType: "none",
              textDecoration: "none",
              color: "white",
            }}
            to="/"
          >
            Back To form
          </Link>
        </button>
      </div>
      <div style={requestStyle}>
        <div>
          <h2>Error 404 - Invalid request</h2>
        </div>
        <h2>Enter a valid postcode to continue...</h2>
      </div>
    </>
  );
}
