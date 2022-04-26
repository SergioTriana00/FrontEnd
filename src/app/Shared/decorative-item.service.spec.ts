import { TestBed } from '@angular/core/testing';

import { DecorativeItemService } from './decorative-item.service';

describe('DecorativeItemService', () => {
  let service: DecorativeItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecorativeItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
