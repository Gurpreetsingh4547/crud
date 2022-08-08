import { useState, useEffect } from "react";

// Packages
import axios from "axios";

// Endpoint URL
const URL = "http://localhost:8000/users/";

/**
 *  Api Request method to get the data from server
 * @param {Number} limit
 * @returns Array of users
 */
const getUserList = (limit) => {
  // Users List
  const [userList, setUserList] = useState([]);

  // Error
  const [error, setError] = useState("");

  const sendRequest = async () => {
    await axios
      .get(URL)
      .then((res) => {
        setUserList(res.data.slice(0, limit));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return { userList, error };
};

/**
 * Api req to delete the user
 * @param {Number} id
 * @returns
 */
const deleteUserFromList = async (id) => {
  // User is delete or not from Server
  let onSuccess = false;

  await axios.delete(URL + id).then(() => {
    onSuccess = true;
  });

  return onSuccess;
};

/**
 *  APi request to add the new user
 * @param {object} userDetails
 * @returns object
 */
const addNewUser = async (userDetails) => {
  // store the response data
  let newUserDetail;

  await axios.post(URL, userDetails).then((res) => {
    // store res.data to variable
    newUserDetail = res.data;
  });

  return newUserDetail;
};

export { getUserList, deleteUserFromList, addNewUser };
