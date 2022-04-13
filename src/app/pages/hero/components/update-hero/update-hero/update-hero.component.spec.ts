import {HttpClient, HttpHandler} from '@angular/common/http'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {
  ActionsSubject,
  ReducerManager,
  ReducerManagerDispatcher,
  StateObservable,
  Store,
  StoreModule,
} from '@ngrx/store'
import {HeroService} from '../../../services/hero.service'

import {UpdateHeroComponent} from './update-hero.component'

describe('UpdateHeroComponent', () => {
  let component: UpdateHeroComponent
  let fixture: ComponentFixture<UpdateHeroComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateHeroComponent],
      imports: [StoreModule.forRoot({}, {})],
      providers: [
        HttpHandler,
        HeroService,
        Store,
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher,
        HttpClient,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHeroComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
