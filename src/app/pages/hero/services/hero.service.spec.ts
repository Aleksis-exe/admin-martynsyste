import {HttpClient} from '@angular/common/http'
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {TestBed} from '@angular/core/testing'

import {HeroService} from './hero.service'

describe('HeroService', () => {
  let service: HeroService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    })
    service = TestBed.inject(HeroService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
