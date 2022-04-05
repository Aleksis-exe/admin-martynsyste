import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateHeroComponent } from './form-update-hero.component';

describe('FormUpdateHeroComponent', () => {
  let component: FormUpdateHeroComponent;
  let fixture: ComponentFixture<FormUpdateHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpdateHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
