import React from "react";
import { Link } from "react-router-dom";

export default function RenderData({
  contact,
  handleEditClick,
  handleDelete,
  id,
}) {
  return (
    <>
      <div className="container">
        <button className="btn" style={{ marginBottom: 10 }} type="click">
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

        <p>Name: {contact.name}</p>

        <p>Address_Line 1: {contact.addressOne}</p>

        <p>Address_Line 2: {contact.addressTwo}</p>

        <p>City: {contact.city}</p>

        <p>County: {contact.county}</p>

        <p>Postcode: {contact.postcode}</p>

        <p>Telephone: {contact.telephone}</p>

        <p>Email: {contact.email}</p>
        <div className="btn-wrapper">
          <button
            className="btn"
            type="click"
            onClick={(event) => handleEditClick(event, contact)}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            type="click"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
