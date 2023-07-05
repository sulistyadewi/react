import React, { useEffect, useState } from "react";

const EditUser = (props) => {
  console.log(props, "ini dari editUser");
  const [user, setUser] = useState(props.selectedUser);
  const handleInputChanged = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  // console.log(user.name, "ini form");
  useEffect(() => {
    setUser(props.selectedUser);
  }, [props.selectedUser]);
  return (
    <div className="container mx-auto">
      <div className="">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.updateUser(user.id, user);
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
              className="bg-blue-400 w-32 text-white py-2 mt-5 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
