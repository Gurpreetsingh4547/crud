// Packages
import React, { useEffect, useState } from "react";

// Components
import Views from "./Views/Routes";

// Api request method to get users list from database
import { getUserList } from "./services/users";

/**
 * User Detials
 * actions :- Add New user and Delete User
 * @returns node
 */
const App = () => {
  // Destructuring to get the state from helper
  const { userList } = getUserList();
  // state for storing userDetails that come in response data
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Set api response in state
    setUserData(userList);
  }, [userList]);

  return (
    <div className="App">
      <Views data={userData} onUpdateData={setUserData} />
    </div>
  );
};

export default App;
