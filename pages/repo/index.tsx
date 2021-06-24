import React from "react";
import { SBLayout } from '../../containers/SBLayout';
import { SearchRepos } from '../../components/SearchRepos';

const UserPage = () => {
  return (
    <SBLayout>
      <div className={``}>
        <SearchRepos />
      </div>
    </SBLayout>
  );
};

export default UserPage;
