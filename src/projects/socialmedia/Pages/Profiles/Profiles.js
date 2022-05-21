import React, { useState } from "react";
import "./Profiles.css";
import { useContext } from "react";

import { UserContext } from "../../../../Context/Context";

import MainOption from "../../components/ProfileComponents/MainOption";
import SuggestionsOption from "../../components/ProfileComponents/SuggestionsOption";

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
