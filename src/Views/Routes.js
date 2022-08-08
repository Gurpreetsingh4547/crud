import React from "react";

// Components
import Navbar from "./Navbar";
import UserList from "./UserList";

// Css
import "./style.css";

/**
 * Display all my components on screen
 * @param {object} props
 * @returns nodes
 */
const View = (props) => {
  // Destructring the props and validate props
  const { data, onUpdateData } = props || {};
  return (
    <div>
      <Navbar data={data} onUpdateData={onUpdateData} />
      <UserList data={data} onUpdateData={onUpdateData} />
    </div>
  );
};

export default View;
