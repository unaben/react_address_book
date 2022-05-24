import React, { useState, useContext } from "react";
// import contactData from "./data.json";
// import data from "./contact.json";
import { nanoid } from "nanoid";
import FetchData from "./FetchData";
import { AddressBookContext } from "../Contexts/AddressBookContext";
import { useNavigate } from "react-router-dom";

export default function CreateForm() {
  const { setContacts, storage, setStorage } = useContext(AddressBookContext);
  console.log("Func CreateForm: ", storage.postcode);

  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState(storage.postcode);
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState(storage.admin_district);
  const [county, setCounty] = useState(storage.region);
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: name,
      postcode: postcode,
      addressOne: addressOne,
      addressTwo: addressTwo,
      city: city,
      county: county,
      telephone: telephone,
      email: email,
    };
    // const newContacts = [...contacts, newContact ]
    // setContacts(newContacts)
    navigate("/view");

    return setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  return (
    <div className="create_form-container">
      <div className="form_wrapper">
        <div className="form_title">
          <h2>Create Form</h2>
        </div>
        <FetchData storage={storage} setStorage={setStorage} />
        <form onSubmit={handleSubmit}>
          <div className="two_column_grid">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter name..."
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                id="name"
                value={name}
              />
            </div>
            <div>
              <label className="address" htmlFor="adresss">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter address line 1..."
                onChange={(e) => {
                  setAddressOne(e.target.value);
                }}
                name="addresssOne"
                id=""
                value={addressOne}
              />
            </div>
          </div>
          <div className="two_column_grid">
            <div>
              <label className="address" htmlFor="adresss">
                Address
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setAddressTwo(e.target.value);
                }}
                name="addressTwo"
                id=""
                placeholder="Enter address line 2..."
                value={addressTwo}
              />
            </div>
            <div>
              <label htmlFor="city">Town/City</label>
              <input
                type="text"
                name="city"
                id=""
                placeholder="Enter city/town..."
                value={storage.admin_district}
                readOnly={true}
              />
            </div>
          </div>
          <div className="two_column_grid">
            <div>
              <label htmlFor="county">County</label>
              <input
                type="text"
                name="county"
                placeholder="Enter county..."
                id=""
                value={storage.region}
                readOnly={true}
              />
            </div>
            <div>
              <label htmlFor="postcode">Postcode</label>
              <input
                type="text"
                name="postcode"
                id=""
                placeholder="Enter postcode..."
                value={storage.postcode}
                readOnly={true}
              />
            </div>
          </div>
          <div className="two_column_grid">
            <div>
              <label htmlFor="telephone">Telephone</label>
              <input
                type="text"
                placeholder="Enter telephone number..."
                onChange={(e) => {
                  setTelephone(e.target.value);
                }}
                name="telephone"
                id=""
                value={telephone}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter email..."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                id=""
                value={email}
              />
            </div>
          </div>
          <div className="submit_btn_wrapper">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
