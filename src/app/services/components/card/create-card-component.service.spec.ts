import { TestBed } from '@angular/core/testing';

import { CreateCardComponentService } from './create-card-component.service';

describe('CreateCardComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateCardComponentService = TestBed.get(CreateCardComponentService);
    expect(service).toBeTruthy();
  });
});
