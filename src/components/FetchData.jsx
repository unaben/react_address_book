import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FetchData({ setStorage }) {
  const navigate = useNavigate();

  const [selectedPostcode, setSelectedPostcode] = useState("");
  const [selectedInput, setselectedInput] = useState("");

  const fetchApiData = () => {
    const url = `https://api.postcodes.io/postcodes/${selectedPostcode}`;

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
          setStorage(data.result);
        })
        .catch((error) => {
          console.log({ error: error.message });
        });
    }
  };

  useEffect(() => {
    fetchApiData();
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
