import { TestBed } from '@angular/core/testing';

import { GestionCandsService } from './gestion-cands.service';

describe('GestionCandsService', () => {
  let service: GestionCandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
