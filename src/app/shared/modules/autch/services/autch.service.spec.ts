import {TestBed} from '@angular/core/testing'
import {provideMockStore} from '@ngrx/store/testing'
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {AutchService} from './autch.service'

describe('AutchService', () => {
  let service: AutchService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
    })
    service = TestBed.inject(AutchService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
