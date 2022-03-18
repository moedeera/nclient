import React from "react";
import "./Profiles.css";
import { ProfileManagement } from "../common/hooks/ProfileManagement";

export const Profiles = () => {
  const { profiles, suggestedProfiles } = ProfileManagement();
  console.log(profiles, suggestedProfiles);

  return <div>Profiles</div>;
};
