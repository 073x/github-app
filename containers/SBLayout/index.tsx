import React from "react";
import { Layout } from '../../containers/Layout';
import { SideBar } from '../../containers/Sidebar';

export const SBLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <Layout>
      <div className={`flex flex-nowrap`}>
        <div className={`w-2/12 flex-none`}>
          <SideBar />
        </div>
        <div className={`w-10/12 flex-none`}>
          {children}
        </div>
      </div>
      
    </Layout>
  );
};

