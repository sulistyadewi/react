import React from "react";

const TableComponent = (props) => {
  console.log(props);
  return (
    <div className="container mx-auto mt-4">
      <table className="border-2 mx-auto">
        <thead className="">
          <tr className="bg">
            <th className="px-20 py-3">Name</th>
            <th className="px-20 py-3">Job</th>
            <th className="px-20 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {props.usersData.length > 0 ? (
            props.usersData.map((user, index) => (
              <tr key={index} className="">
                <td className="text-center py-4">{user.name}</td>
                <td className="text-center">{user.job}</td>
                <td>
                  <button className="px-8 py-2 bg-green-500 text-white mr-4">
                    Edit
                  </button>
                  <button className="px-6 py-2 bg-red-500 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Tidak ada data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
