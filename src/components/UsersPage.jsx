import React from "react";
import UsersTable from "./UsersTable/UsersTable";
import Search from "./Search";

const UsersPage = () => {
  return (
    <div className="m-3">
      <Search />
      <UsersTable />
    </div>
  );
};

export default UsersPage;
