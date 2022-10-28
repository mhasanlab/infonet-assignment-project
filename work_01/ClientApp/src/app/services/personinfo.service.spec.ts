import { TestBed } from '@angular/core/testing';

import { PersoninfoService } from './personinfo.service';

describe('PersoninfoService', () => {
  let service: PersoninfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersoninfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
