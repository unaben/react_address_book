import React from "react";

export default function EditInputForm({
  editContactData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
}) {
  console.log("here: ", editContactData);
  return (
    <div className="container center">
      <input
        type="text"
        placeholder="Enter name..."
        name="name"
        value={editContactData.name}
        onChange={handleEditFormChange}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Enter address line 1..."
        name="addressOne"
        value={editContactData.addressOne}
        onChange={handleEditFormChange}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Enter address line 2..."
        name="addressTwo"
        value={editContactData.addressTwo}
        onChange={handleEditFormChange}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Enter city..."
        name="city"
        value={editContactData.city}
        onChange={handleEditFormChange}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Enter county..."
        name="county"
        value={editContactData.county}
        onChange={handleEditFormChange}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Enter postcode..."
        name="postcode"
        value={editContactData.postcode}
        onChange={handleEditFormChange}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Enter telephone number..."
        name="telephone"
        value={editContactData.telephone}
        onChange={handleEditFormChange}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Enter email..."
        name="email"
        value={editContactData.email}
        onChange={handleEditFormChange}
      ></input>
      <div className="btn-wrapper space-top">
        <button className="btn" type="submit" onClick={handleEditFormSubmit}>
          Update
        </button>
        <button className="btn" type="submit" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
}
