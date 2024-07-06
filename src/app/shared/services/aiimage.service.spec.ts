import { TestBed } from '@angular/core/testing';

import { AiimageService } from './aiimage.service';

describe('AiimageService', () => {
  let service: AiimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
