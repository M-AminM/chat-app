import React from "react";
import Messanger from "../components/Messanger";

interface HomePageComponent extends React.PropsWithChildren {}
const HomePage: React.FunctionComponent<
  HomePageComponent
> = ({}): JSX.Element => {
  return (
    <div>
      <Messanger />
    </div>
  );
};

export default HomePage;
