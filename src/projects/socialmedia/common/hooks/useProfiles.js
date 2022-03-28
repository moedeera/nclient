import React from "react";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../../Context/Context";
import { mock_profiles } from "../../../../assets/MockDataBase";
import axios from "axios";

// Fetch DemoStatus
const getDemoStatus = () => {
  if (localStorage.getItem("token")) {
    return false;
  } else {
    return true;
  }
};
// Mock database ONLY used in demoStatus

//

export const useProfiles = () => {
  let demo = getDemoStatus();

  const [profiles, setProfiles] = useState([]);
  const [friendProfiles, setFriendProfiles] = useState([]);
  const [suggestedProfiles, setSuggestedProfiles] = useState([]);

  const GetFriendsProfiles = (user) => {
    let fetched = mock_profiles;

    // If it is in demoState get data from mock dataBase
    if (demo) {
      setFriendProfiles(
        fetched.filter(
          (profile) => !user.Friends.some((friend) => friend === profile.id)
        )
      );
    }
  };

  const GetSuggestedProfiles = (user) => {
    if (demo) {
      //Exclude Own Profile
      var profileSet = mock_profiles.filter(
        (profile) => profile.id !== user.id
      );
      // Exclude all the friend profiles
      //

      profileSet =
        profileSet
          .filter(
            (profile) => !user.Friends.some((friend) => friend === profile.id)
          )
          .slice(0, 6) || [];
      // Select randomly up to 6 of the remaining profiles
      setSuggestedProfiles(profileSet);
    }
  };

  return {
    profiles,
    suggestedProfiles,
    friendProfiles,
    GetSuggestedProfiles,
    GetFriendsProfiles,
  };
};
