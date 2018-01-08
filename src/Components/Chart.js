import React, { Component } from 'react'
import { Bar, Doughnut, Radar } from 'react-chartjs-2'

export class Chart extends Component {
    constructor(props){
      super(props);
      this.state = {
        radarData: {
          labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
          datasets: [{
            label: 'Bob',
            data: [20, 10, 4, 2],
            backgroundColor: 'rgba(75, 192, 192, .5)'
          },
          {
            label: 'Suzie',
            data: [10, 20, 6, 7],
            backgroundColor: 'rgba(255, 99, 132, .5)'
          }]
        },
        chartData: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: 'Votes per Color',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }
      }
    }

    render() {
      return (
        <div className="chart">
          <Bar
            data={this.state.chartData}
            options={{
              title: {
                display: true,
                text: 'Color Votes'
              },
              legend: {
                display: true,
                position: 'right',
                font: 'garamond'
              },
              maintainsAspectRatio: false
            }}
          />
          <Doughnut
            data={this.state.chartData}
          />
          <Radar
            data={this.state.radarData}
          />
        </div>
      )
    }
}
