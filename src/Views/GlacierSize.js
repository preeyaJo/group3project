import React, { useEffect, useState } from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomMenu from '../Components/BottomMenu';
import GlobalHeader from "../Components/GlobalHeader";
import Chart from "../Components/Chart";

export function GlacierSize() {
  
  const [data, setData] = useState({});
  useEffect(()=>{
    fetch('data/Glacier.json')
    .then(response => response.json())
    .then((res) => {
     res=res.filter(x => x.Year > 1950);
     let Meancumulativemassbalance = { label: 'Mean cumulative mass balance', data: [], backgroundColor:'#ABD4A4'};
     let Numberofobservations = { label: 'Number of observations', data: [], backgroundColor:'#74B869'};
    
     let labels = [];

      res.forEach((year) => {
       labels.push(year.Year);
       Meancumulativemassbalance.data.push(year["Mean cumulative mass balance"]);
       Numberofobservations.data.push(year["Number of observations"]); 
      });

      setData({
        labels: labels,
        datasets: [Meancumulativemassbalance, Numberofobservations]
    });        
  });
}, []);


  return (
    <div>
      <GlobalHeader/>
      <Chart type="bubble" data={data}/>
      <BottomMenu/>  
    </div>
  );
}

export default GlacierSize;