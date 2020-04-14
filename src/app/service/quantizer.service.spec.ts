import { TestBed } from '@angular/core/testing';

import { QuantizerService } from './quantizer.service';

describe('QuantizerService', () => {
  let service: QuantizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
