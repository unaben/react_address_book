import { useState } from "react";
import "./App.css";
import EditForm from "./components/EditForm";
import CreateForm from "./components/CreateForm";
// import FetchData from "./FetchData";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AddressBookContext } from "./Contexts/AddressBookContext";
import { Route, Routes } from "react-router-dom";
import BadRequest from "./components/BadRequest";

function App() {
  const [contacts, setContacts] = useState([]);
  const [storage, setStorage] = useState("");
  console.log("APP STATE: ", contacts);
  console.log("APP STORAGE:", storage);
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="app-container">
        <AddressBookContext.Provider
          value={{ setContacts, contacts, storage, setStorage }}
        >
          <Routes>
            <Route exact path="/" element={<CreateForm />} />
            <Route exact path="/view" element={<EditForm />} />
            <Route path="*" element={<BadRequest />} />
          </Routes>
        </AddressBookContext.Provider>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
