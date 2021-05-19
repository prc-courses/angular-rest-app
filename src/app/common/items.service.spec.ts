import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ItemsService } from './items.service';

describe('ItemsiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ItemsService]
    });
  });

  it('should inject service', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));
});
