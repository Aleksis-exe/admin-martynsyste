import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { SwitchRoleComponent } from './switch-role.component';

describe('SwitchRoleComponent', () => {
  let component: SwitchRoleComponent;
  let fixture: ComponentFixture<SwitchRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchRoleComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
    ],
      providers: [provideMockStore({})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
