import Info from "../Components/Info";
import React from "react";
import "../App.css";
import "../Info.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader from "../Components/GlobalHeader";
import BottomMenu from "../Components/BottomMenu";

export function Information() {
  return (
    <div>
      {/*Komponent för global header*/}
      <GlobalHeader />
      <Info calls="information" />;
      <BottomMenu />
    </div>
  );
}

export default Information;
