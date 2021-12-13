import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomMenu from "../Components/BottomMenu";
import GlobalHeader from "../Components/GlobalHeader";
import Chart from "../Components/Chart";
import InfoCard from "../Components/InfoCard";

/*Function för att hämta och skriva ut API från jsonfil*/
export function FossilFuels() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("data/GlobalCo.json")
      .then((response) => response.json())
      .then((res) => {
       /*Filtrering av årtal så det begränsas*/
        res = res.filter((x) => x.Year > 1950);
        let gasFlaring = {
          label: "Gasledning",
          data: [],
          backgroundColor: "#CC7B79",
        };
        let gasFuel = {
          label: "Gasbränsle",
          data: [],
          backgroundColor: "#AE94CB",
        };
        let liquidFuel = {
          label: "Flytande bränsle",
          data: [],
          backgroundColor: "#4C7FB2",
        };
        let solidFuel = {
          label: "Fast bränsle",
          data: [],
          backgroundColor: "#59A57F",
        };
        let cement = { 
          label: "Cement", 
          data: [], 
          backgroundColor: "#ABD4A4" 
        };

        let labels = [];
        /*Pushar ut data för varje ämne och årtal*/
        res.forEach((year) => {
          labels.push(year.Year);
          gasFlaring.data.push(year["Gas Flaring"]);
          gasFuel.data.push(year["Gas Fuel"]);
          liquidFuel.data.push(year["Liquid Fuel"]);
          solidFuel.data.push(year["Solid Fuel"]);
          cement.data.push(year["Cement"]);
        });
        /*Lagrar datan för alla labels och datasets/ämnen*/
        setData({
          labels: labels,
          datasets: [gasFlaring, gasFuel, liquidFuel, solidFuel, cement],
        });
      });
  }, []);

  return (
    <div className="container">
      <GlobalHeader />
      <InfoCard Category="fossilfuels"/>
      {/*Skriver ut vilken typ av charts som ska visas*/}
      <Chart Category="fossilfuels" type="line" data={data} /> 
      <BottomMenu /> 
    </div>
  );
}

export default FossilFuels;
