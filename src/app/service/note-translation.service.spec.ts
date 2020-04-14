import { TestBed } from '@angular/core/testing';

import { NoteTranslationService } from './note-translation.service';

describe('NoteTranslationService', () => {
  let service: NoteTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
