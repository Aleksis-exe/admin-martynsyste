import {ComponentFixture, TestBed} from '@angular/core/testing'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {
  ActionsSubject,
  ReducerManager,
  ReducerManagerDispatcher,
  StateObservable,
  Store,
  StoreModule,
} from '@ngrx/store'

import {HeroesComponent} from './heroes.component'

describe('HeroesComponent', () => {
  let component: HeroesComponent
  let fixture: ComponentFixture<HeroesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [ReactiveFormsModule, FormsModule, StoreModule.forRoot({}, {})],
      providers: [
        Store,
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
