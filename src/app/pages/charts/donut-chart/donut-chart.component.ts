import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
} from 'ng-apexcharts';
import { DashboardServiceService } from 'src/app/services/dashboard.service.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;

  responseList: any;
  hours: any;
  projects: any;
  userId = sessionStorage.getItem('userId');
  today = new Date();
  currentMonth = this.datePipe.transform(this.today, 'MMMM');
  currentYear = this.datePipe.transform(this.today, 'YYYY');

  constructor(
    private dashboardService: DashboardServiceService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.dashboardService.getTaskAndHours(this.userId).subscribe((res) => {
      console.log(res);
      this.responseList = res;
      const { phours, projects } = this.responseList;
      this.hours = phours;
      this.projects = projects;

      this.chartOptions = {
        series: this.hours,
        labels: this.projects,
        chart: {
          width: 380,
          type: 'donut',
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'gradient',
        },
        legend: this.projects,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      };
    });
  }
}
