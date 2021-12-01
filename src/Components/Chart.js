import { useEffect } from "react";
import { Chart as Chartjs, registerables } from 'chart.js';
Chartjs.register(...registerables);

export function Chart(props) {
    useEffect(() => {
        const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chartjs(ctx, {
            type: props.type,
            data: props.data  
        });
        

        return () => {
            chart.destroy()
        }
        
    }, [props.data]);

    return (
        <canvas id="chart" style={{width:'100%', height:'100%'}}></canvas>
    );
  }

export default Chart;
