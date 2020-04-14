import { TestBed } from '@angular/core/testing';

import { AudioOutputService } from './audio-output.service';

describe('AudioOutputService', () => {
  let service: AudioOutputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioOutputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
