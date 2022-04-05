import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarAutchUserComponent } from './avatar-autch-user.component';

describe('AvatarAutchUserComponent', () => {
  let component: AvatarAutchUserComponent;
  let fixture: ComponentFixture<AvatarAutchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarAutchUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarAutchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
