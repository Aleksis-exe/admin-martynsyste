import {ComponentFixture, TestBed} from '@angular/core/testing'
import {Router} from '@angular/router'
import {StoreRouterConnectingModule} from '@ngrx/router-store'
import {
  ActionsSubject,
  ReducerManager,
  ReducerManagerDispatcher,
  StateObservable,
  Store,
  StoreModule,
} from '@ngrx/store'

import {CreateHeroComponent} from './create-hero.component'

describe('CreateHeroComponent', () => {
  let component: CreateHeroComponent
  let fixture: ComponentFixture<CreateHeroComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateHeroComponent],
      providers: [
        Store,
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher,
        Router,
      ],
      imports: [StoreRouterConnectingModule, StoreModule.forRoot({}, {})],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHeroComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
