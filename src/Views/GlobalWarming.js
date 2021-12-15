/*Importerar komponenter */
import React, { useEffect, useState } from "react";

/*Importerar komponenter */
import "../Style/App.css";

/*Importerar komponenter */
import BottomMenu from "../Components/BottomMenu";
import GlobalHeader from "../Components/GlobalHeader";
import Chart from "../Components/Chart";
import InfoCard from "../Components/InfoCard";

/*Function för att hämta och skriva ut API från jsonfil*/
export function GlobalWarming() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("data/GlobalTemp.json")
      .then((response) => response.json())
      .then((res) => {
        /*Filtrering av årtal så det begränsas*/
        res = res.filter((x) => x.Year > 1950);
        let Mean = {
          label: "Global medeltemperatur",
          data: [],
          backgroundColor: "#997FB2",
        };

        let labels = [];
        /*Pushar ut data för varje ämne och årtal*/
        res.forEach((year) => {
          labels.push(year.Year + "" + year["Source"]);
          Mean.data.push(year["Mean"]);
        });
        /*Lagrar datan för alla labels och datasets/ämnen*/
        setData({
          labels: labels,
          datasets: [Mean],
        });
      });
  }, []);

  return (
    <div>
      {/*Toppmeny*/}
      <GlobalHeader />
      <div className="container extraSpacing">
        <InfoCard Category="globaltemperature" />
        {/*Skriver ut vilken typ av charts som ska visas*/}
        <Chart Category="globaltemperature" type="bar" data={data} />
      </div>
      {/*Bottenmeny*/}
      <BottomMenu />
    </div>
  );
}

/*Exporterar*/
export default GlobalWarming;
