import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAlertComponent } from './box-alert.component';

describe('BoxAlertComponent', () => {
  let component: BoxAlertComponent;
  let fixture: ComponentFixture<BoxAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
