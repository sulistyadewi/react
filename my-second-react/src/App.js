import "./App.css";
// import ClassComponent from "./components/classComponent";
import FormComponent from "./components/formComponent";
import TableComponent from "./components/tableComponent";
import React, { useState } from "react";

const App = () => {
  const usersData = [
    {
      name: "Sulistya",
      job: "Student",
    },
    {
      name: "Farid",
      job: "Student",
    },
    {
      name: "Syifa",
      job: "Teacher",
    },
    // {
    //   name: "Raisyah",
    //   job: "Doctor",
    // },
    // {
    //   name: "Putri",
    //   job: "Civil Cervant",
    // },
    // {
    //   name: "Rafa",
    //   job: "Police",
    // },
  ];
  const [users, setUsers] = useState(usersData);
  const addUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-6 font-semibold text-lg">Student List</h1>
      <TableComponent usersData={users} />
      <h1 className="text-center mt-6 font-semibold text-lg">
        Add New Student
      </h1>
      <FormComponent addUser={addUser} />
    </div>
  );
};

export default App;
