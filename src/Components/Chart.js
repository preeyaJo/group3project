import "../Style/futureclimate.css";
import { useEffect } from "react";
import { Chart as Chartjs, registerables } from 'chart.js';
Chartjs.register(...registerables);

/*Array för heading*/
const ChartHeadingarray = [
    {
      category: "fossilfuels",
      heading: "Fossila bränslens ökning i metrisk ton från 1951-2008"
    },
    {
        category: "globaltemperature",
<<<<<<< Updated upstream
        heading: "Skillnad på den globala temperaturen i grader celsius mellan 2016-1956"
=======
        heading: "Skillnad på den globala temperaturen i grader celsius mellan 1990-2016",
        info: "Diagrammet visar hur den globala medeltemperaturen har ökat per år"
        
>>>>>>> Stashed changes
      },
      {
        category: "sealevels",
        heading: "Skillnad på havsnivåer i milimeter mellan 1951-2011"
      },
      {
        category: "glaciersize",
        heading: "Skillnaden mellan glaciärers storlek från 1950-2020"
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
<<<<<<< Updated upstream
            <h3>{data.heading}</h3>
            {/*Chartsens storlek blir 100% av dess innehållsblock*/}
            <canvas id="chart" style={{width:'100%', height:'100%'}}></canvas>
=======
            {/*Hämtar data för headings*/}
            <h3>{data.heading}</h3>           
            {/*Ändrar chartsens storlek*/}
            <canvas id="chart"  style={{width:'400px', height:'200px'}}></canvas>
             {/*Hämtar data för info*/}
            <p>{data.info}</p>
>>>>>>> Stashed changes
        </div>
    );
  }

<<<<<<< Updated upstream
export default Chart;
=======
/*Exporterar*/
export default Chart;
>>>>>>> Stashed changes
