import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { name, email, id } = props.friend;
  return (
    <div className="friend">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <Link to={`/friend/${id}`}>See More</Link>
    </div>
  );
};

export default Friend;
