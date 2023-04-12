import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
} from 'ng-apexcharts';
import { DashboardServiceService } from 'src/app/services/dashboard.service.service';
type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;
  constructor(
    private dashboardService: DashboardServiceService,
    private datePipe: DatePipe
  ) {}
  responseList: any;
  hours: any;
  tasks: any;
  userId = sessionStorage.getItem('userId');
  today = new Date();
  currentMonth = this.datePipe.transform(this.today, 'MMMM');
  currentYear = this.datePipe.transform(this.today, 'YYYY');

  ngOnInit(): void {
    this.dashboardService.getTaskAndHours(this.userId).subscribe((res) => {
      console.log(res);
      this.responseList = res;
      const { thours, tasks } = this.responseList;
      this.hours = thours;
      this.tasks = tasks;

      this.chartOptions = {
        series: [
          {
            name: 'task',
            data: this.hours,
          },
        ],
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function (chart: any, w: any, e: any) {
              console.log(chart, w, e);
            },
          },
        },
        colors: [
          '#008FFB',
          '#00E396',
          '#FEB019',
          '#FF0000',
          '#775DD0',
          '#546E7A',
          '#26a69a',
          '#D10CE8',
        ],
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          },
        },
        dataLabels: {
          enabled: true,
        },
        legend: {
          show: true,
        },
        grid: {
          show: true,
        },
        xaxis: {
          categories: this.tasks,
          title:{
            text:'tasks'
          },
          labels: {
            style: {
              colors: [
                '#008FFB',
                '#00E396',
                '#FEB019',
                '#FF0000',
                '#775DD0',
                '#546E7A',
                '#26a69a',
                '#D10CE8',
              ],
              fontSize: '12px',
            },
          },
        },
        yaxis: {
          title: {
            text: 'Hours'
          }
        }
      };
    });
  }
}
