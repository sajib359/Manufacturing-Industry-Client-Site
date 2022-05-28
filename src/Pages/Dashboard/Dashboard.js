import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setLoggedUser(data));
  }, []);
  console.log();
  return (
    <div className="drawer drawer-mobile">
      <input id="dashDrawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-4xl text-primary font-bold">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashDrawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {loggedUser.role !== "admin" && (
            <>
              <li>
                <Link to={"/dashboard"}>My Order</Link>
              </li>
              <li>
                <Link to={"/dashboard/review"}>My Review</Link>
              </li>
            </>
          )}
          <li>
            <Link to={"/dashboard/profile"}>My Profile</Link>
          </li>
          {loggedUser.role === "admin" && (
            <>
              <li>
                <Link to={"/dashboard/manageproduct"}>Manage Product</Link>
              </li>
              <li>
                <Link to={"/dashboard/manage"}>Manage Order</Link>
              </li>
              <li>
                <Link to={"/dashboard/users"}>Manage Users</Link>
              </li>
              <li>
                <Link to={"/dashboard/addproduct"}>Add Product</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
