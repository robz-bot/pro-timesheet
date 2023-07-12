import { Component, OnInit } from '@angular/core';
import { HolidayService } from 'src/app/services/holiday.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
  holidayList: any[]=[];
  currentMonth: number = new Date().getMonth() + 1;

  constructor(private holidayService: HolidayService,) { }

  ngOnInit(): void {
    console.log(this.currentMonth)
    var month = this.currentMonth.toString().padStart(2, '0')
    this.holidayService.getAllByMonth(month).subscribe((res: any) => {
      console.log(res);
      this.holidayList = res;
    })
  }

  onChangeMonth(month:string){
    this.holidayService.getAllByMonth(month).subscribe((res: any) => {
      console.log(res);
      this.holidayList = res;
    })
  }

}
