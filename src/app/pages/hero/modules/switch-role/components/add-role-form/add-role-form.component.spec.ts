import {ComponentFixture, TestBed} from '@angular/core/testing'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {
  ActionsSubject,
  ReducerManager,
  ReducerManagerDispatcher,
  StateObservable,
  Store,
  StoreModule,
} from '@ngrx/store'

import {AddRoleFormComponent} from './add-role-form.component'

describe('AddRoleFormComponent', () => {
  let component: AddRoleFormComponent
  let fixture: ComponentFixture<AddRoleFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRoleFormComponent],
      imports: [ReactiveFormsModule, FormsModule, StoreModule.forRoot({}, {})],
      providers: [
        Store,
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher,
        ActivatedRoute,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoleFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
