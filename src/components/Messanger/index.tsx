import React from "react";
import Layout from "./Layout";

interface MessangerProps extends React.PropsWithChildren {}
const Messanger: React.FunctionComponent<MessangerProps> = (): JSX.Element => {
  return (
    <div className="h-screen w-screen p-10 ">
      <Layout />
    </div>
  );
};

export default Messanger;
