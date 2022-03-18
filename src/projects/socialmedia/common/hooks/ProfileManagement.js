import React from "react";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../../Context/Context";
import axios from "axios";
export const ProfileManagement = () => {
  const [profiles, setProfiles] = useState([]);
  const [friendProfiles, setFriendProfiles] = useState([]);
  const [suggestedProfiles, setSuggestedProfiles] = useState([]);
  const user = useContext(UserContext);

  const getAllProfiles = async () => {
    let newProfiles;

    try {
      const res = await axios.get("http://localhost:8080/profiles");
      newProfiles = res.data;
    } catch (error) {
      const res = await axios.get("http://deercoded.herokuapp.com/profiles");
      newProfiles = res.data;
    }

    setProfiles(newProfiles);
    return newProfiles;
  };

  const GetSuggestedProfiles = async () => {
    let newProfiles = await getAllProfiles();
    console.log(newProfiles);
    //Exclude Own Profile
    var profileSet = newProfiles.filter((profile) => profile.id !== user.id);
    // Exclude all the friend profiles
    function filterOutFriends(person) {
      return !person.Friends.some((personFriends) => personFriends === user.id);
    }
    profileSet = profileSet.filter(filterOutFriends).slice(0, 6);
    // Select randomly up to 6 of the remaining profiles
    setSuggestedProfiles(profileSet);
  };

  useEffect(() => {
    GetSuggestedProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    profiles,
    suggestedProfiles,
  };
};
