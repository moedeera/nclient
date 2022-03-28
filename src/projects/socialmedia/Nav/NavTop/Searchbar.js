import React from 'react'
import "./Searchbar.css"
import { useEffect, useState, useContext } from "react";
import { UserContext } from '../../../../Context/Context';
import { Link } from "react-router-dom";
import axios from "axios"
export const Searchbar = () => {

    const [users, setUsers] = useState([]);
    const [text, setText] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    const {profiles} = useContext(UserContext);



    const onChangeText = (text) => {
        let matches = [];
        if (text.length > 0) {
          document.addEventListener("click", (e) => {
            if (e.target.className !== "Searchbar") {
              Reset();
            }
          });

          const Reset = () => {
            setSuggestions("");
            setText("");
            sessionStorage.clear();
          };


    
          matches = profiles.filter((user) => {
            const regex = new RegExp(`${text}`, "gi");
            return user.name.match(regex);
          });
        }
    
        setSuggestions(matches);
        setText(text);
      };

      const FriendsProfile = async (id) => {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
    
          const string = `https://econnectsocial.herokuapp.com/api/users/profiles/${id}`;
          console.log(string, id);
          const res = await axios.get(string);
          console.log(res.data);
        //   setAuth(res.data);
        } catch (error) {
          console.log(error);
        }}





  return (
    
    <div className="search">
    <input type="text" placeholder="search"
    name="text"
    value={text}
    onChange={(e) => onChangeText(e.target.value)}
       
    />
    <div className="search-bar">
      {" "}
      <i className="fas fa-search "></i>
    </div>


{/* <div className="options">John Smith</div><div className="options"> <img src={profiles[0].profilePic} alt="" /></div> */}




{/* {suggestions
              ? suggestions.map((result, i) => (
                <>
                <Link to="/" onClick={() => FriendsProfile(result.id)}>
                        <div className="options" key={i}>
                              <div> {result.name}</div>
                         </div>
                  </Link>


                <div className="options" key={i+ 20}>
                        {" "}
                        <img
                          src={result.profilePic}
                          alt=""
                          className="images"
                        />
                      </div>
                
              
                       
                 </>
                  
                ))
              : ""} */}




  </div>
  )
}
