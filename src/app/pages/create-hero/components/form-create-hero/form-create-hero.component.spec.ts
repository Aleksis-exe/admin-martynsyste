import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateHeroComponent } from './form-create-hero.component';

describe('FormCreateHeroComponent', () => {
  let component: FormCreateHeroComponent;
  let fixture: ComponentFixture<FormCreateHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
