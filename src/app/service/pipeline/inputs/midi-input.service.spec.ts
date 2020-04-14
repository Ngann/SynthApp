import { TestBed } from '@angular/core/testing';

import { MidiInputService } from './midi-input.service';

describe('MidiInputService', () => {
  let service: MidiInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MidiInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
