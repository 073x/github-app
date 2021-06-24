import React from "react";
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push('/user');
  }, []);

  return <></>;
};

export default IndexPage;
