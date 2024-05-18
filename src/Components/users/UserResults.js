import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import GithubContext from "../../Context/github/GithubContext";
import { useContext } from "react";
function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cola-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  } else {
    return <Spinner></Spinner>;
  }
}

export default UserResults;
