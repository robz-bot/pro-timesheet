import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaiCalComponent } from './chennai-cal.component';

describe('ChennaiCalComponent', () => {
  let component: ChennaiCalComponent;
  let fixture: ComponentFixture<ChennaiCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChennaiCalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChennaiCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
