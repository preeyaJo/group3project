import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomMenu from "../Components/BottomMenu";
import GlobalHeader from "../Components/GlobalHeader";
import Chart from "../Components/Chart";
import InfoCard from "../Components/InfoCard";

/*Function för att hämta och skriva ut API från jsonfil*/
export function SeaLevels() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("data/SeaLevel.json")
      .then((response) => response.json())
      .then((res) => {
        /*Filtrering av årtal så det begränsas*/
        res = res.filter((x) => x.Time > "1950-03-15");
        let GMSL = { 
          label: " Rekonstruerad global medelhavsnivå - GMSL", 
          data: [], 
          backgroundColor: "#4C7FB2" 
        };
        let GMSLuncertainty = {
          label: "Osäkerhet i GMSL på grund av rekonstruktion",
          data: [],
          backgroundColor: "#4CB2B2",
        };
       
        let labels = [];
        /*Pushar ut data för varje ämne och tid*/
        res.forEach((time) => {
          labels.push(time.Time);
          GMSL.data.push(time["GMSL"]);
          GMSLuncertainty.data.push(time["GMSL uncertainty"]);
        });
        /*Lagrar datan för alla labels och datasets/ämnen*/
        setData({
          labels: labels,
          datasets: [GMSL, GMSLuncertainty],
        });
      });
  }, []);

  return (
    <div>
      <GlobalHeader />
    <div className="container">
      
      <InfoCard Category="sealevels"/>
      {/*Skriver ut vilken typ av charts som ska visas*/}
      <Chart Category="sealevels" type="bar" data={data} />
      
    </div>
    <BottomMenu />
    </div>
  );
}

export default SeaLevels;
