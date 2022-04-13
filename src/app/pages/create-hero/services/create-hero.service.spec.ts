import {HttpClient, HttpHandler} from '@angular/common/http'
import {TestBed} from '@angular/core/testing'

import {CreateHeroService} from './create-hero.service'

describe('CreateHeroService', () => {
  let service: CreateHeroService

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient, HttpHandler]})
    service = TestBed.inject(CreateHeroService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
