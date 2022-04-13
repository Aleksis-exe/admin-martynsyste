import {ComponentFixture, TestBed} from '@angular/core/testing'
import {
  ActionsSubject,
  ReducerManager,
  ReducerManagerDispatcher,
  StateObservable,
  Store,
  StoreModule,
} from '@ngrx/store'

import {DangerZoneComponent} from './danger-zone.component'

describe('DangerZoneComponent', () => {
  let component: DangerZoneComponent
  let fixture: ComponentFixture<DangerZoneComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DangerZoneComponent],
      imports: [StoreModule.forRoot({}, {})],
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
    fixture = TestBed.createComponent(DangerZoneComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
