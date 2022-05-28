import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({ user, index, refetch }) => {
  const makeAdmin = (email) => {
    const url = `https://localhost:5000/user/admin/${email}`;
    fetch(url, {
      method: "put",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user?.displayName} is now Admin`);
        } else {
          toast.error("You dont have enough permission!");
        }
      });
  };

  const makeUser = (email) => {
    const url = `https://localhost:5000/user/user/${email}`;
    fetch(url, {
      method: "put",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user?.displayName} is now Regular User`);
        } else {
          toast.error("You dont have enough permission!");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.displayName}</td>
      <td>{user?.email}</td>
      <td>{user.uid}</td>
      <td>
        {user.role !== "admin" ? (
          <span
            onClick={() => makeAdmin(user.email)}
            className="font-2xl cursor-pointer bg-green-600 p-2 rounded text-white"
          >
            Make Admin
          </span>
        ) : (
          <span
            onClick={() => makeUser(user.email)}
            className="font-2xl cursor-pointer bg-red-600 p-2 rounded text-white"
          >
            Make User
          </span>
        )}
      </td>
    </tr>
  );
};

export default UserRow;