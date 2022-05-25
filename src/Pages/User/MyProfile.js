import React from "react";

const MyProfile = () => {
  return (
    <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      {/* <!-- Page content here --> */}
      <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-4" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
  );
};

export default MyProfile;
