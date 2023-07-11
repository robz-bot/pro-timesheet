import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewleaveComponent } from './newleave.component';

describe('NewleaveComponent', () => {
  let component: NewleaveComponent;
  let fixture: ComponentFixture<NewleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
