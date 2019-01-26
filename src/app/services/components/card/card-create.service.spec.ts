import { TestBed } from '@angular/core/testing';

import { CardCreateService } from './card-create.service';

describe('CardCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardCreateService = TestBed.get(CardCreateService);
    expect(service).toBeTruthy();
  });
});
