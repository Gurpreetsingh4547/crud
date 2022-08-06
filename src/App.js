// Packages
import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import View from "./View";

/**
 * User Detaitls
 * actions :- Add New user and Delete User
 * @returns node
 */
const App = () => {
  // state for storing userDetails that come in response data
  const [userData, setUserData] = useState([]);

  // Send request to server to get the data
  useEffect(() => {
    axios.get("http://localhost:8000/users/").then((res) => {
      setUserData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <View data={userData} updateData={setUserData} />
    </div>
  );
};

export default App;
