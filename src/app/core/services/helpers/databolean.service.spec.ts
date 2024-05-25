import { TestBed } from '@angular/core/testing';

import { DataboleanService } from './databolean.service';

describe('DataboleanService', () => {
  let service: DataboleanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataboleanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
