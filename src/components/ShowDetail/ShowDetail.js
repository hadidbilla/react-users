import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ShowDetail = () => {
  const { friendId } = useParams();
  const [selectFriend, setSelectFriend] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSelectFriend(data));
  }, []);
  const style = {
    margin: "10px",
    border: "1px solid lightGray",
  };

  return (
    <div style={style}>
      <h3>Name: {selectFriend.name}</h3>
      <p>ID: {selectFriend.id}</p>
      <p>Email: {selectFriend.email}</p>
    </div>
  );
};

export default ShowDetail;
