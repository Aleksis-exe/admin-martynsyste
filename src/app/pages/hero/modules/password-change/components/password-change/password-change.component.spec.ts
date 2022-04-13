import {ComponentFixture, TestBed} from '@angular/core/testing'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'

import {PasswordChangeComponent} from './password-change.component'

describe('PasswordChangeComponent', () => {
  let component: PasswordChangeComponent
  let fixture: ComponentFixture<PasswordChangeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordChangeComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [ActivatedRoute],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
