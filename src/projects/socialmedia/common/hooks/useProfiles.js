import React from "react";
import { useEffect, useState } from "react";

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
// Mock viewbable profile database ONLY used in demoStatus
const getViewedProfile = () => {
  let viewedProfile;

  if (localStorage.getItem("Viewed-Profile")) {
    if (JSON.parse(localStorage.getItem("Viewed-Profile")) !== []) {
      viewedProfile = JSON.parse(localStorage.getItem("Viewed-Profile"));
    } else {
      viewedProfile = mock_profiles[0];
      localStorage.setItem("Viewed-Profile", JSON.stringify(viewedProfile));
    }
  } else {
    viewedProfile = mock_profiles[0];
    localStorage.setItem("Viewed-Profile", JSON.stringify(viewedProfile));
  }
  return viewedProfile;
};
//

export const useProfiles = () => {
  let demo = getDemoStatus();

  const [profiles, setProfiles] = useState(mock_profiles);
  const [friendProfiles, setFriendProfiles] = useState([]);
  const [suggestedProfiles, setSuggestedProfiles] = useState([]);
  const [viewedProfile, setViewedProfile] = useState(getViewedProfile());
  const [filteredProfiles, setFilteredProfiles] = useState(mock_profiles);

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

  const filter = (filter, user) => {
    var method;
    if (filter === "friends") {
      setProfiles(
        mock_profiles.filter((person) => user.Friends.includes(person.id))
      );
      // method = user.Friends;
    } else if (filter === "following") {
      setProfiles(
        mock_profiles.filter((person) => user.following.includes(person.id))
      );
      // method = user.following;
    } else if (filter === "followers") {
      setProfiles(
        mock_profiles.filter((person) => user.followers.includes(person.id))
      );
      // method = user.followers;
    } else if (filter === "all") {
      setProfiles(mock_profiles);
      // function onlyUnique(value, index, self) {
      //   return self.indexOf(value) === index;
      // }
    }

    //   var all = [...user.Friends, ...user.followers, ...user.following];
    //   method = all.filter(onlyUnique);
    // }
    // console.log(filter, method, profiles);
    // var matches = [];

    // for (var j = 0; j < profiles.length; j++) {
    //   for (var k = 0; k < method.length; k++) {
    //     if (profiles[j].id === method[k]) {
    //       matches.push(profiles[j]);
    //     }
    //   }
    // }

    // setProfiles(matches);
    // console.log(matches, filteredProfiles);
  };

  useEffect(() => {
    setFilteredProfiles(mock_profiles);
  }, []);

  return {
    profiles,
    setProfiles,
    suggestedProfiles,
    friendProfiles,
    GetSuggestedProfiles,
    GetFriendsProfiles,
    viewedProfile,
    setViewedProfile,
    filter,
    filteredProfiles,
  };
};
