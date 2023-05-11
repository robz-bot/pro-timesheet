import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillablechartComponent } from './billablechart.component';

describe('BillablechartComponent', () => {
  let component: BillablechartComponent;
  let fixture: ComponentFixture<BillablechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillablechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillablechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
