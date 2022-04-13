import {HttpClient} from '@angular/common/http'
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {TestBed} from '@angular/core/testing'

import {HeroesService} from './heroes.service'

describe('HeroesService', () => {
  let service: HeroesService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    })
    service = TestBed.inject(HeroesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
