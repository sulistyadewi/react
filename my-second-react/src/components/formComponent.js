import React, { useState } from "react";

const FormComponent = (props) => {
  console.log(props);
  const formState = {
    name: "",
    job: "",
  };
  const [user, setUser] = useState(formState);
  const handleInputChanged = (event) => {
    setUser({ value: event.target.value });
  };
  console.log(formState, "ini form");
  return (
    <div className="container mx-auto">
      <div className="">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!user.name || !user.job) return;
            props.addUser(user);
            setUser(formState);
          }}
          className="flex flex-col justify-start"
        >
          <div className="flex flex-col px-32">
            <label>Nama</label>
            <input
              type="text"
              value={user.name} || ""
              className="h-14 mt-3 p-3 rounded bg-slate-400"
              onChange={handleInputChanged}
            />
          </div>
          <div className="flex flex-col px-32 mt-6">
            <label>Job</label>
            <input
              type="text"
              value={user.job}
              className="h-14 mt-3 p-3 rounded bg-slate-400"
              onChange={handleInputChanged}
            />
          </div>
          <div className="px-32">
            <button className="bg-blue-400 w-32 text-white py-2 mt-5 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
