import React, { useState } from "react";

// Components
import Table from "react-bootstrap/Table";

// React bootstrap components
import Button from "react-bootstrap/Button";
import DeleteUserModal from "../DeleteUserModal";

/**
 * users list along with user details
 * @returns node
 */
const UserList = (props) => {
  // Destructring the props
  const { data, updateData } = props || {};

  // Limit state for showing limited data
  const [limit, setLimit] = useState(10);

  // slice data to show limited record
  const slicedData = data.slice(0, limit);

  // update limit by adding 10 to show 10 more records
  const handleLimitOfData = () => {
    setLimit(limit + 10);
  };

  return (
    <div className="position-absolute w-100 h-75 overflow-auto">
      <Table striped bordered hover className="text-center">
        <thead className="sticky-top bg-light">
          <tr>
            <th>Sr. No.</th>
            <th>Username</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="overflow-auto">
          {slicedData.map((item, index) => (
            <tr key={item.id}>
              {/* serial number */}
              <th scope="row">{index + 1}</th>
              {/* user name */}
              <td>{item.name}</td>
              {/* user joining date */}
              <td>{item.date}</td>
              <td>
                <DeleteUserModal
                  id={item.id}
                  data={data}
                  updateData={updateData}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex flex-row justify-content-center sticky-bottom bg-light p-2">
        {/* load more data */}
        <Button className="button button-primary" onClick={handleLimitOfData}>
          Load More Data
        </Button>
      </div>
    </div>
  );
};

export default UserList;
