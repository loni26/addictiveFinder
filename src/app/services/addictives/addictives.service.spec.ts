import { TestBed } from '@angular/core/testing';

import { AddictivesService } from './addictives.service';

describe('AddictivesService', () => {
  let service: AddictivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddictivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
