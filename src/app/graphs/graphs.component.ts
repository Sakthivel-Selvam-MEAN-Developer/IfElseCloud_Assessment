import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptionsLine: Highcharts.Options = {
    series: [{
      name:'Sales Statistics',
      data: [0, 1, 0.5, 2, 1.5, 3, 2.5],
      type: 'spline',
      color: '#506de2',
    }],
    title:{
      text:'Sales Statistics'
    },
    yAxis: {
      categories: ['10$', '20$', '30$', '40$', '50$']
    },
    xAxis: {
      categories: ['Sun', 'Mon', 'Tus', 'Wed', 'Ths', 'Fri', 'Sat']
    },
    tooltip: {
      format: '{x}:{y}'
    }
  };
  chartOptionsColumn: Highcharts.Options = {
    series: [{
      name:'Balance Overview',
      data: [20, 100, 30, 50, 20, 10, 50, 90, 130, 180, 50, 90],
      type: 'column',
      color: '#506de2',
    }],
    title:{
      text:'Balance Overview'
    },
    yAxis: {
      min: 0,
      max: 200
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    tooltip: {
      format: '{x}:{y}'
    }
  };
  chartOptionsPie: Highcharts.Options = {
    series: [{
      name:'Top Products',
      data: [
        { name: 'Men', y: 30 },
        { name: 'Electronics', y: 50 },
        { name: 'Women', y: 20 }
      ],
      type: 'pie',
      color: '#506de2',
      size: '50%',
      innerSize: '70%'
    }],
    title:{
      text:'Top Products'
    },
    xAxis: {
      categories: ['Men', 'Electronics', 'Women']
    },
    tooltip: {
      format: '{y}'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<span style="font-size: 1.2em"><b>{point.name}</b></span><br>' +
            '<span style="opacity: 0.6">{point.percentage:.1f} %</span>',
          connectorColor: 'rgba(128,128,128,0.5)'
        }
      }
    },
    colors: ['#506de2', '#606de2c9', '#758ce8bf']
  };
  chartCallback: Highcharts.ChartCallbackFunction = function () { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false
}