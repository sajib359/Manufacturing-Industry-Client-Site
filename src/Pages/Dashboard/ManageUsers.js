import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const ManageUsers = () => {
    const {
        data: users,
        isLoading,
        refetch,
      } = useQuery("manageUser", () =>
        fetch("http://localhost:5000/users", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((res) => res.json())
      );
      if (isLoading) {
        return <Loading></Loading>;
      }
      console.log(users);
    return (
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>UserID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    
    );
};

export default ManageUsers;