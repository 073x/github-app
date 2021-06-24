import React from "react";
import { SBLayout } from '../../containers/SBLayout';
import { SearchUser } from '../../components/SearchUser';

const UserPage = () => {
  return (
    <SBLayout>
      <div className={``}>
        <SearchUser />
      </div>
    </SBLayout>
  );
};

export default UserPage;
