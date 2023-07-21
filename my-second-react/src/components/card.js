import React from "react";

const Card = (props) => {
  return (
    <div>
      {props.usersData.length > 0 ? (
        props.usersData.map((user, index) => (
          <div className="container max-w-sm mx-auto mt-10 bg-yellow-200 border border-gray-300 shadow-lg rounded-md lg:flex lg:flex-row lg:max-w-xl">
            <img
              className="rounded-t-md lg:w-48 lg:h-auto lg:object-cover lg:rounded-l-lg"
              src="./images/book.jpg"
              alt=""
            />
            <div key={index} className="p-5 lg:flex lg:flex-col lg:self-center">
              <h2 className="text-2xl font-semibold lg:text-3xl">
                Name: <span>{user.name}</span>
              </h2>
              <h4 className="text-xl mt-5 font-semibold lg:text-2xl lg:mt-7">
                Job: <span>{user.job}</span>
              </h4>
              <div className="mt-5 lg:flex lg:flex-row lg:mt-7">
                <button
                  onClick={() => {
                    props.editUser(user);
                  }}
                  className="bg-green-400 px-8 py-3 mr-3 rounded font-medium text-white lg:text-lg lg:mr-6"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    props.deleteData(user.id);
                  }}
                  className="bg-red-400 px-6 py-3 rounded font-medium text-white lg:text-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>user not found</div>
      )}
    </div>
  );
};

export default Card;
