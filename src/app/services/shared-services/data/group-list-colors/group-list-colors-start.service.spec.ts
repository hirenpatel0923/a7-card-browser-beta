import { TestBed } from '@angular/core/testing';

import { GroupListColorsStartService } from './group-list-colors-start.service';

describe('GroupListColorsStartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupListColorsStartService = TestBed.get(GroupListColorsStartService);
    expect(service).toBeTruthy();
  });
});
