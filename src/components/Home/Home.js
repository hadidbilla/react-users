import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Home = () => {
  const [friends, setFriends] = useState();
  useEffect(
    () =>
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setFriends(data))
        .catch((error) => console.log(error)),
    []
  );
  //console.log(friends);
  return (
    <div>
      <h2>Total Friend: {friends?.length}</h2>
      {friends?.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Home;
