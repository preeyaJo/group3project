/*Importerar React*/
import React, { useEffect, useState } from "react";

/*Importerar CSS */
import "../Style/App.css";

/*Importerar komponenter */
import BottomMenu from "../Components/BottomMenu";
import GlobalHeader from "../Components/GlobalHeader";
import Chart from "../Components/Chart";
import InfoCard from "../Components/InfoCard";

/*Function för att hämta och skriva ut API från jsonfil*/
export function GlacierSize() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("data/Glacier.json")
      .then((response) => response.json())
      .then((res) => {
        /*Filtrering av årtal så det begränsas*/
        res = res.filter((x) => x.Year > 1990);
        let Meancumulativemassbalance = {
          label: "Medelmassa av uppmätta glaciärer",
          data: [],
          backgroundColor: "#ABD4A4",
        };
        let Numberofobservations = {
          label: "Antal observerade glaciärer",
          data: [],
          backgroundColor: "#74B869",
        };

        let labels = [];
        /*Pushar ut data för varje ämne och årtal*/    
        res.forEach((year) => {
          labels.push(year.Year);
          Meancumulativemassbalance.data.push(
            year["Mean cumulative mass balance"]
          );
          Numberofobservations.data.push(year["Number of observations"]);
        });
        /*Lagrar datan för alla labels och datasets/ämnen*/
        setData({
          labels: labels,
          datasets: [Meancumulativemassbalance, Numberofobservations],
        });
      });
  }, []);

  return (
    <div>
      {/*Toppmeny*/}
      <GlobalHeader />
    <div className="container extraSpacing">
      
      <InfoCard Category="glaciersize"/>
      {/*Skriver ut vilken typ av charts som ska visas*/}
      <Chart Category="glaciersize" type="bubble" data={data} />
      
    </div>
    {/*Bottenmeny*/}
    <BottomMenu />
    </div>
  );
}

/*Exporterar*/
export default GlacierSize;
