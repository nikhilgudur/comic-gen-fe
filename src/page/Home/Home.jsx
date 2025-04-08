import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const openChat = () => {
    const id = uuidv4();
    navigate(`/c/${id}`);
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={openChat}>Chat</button>
    </>
  );
}

export default Home;
