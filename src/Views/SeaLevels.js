import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomMenu from "../Components/BottomMenu";
import GlobalHeader from "../Components/GlobalHeader";
import Chart from "../Components/Chart";

export function SeaLevels() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("data/SeaLevel.json")
      .then((response) => response.json())
      .then((res) => {
        res = res.filter((x) => x.Time > "1950-03-15");
        let GMSL = { label: "GMSL", data: [], backgroundColor: "#4C7FB2" };
        let GMSLuncertainty = {
          label: "GMSL Uncertainty",
          data: [],
          backgroundColor: "#4CB2B2",
        };

        let labels = [];

        res.forEach((time) => {
          labels.push(time.Time);
          GMSL.data.push(time["GMSL"]);
          GMSLuncertainty.data.push(time["GMSL uncertainty"]);
        });

        setData({
          labels: labels,
          datasets: [GMSL, GMSLuncertainty],
        });
      });
  }, []);

  return (
    <div className="container">
      <GlobalHeader />
      <Chart type="bar" data={data} />
      <BottomMenu />
    </div>
  );
}

export default SeaLevels;
