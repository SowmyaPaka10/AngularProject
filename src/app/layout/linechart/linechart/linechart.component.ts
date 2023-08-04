import { Component,OnInit } from '@angular/core';

import {Chart} from 'chart.js';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent {
chart: any;

constructor(){}
ngOnInit() {
  // Define the data for the chart
  const data = {
    labels: ['01.00', '02.00', '03.00', '04.00', '05.00', '06.00','07.00'],
    datasets: [
      {
        label: 'Sales',
        data: [31, 40, 28, 51, 42,82,56],
        borderColor:'blue',
        backgroundColor: [

          // this is for rounded balls

          'rgba(175, 229, 179, 0.12)'

        ],

      },
      {
        label: 'Revenue',
        data: [11,32,45,32,34,52,41],
        borderColor:'green',
        backgroundColor: ['rgba(175, 229, 179, 0.12)'],
      },
      {
        label: 'Customer',
        data: [15,11, 32,18,9, 24,11],
        borderColor: 'orange',
        backgroundColor: ['rgba(175, 229, 179, 0.12)'],
      }
    ]
  };

  // Define the options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        ticks: {
          autoSkip: false,
          maxRotation: 80,
          minRotation: 80,
          display: true
        }
      }],
    }
  };

  // Create the chart instance
  this.chart = new Chart('myChart', {
    type: 'line',
    data: data,
    options: options
  });
}
}