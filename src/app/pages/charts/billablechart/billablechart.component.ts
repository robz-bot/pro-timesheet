import { ChartComponent } from 'ng-apexcharts';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

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
  selector: 'app-billablechart',
  templateUrl: './billablechart.component.html',
  styleUrls: ['./billablechart.component.css']
})
export class BillablechartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;

  responseList: any;
  billable: any;
  nonBillable: any;
  userId = sessionStorage.getItem('userId');
  today = new Date();
  currentMonth = this.datePipe.transform(this.today, 'MMMM');
  currentYear = this.datePipe.transform(this.today, 'YYYY');

  constructor(
    private dashboardService: DashboardServiceService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.dashboardService.getBillable(this.userId).subscribe((res: any) => {
      console.log(res);
      this.responseList = res;
      const { Billable, NonBillable } = this.responseList;
      this.billable = Billable;
      this.nonBillable = NonBillable;

      this.chartOptions = {
        series: [this.billable, this.nonBillable],
        labels: ["Billable", "Non Billable"],
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
        legend: this.billable,
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
