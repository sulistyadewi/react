import "./App.css";
// import ClassComponent from "./components/classComponent";
import FormComponent from "./components/formComponent";
import TableComponent from "./components/tableComponent";
import EditUser from "./components/editUser";
import React, { useState } from "react";

const App = () => {
  const usersData = [
    {
      id: 1,
      name: "Sulistya",
      job: "Student",
    },
    {
      id: 2,
      name: "Farid",
      job: "Student",
    },
    {
      id: 3,
      name: "Syifa",
      job: "Teacher",
    },
  ];
  const [users, setUsers] = useState(usersData);
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  // console.log(users);
  const deleteData = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const initialFormEdit = {
    id: null,
    name: "",
    job: "",
  };
  const [edit, setEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(initialFormEdit);
  const editUser = (user) => {
    setEdit(true);
    setSelectedUser({ id: user.id, name: user.name, job: user.job });
  };
  const updateUser = (id, updateUser) => {
    setEdit(true);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-6 font-semibold text-lg">Student List</h1>
      <TableComponent
        usersData={users}
        deleteData={deleteData}
        editUser={editUser}
      />
      <h1 className="text-center mt-6 font-semibold text-lg">Edit User</h1>
      <EditUser
        setEdit={setEdit}
        updateUser={updateUser}
        SelectedUser={selectedUser}
      />
      <h1 className="text-center mt-6 font-semibold text-lg">Add New User</h1>
      <FormComponent addUser={addUser} />
    </div>
  );
};

export default App;
