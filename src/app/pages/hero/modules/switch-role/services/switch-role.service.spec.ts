import {HttpClientTestingModule} from '@angular/common/http/testing'
import {TestBed} from '@angular/core/testing'

import {SwitchRoleService} from './switch-role.service'

describe('SwitchRoleService', () => {
  let service: SwitchRoleService

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]})
    service = TestBed.inject(SwitchRoleService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
