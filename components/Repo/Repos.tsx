import React from "react";
import { Repo } from "../../lib/SearchRepoModel";
import { RepoComponent } from "./Repo";

export const Repos: React.FC<{ list: Repo[] }> = (props) => {
  return (
    <div>
      {props?.list?.map((re, i) => (
        <RepoComponent {...re} key={i} />
      ))}
    </div>
  );
};
