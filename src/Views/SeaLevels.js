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
export function SeaLevels() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("data/SeaLevel.json")
      .then((response) => response.json())
      .then((res) => {
        /*Filtrering av årtal så det begränsas*/
        res = res.filter((x) => x.Time > "1990");
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
          labels.push(time.Time.split('-')[0]);
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
      {/*Toppmeny*/}
      <GlobalHeader />
    <div className="container extraSpacing">  
      <InfoCard Category="sealevels"/>
      {/*Skriver ut vilken typ av charts som ska visas*/}
      <Chart Category="sealevels" type="bar" data={data} /> 
    </div>
    {/*Bottenmeny*/}
    <BottomMenu />
    </div>
  );
}

/*Exporterar*/
export default SeaLevels;
