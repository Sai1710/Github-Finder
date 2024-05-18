import React from "react";
import RepoItem from "./RepoItem";

function ReposList({ repos }) {
  // console.log(repos);
  // repos.map((repo) => {
  //   console.log(repo.name);
  // });
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2
          className="text-3xl card-tit
        my-4 font-bold"
        >
          Latest Repositiries
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo}></RepoItem>
        ))}
      </div>
    </div>
  );
}

export default ReposList;
