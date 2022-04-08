import React, { useEffect } from "react";
import "./Profiles.css";
import { useState, useContext } from "react";
import { UserContext } from "../../../Context/Context";
import { SearchProfile } from "./SearchProfile";

export const Profiles = () => {
  const { profiles, filter, filteredProfiles, user, setPage } =
    useContext(UserContext);
  const [selected, setSelected] = useState(0);
  const [paramater, setParamater] = useState(1);

  // setPage("profile");
  if (!profiles) {
    return null;
  }

  return (
    <div>
      <div className="MainGrid">
        <div className="filterBar">
          <div className="filter-upper">
            <div className="fb-header">
              <h1>Filter</h1>
            </div>
            <div className="fb-options">
              <div className="fb-Option">
                By Age
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>

              <div className="fb-Option">
                By Gender
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>

              <div className="fb-Option">
                By Location
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>

              <div className="fb-Option">
                By Education
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>

              <div className="fb-Option">
                By City
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>

              <div className="fb-Option">
                By City
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="nav-right-ads">
            <h3>Ad</h3>
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="newCM">
          <div className="ConnectMain">
            <div className="UpperConnect">
              <div className="LeftUC">
                <div className="UCSearch">
                  <input
                    type="text"
                    placeholder="&#x1F50D; Search for people"
                    name="text"
                  />
                </div>
              </div>
              <div className="RightUC">
                <div className="UCList">
                  <ul>
                    <li
                      className={paramater === 0 ? "UCSelected" : ""}
                      onClick={() => {
                        // filter("all", user);
                        setParamater(0);
                        filter("all", user);
                        console.log(profiles);
                      }}
                    >
                      All
                    </li>
                    <li
                      className={paramater === 1 ? "UCSelected" : ""}
                      onClick={() => {
                        // filter("friends", user);
                        setParamater(1);
                        filter("friends", user);
                        console.log(profiles);
                      }}
                    >
                      Friends
                    </li>
                    <li
                      className={paramater === 2 ? "UCSelected" : ""}
                      onClick={() => {
                        // filter("followers", user);
                        setParamater(2);
                        filter("followers", user);
                      }}
                    >
                      Followers
                    </li>
                    <li
                      className={paramater === 3 ? "UCSelected" : ""}
                      onClick={() => {
                        // filter("following");
                        setParamater(3);
                        filter("following", user);
                      }}
                    >
                      Following
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="LowerConnect">
              {profiles.map((profile, index) => (
                <div key={profile.id}>
                  {" "}
                  <SearchProfile
                    profile={profile}
                    selected={selected === index}
                    setSelected={setSelected}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
