import React from "react";
import "./Profiles.css";
import { useContext } from "react";
import { UserContext } from "../../../Context/Context";
// import { SearchProfile } from "./SearchProfile";
// import SearchBar from "./Searchbar";
import MainOption from "./components/MainOption";
import SuggestionsOption from "./components/SuggestionsOption";
import pic1 from "./blank-avatar.png";

export const Profiles = () => {
  const { profiles, fsSettings } = useContext(UserContext);

  // setPage("profile");
  if (!profiles) {
    return null;
  }

  return (
    <div className="content friendsSearch">
      <div className="fr-search-main">
        {fsSettings === "main" && (
          <>
            {" "}
            <h2>Requests</h2>
            <MainOption pic1={pic1} />
          </>
        )}
        {fsSettings === "suggestions" && (
          <>
            <h2>Suggestions</h2>
            <SuggestionsOption pic1={pic1} />
          </>
        )}
      </div>
    </div>
  );
};
