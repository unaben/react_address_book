import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FetchData({ storage, setStorage }) {
  const navigate = useNavigate();

  // const [storage, setstorage] = useState("");
  const [selectedPostcode, setSelectedPostcode] = useState("");
  const [selectedInput, setselectedInput] = useState("");

  console.log("Postcode: ", selectedPostcode);
  console.log("State: ", storage);

  // Async and await function
  useEffect(() => {
    const url = `https://api.postcodes.io/postcodes/${selectedPostcode}`;
    // const url = `https://api.postcodes.io/postcodes/b184dg`;
    if (selectedPostcode) {
      fetch(url)
        .then((res) => {
          console.log("Res: ", res.ok);
          if (!res.ok) {
            navigate("*");
            throw Error("Could not fetch data");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          console.log("Fetch: ", data);
          // setstorage([...storage, data.result]);
          setStorage(data.result);
        })
        .catch((error) => {
          console.log({ error: error.message });
        });
    }
  }, [selectedPostcode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedPostcode(selectedInput);
    setselectedInput("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <button className="search_btn" type="submit">
            Search
          </button>
          <input
            className="search_input"
            value={selectedInput}
            type="text"
            placeholder="Enter postcode to search..."
            onChange={(event) => {
              setselectedInput(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
}
