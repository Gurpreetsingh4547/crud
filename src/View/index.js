import React from "react";

// Components
import Navbar from "./Navbar";
import UserList from "./UserList";

/**
 * Display all my components on screen
 * @param {object} props
 * @returns nodes
 */
const View = (props) => {
  // Destructring the props and validate props
  const { data, updateData } = props || {};
  return (
    <div>
      <Navbar data={data} updateData={updateData} />
      <UserList data={data} updateData={updateData} />
    </div>
  );
};

export default View;
