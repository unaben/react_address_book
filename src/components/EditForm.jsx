import React from "react";
import { useState, useContext } from "react";
import EditInputForm from "./EditInputForm";
import RenderData from "./RenderData";
import { AddressBookContext } from "../Contexts/AddressBookContext";
import { Link } from "react-router-dom";

export default function EditForm() {
  const { contacts, setContacts } = useContext(AddressBookContext);

  const [editContactData, setEditContactData] = useState({
    name: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    county: "",
    postcode: "",
    telephone: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    console.log("Inside handleEditFormChange Event: ", name, value);

    const newContactData = { ...editContactData };
    newContactData[name] = value;

    setEditContactData(newContactData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const contactToUpdate = {
      id: editContactId,
      name: editContactData.name,
      addressOne: editContactData.addressOne,
      addressTwo: editContactData.addressTwo,
      city: editContactData.city,
      county: editContactData.county,
      postcode: editContactData.postcode,
      telephone: editContactData.telephone,
      email: editContactData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);
    console.log("Index: ", index);

    newContacts[index] = contactToUpdate;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    console.log("handleEditClick: ", contact);
    setEditContactId(contact.id);

    const contactInfo = {
      name: contact.name,
      addressOne: contact.addressOne,
      addressTwo: contact.addressTwo,
      city: contact.city,
      county: contact.county,
      postcode: contact.postcode,
      telephone: contact.telephone,
      email: contact.email,
    };

    setEditContactData(contactInfo);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDelete = (id) => {
    const updatedContact = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContact);
  };

  return (
    <>
      <div className="home_btn">
        <button className="btn" type="click">
          <Link
            to="/"
            style={{
              listStyleType: "none",
              textDecoration: "none",
              color: "white",
            }}
          >
            Back To form
          </Link>
        </button>
      </div>
      <div className="edit-container">
        {contacts &&
          contacts.map((contact) => (
            <>
              {contact.id !== editContactId && (
                <RenderData
                  key={contact.id}
                  id={contact.id}
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDelete={handleDelete}
                />
              )}
              {editContactId && contact.id === editContactId && (
                <EditInputForm
                  editContactData={editContactData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                  handleEditFormSubmit={handleEditFormSubmit}
                />
              )}
            </>
          ))}
      </div>
    </>
  );
}
