import { TestBed } from '@angular/core/testing';

import { FabricjsLibraryService } from './fabricjs-library.service';

describe('FabricjsLibraryService', () => {
  let service: FabricjsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FabricjsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
