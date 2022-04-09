import { useState } from "react";
import "./Searchbar.css";
import { mock_profiles } from "../../../assets/MockDataBase";

function SearchBar({ setProfiles }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = mock_profiles.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      setProfiles(newFilter);
    }
  };

  const clearInput = (id) => {
    setFilteredData([]);
    setWordEntered("");
    setProfiles(mock_profiles.filter((profile) => profile.id === id));
  };

  return (
    <div className="search2">
      <div className="searchInputs">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search for people"
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div
                className="dataItem"
                target="_blank"
                key={value.id}
                onClick={() => {
                  clearInput(value.id);
                }}
              >
                <p>{value.name} </p> <img src={value.profilePic} alt="pic" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
