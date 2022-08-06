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
  const [limit, setLimit] = useState(20);

  // slice data to show limited record
  const slicedData = data.slice(0, limit);

  // update limit by adding 10 to show 10 more records
  const handleLimitOfData = () => {
    setLimit(limit + 10);
  };

  return (
    <div className="position-absoltue d-block mx-4 my-3 mb-5">
      <Table hover className="table-lg mb-0">
        <thead className=" bg-secondary bg-opacity-10 fw-normal font-monospace fs-5">
          <tr>
            <td>S.No</td>
            <td>USERNAME</td>
            <td>DATE</td>
            <td className="text-end">ACTIONS</td>
          </tr>
        </thead>
        <tbody
          className="fs-6"
          style={{
            fontFamily: "sans",
          }}
        >
          {slicedData.map((item, index) => (
            <tr key={item.id}>
              {/* serial number */}
              <td>{index + 1}</td>
              {/* user name */}
              <td>{item.name}</td>
              {/* user joining date */}
              <td>{item.date}</td>
              <td className="text-end">
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
      <div className="d-flex flex-row justify-content-end fixed-bottom bg-light p-2 ">
        {/* load more data */}
        <Button
          className="button button-primary mx-5"
          onClick={handleLimitOfData}
        >
          Load More Data
        </Button>
      </div>
    </div>
  );
};

export default UserList;
