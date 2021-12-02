import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomMenu from "../Components/BottomMenu";
import GlobalHeader from "../Components/GlobalHeader";
import Chart from "../Components/Chart";

export function FossilFuels() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("data/GlobalCo.json")
      .then((response) => response.json())
      .then((res) => {
        res = res.filter((x) => x.Year > 1950);
        let gasFlaring = {
          label: "Gas Flaring",
          data: [],
          backgroundColor: "#CC7B79",
        };
        let gasFuel = {
          label: "Gas Fuel",
          data: [],
          backgroundColor: "#AE94CB",
        };
        let liquidFuel = {
          label: "Liquid Fuel",
          data: [],
          backgroundColor: "#4C7FB2",
        };
        let solidFuel = {
          label: "Solid Fuel",
          data: [],
          backgroundColor: "#59A57F",
        };
        let cement = { label: "Cement", data: [], backgroundColor: "#ABD4A4" };

        let labels = [];

        res.forEach((year) => {
          labels.push(year.Year);
          gasFlaring.data.push(year["Gas Flaring"]);
          gasFuel.data.push(year["Gas Fuel"]);
          liquidFuel.data.push(year["Liquid Fuel"]);
          solidFuel.data.push(year["Solid Fuel"]);
          cement.data.push(year["Cement"]);
        });

        setData({
          labels: labels,
          datasets: [gasFlaring, gasFuel, liquidFuel, solidFuel, cement],
        });
      });
  }, []);

  return (
    <div className="container">
      <GlobalHeader />
      <Chart type="line" data={data} />
      <BottomMenu />
    </div>
  );
}

export default FossilFuels;
