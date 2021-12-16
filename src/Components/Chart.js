/*Importerar CSS*/
import "../Style/futureclimate.css";
/*Importerar useEffect*/
import { useEffect } from "react";
/*Importerar chart.js*/
import { Chart as Chartjs, registerables } from 'chart.js';
Chartjs.register(...registerables);

/*Array för heading*/
const ChartHeadingarray = [
    {
      category: "fossilfuels",
      heading: "Fossila bränslens ökning i metrisk ton från 1990-2010",
      info: "Diagrammet visar hur olika fossila bränslen har ökat i metrisk ton per år"
    },
    {
        category: "globaltemperature",
        heading: "Skillnad på den globala temperaturen i grader celsius mellan 2016-2000",
        info: "Diagrammet visar hur den globala medeltemperaturen har ökat per år"
        
      },
      {
        category: "sealevels",
        heading: "Skillnad på havsnivåer i milimeter mellan 1990-2012",
        info: "Diagrammet visar hur mycket den globala medelhavsnivån har ökat i milimeter per år"
      },
      {
        category: "glaciersize",
        heading: "Skillnaden mellan glaciärers storlek från 1990-2015",
        info: "Diagrammet visar hur glaciärers medelmassa har ökat per år och hur många glaciärer som har observerats"
      },
  ];

  

/*Function för att hämta charts type och data*/
export function Chart(props) {

    const  data = ChartHeadingarray.find(p=>p.category === props.Category);

    useEffect(() => {
        const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chartjs(ctx, {
            type: props.type,
            data: props.data  
        });
        
        return () => {
            /*När komponenten unmountas så tas också chartsen bort*/
            chart.destroy()
        }
        
    }, [props,data]);

    return (
        <div className="card p-3">
            {/*Hämtar data för headings*/}
            <h3>{data.heading}</h3>           
            {/*Ändrar chartsens storlek*/}
            <canvas id="chart" width="400" height="400"></canvas>
             {/*Hämtar data för info*/}
            <p>{data.info}</p>
        </div>
    );
  }

  /*Exporterar*/
export default Chart;
