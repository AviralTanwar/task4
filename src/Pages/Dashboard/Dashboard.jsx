import React from 'react'
import "./dashboard.css";
import Card from '../../Components/Cards/Card';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

    
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    indexAxis: 'y' ,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Revenue By Job Location',
      },
    },
  };

 const labels = ['Edmonds', 'Mukilteo', 'Bothell', 'Lynnwood', 'Seattle','Everett'];

const Dashboard = () => {
    const arr = [
        {
          price: "$406,411.29",
          tag: "Total Revenue"
        },
        {
          price: "$620",
          tag: "Total Jobs Abg"
        },
        {
          price: "655",
          tag: "Tickets Created"
        },
        {
          price: "735",
          tag: "Tickets Scheduled"
        },
        {
          price: "$110,448.8",
          tag: "Outstanding Amount",
          red: true
        },
        {
          price: "105",
          tag: "Membership Sold"
        },
        {
          price: "436",
          tag: "Jobs Completed"
        },
        {
          price: "65",
          tag: "Total Cancelled"
        },
      ]

    
  return (
    <div className='dashboard'>
        <h2>Company Metrics</h2>
        <div className='metric_holder'>
            {
                arr.map(d => <Card price={d.price} tag={d.tag} red={d.red}/>)
            }
        </div>
    </div>
  )
}

export default Dashboard