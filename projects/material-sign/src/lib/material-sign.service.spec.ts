import { TestBed } from '@angular/core/testing';

import { MaterialSignService } from './material-sign.service';

describe('MaterialSignService', () => {
  let service: MaterialSignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialSignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
