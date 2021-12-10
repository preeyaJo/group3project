import "../infocard.css";
import { useEffect } from "react";
import { Chart as Chartjs, registerables } from 'chart.js';
Chartjs.register(...registerables);

const ChartHeadingarray = [
    {
      category: "fossilfuels",
      heading: "Fossila bränslens ökning från 1951-2006"
    },
    {
        category: "globaltemperature",
        heading: "Skillnad på den globala temperaturen mellan 2016-1956"
      },
      {
        category: "sealevels",
        heading: "Skillnad på havsnivåer mellan 1951-2011"
      },
      {
        category: "glaciersize",
        heading: "Skillnaden mellan glaciärers storlek från 1950-2020"
      },
  ];

export function Chart(props) {

    const  data = ChartHeadingarray.find(p=>p.category === props.Category);

    useEffect(() => {
        const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chartjs(ctx, {
            type: props.type,
            data: props.data  
        });
        

        return () => {
            chart.destroy()
        }
        
    }, [props.data, props.type]);


    return (
        <div className="card p-3">
            <h3>{data.heading}</h3>
            <canvas id="chart" style={{width:'100%', height:'100%'}}></canvas>
        </div>
    );
  }

export default Chart;
