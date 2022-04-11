import React, { useEffect } from "react";
import "./Profiles.css";
import { useState, useContext } from "react";
import { UserContext } from "../../../Context/Context";
import { SearchProfile } from "./SearchProfile";
import SearchBar from "./Searchbar";

export const Profiles = () => {
  const {
    profiles,
    filter,
    filteredProfiles,
    setProfiles,
    user,
    setPage,
    setViewedProfile,
  } = useContext(UserContext);

  // setPage("profile");
  if (!profiles) {
    return null;
  }

  return <div className="content friendsSearch">Hello</div>;
};
