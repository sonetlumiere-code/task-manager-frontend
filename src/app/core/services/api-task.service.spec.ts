import { TestBed } from '@angular/core/testing';

import { APITaskService } from './api-task.service';

describe('TaskService', () => {
  let service: APITaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APITaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
