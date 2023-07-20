import React, { useEffect, useState } from "react";

const EditUser = ({ setEdit, updateUser, selectedUser }) => {
  // console.log(setEdit, "ini setEdit");
  // console.log(updateUser, "ini updateUser");
  console.log(selectedUser, "ini selecteduser");
  const [user, setUser] = useState(selectedUser);
  const handleInputChanged = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  // console.log(user.name, "ini form");
  useEffect(() => {
    setUser(selectedUser);
  }, [selectedUser]);
  return (
    <div className="container mx-auto">
      <div className="">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            updateUser(user.id, user);
          }}
          className="flex flex-col justify-start"
        >
          <div className="flex flex-col px-32">
            <label>Nama</label>
            <input
              type="text"
              value={user.name}
              required={true}
              name="name"
              className="h-14 mt-3 p-3 rounded bg-slate-400"
              onChange={handleInputChanged}
            />
          </div>
          <div className="flex flex-col px-32 mt-6">
            <label>Job</label>
            <input
              type="text"
              value={user.job}
              required={true}
              name="job"
              className="h-14 mt-3 p-3 rounded bg-slate-400"
              onChange={handleInputChanged}
            />
          </div>
          <div className="px-32">
            <button
              type="submit"
              className="bg-blue-400 w-32 text-white py-2 mt-5 rounded mr-5"
            >
              Edit User
            </button>
            <button
              onClick={() => setEdit(false)}
              type="submit"
              className="bg-blue-400 w-32 text-white py-2 mt-5 rounded"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
