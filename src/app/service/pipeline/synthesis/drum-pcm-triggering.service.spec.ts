import { TestBed } from '@angular/core/testing';

import { DrumPcmTriggeringService } from './drum-pcm-triggering.service';

describe('DrumPcmTriggeringService', () => {
  let service: DrumPcmTriggeringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrumPcmTriggeringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
