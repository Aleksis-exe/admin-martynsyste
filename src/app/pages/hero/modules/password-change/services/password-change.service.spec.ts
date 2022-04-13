import {HttpClient, HttpHandler} from '@angular/common/http'
import {TestBed} from '@angular/core/testing'
import {ActivatedRoute} from '@angular/router'

import {PasswordChangeService} from './password-change.service'

describe('PasswordChangeService', () => {
  let service: PasswordChangeService

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient, HttpHandler]})
    service = TestBed.inject(PasswordChangeService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
