import { TestBed, async, inject } from '@angular/core/testing';

import { DraftGuard } from './draft.guard';

describe('DraftGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DraftGuard]
    });
  });

  it('should ...', inject([DraftGuard], (guard: DraftGuard) => {
    expect(guard).toBeTruthy();
  }));
});
