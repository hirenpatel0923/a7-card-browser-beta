import { TestBed } from '@angular/core/testing';

import { CreateCardComponentDataService } from './create-card-component-data.service';

describe('CreateCardComponentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateCardComponentDataService = TestBed.get(CreateCardComponentDataService);
    expect(service).toBeTruthy();
  });
});
