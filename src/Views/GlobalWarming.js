import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomMenu from "../Components/BottomMenu";
import GlobalHeader from "../Components/GlobalHeader";
import Chart from "../Components/Chart";
import InfoCard from "../Components/InfoCard";

export function GlobalWarming() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("data/GlobalTemp.json")
      .then((response) => response.json())
      .then((res) => {
        res = res.filter((x) => x.Year > 1950);
        let Mean = { label: "Mean", data: [], backgroundColor: "#997FB2" };

        let labels = [];

        res.forEach((year) => {
          labels.push(year.Year + "" + year["Source"]);
          Mean.data.push(year["Mean"]);
        });

        setData({
          labels: labels,
          datasets: [Mean],
        });
      });
  }, []);

  return (
    <div>
      <GlobalHeader />
    <div className="container">
      
      <InfoCard Category="globaltemperature"/>
      <Chart Category="globaltemperature" type="bar" data={data} />
      
    </div>
    <BottomMenu />
    </div>
  );
}

export default GlobalWarming;
