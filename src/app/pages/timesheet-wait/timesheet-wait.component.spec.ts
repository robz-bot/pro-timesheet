import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetWaitComponent } from './timesheet-wait.component';

describe('TimesheetWaitComponent', () => {
  let component: TimesheetWaitComponent;
  let fixture: ComponentFixture<TimesheetWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetWaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
