# Code Spike: Data Visualization using Chart.js in React

## Getting Started:

bootstrapped from create-react-app

* Install create-react-app dependencies:
  * `yarn install`

* Install both react-chartjs-2 (second version is better) and chart.js core:
  * `npm install react-chartjs-2 chart.js --save`

* Start server:
  * `npm start`

## Using Chart.js in react
*  in `src/Components` create a new component file (I called mine `Chart.js`)

* in `Chart.js`
  * import the chart style you want to use from `react-chartjs-2`
  * available chart styles can be found at [chartjs.org](http://www.chartjs.org/docs/latest/charts/)
    * charts are components that are returned in the render function of the Chart component. e.g. `<Doughnut />`
    * each chart has a `data` property. Data lives in state.

![screenshot]('/screenshot.png')
