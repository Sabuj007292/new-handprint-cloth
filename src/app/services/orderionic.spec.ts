import { TestBed } from '@angular/core/testing';

import { Orderionic } from './orderionic';

describe('Orderionic', () => {
  let service: Orderionic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Orderionic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
