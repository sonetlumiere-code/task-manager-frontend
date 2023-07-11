import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { APITaskService } from './api-task.service';

describe('APITaskService', () => {
  let service: APITaskService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [APITaskService]
    });
    service = TestBed.inject(APITaskService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make POST request to create a task', () => {
    const taskData = {
      _id: '123',
      title: 'mock',
      description: 'mocked task',
      completed: true,
    }; /* Mocked task data */
    const expectedResponse = { ...taskData } /* Mocked response data */;

    service.postTask(taskData).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(service.apiURL);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(taskData);
    req.flush(expectedResponse);
  });

  it('should make PUT request to update a task', () => {
    const taskData = {
      _id: '123',
      title: 'mock',
      description: 'mocked task',
      completed: true,
    }; /* Mocked task data */
    const expectedResponse = { ...taskData } /* Mocked response data */ ;

    service.updateTask(taskData).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(`${service.apiURL}/${taskData._id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(taskData);
    req.flush(expectedResponse);
  });

  it('should make DELETE request to delete a task', () => {
    const taskData = {
      _id: '123',
      title: 'mock',
      description: 'mocked task',
      completed: true,
    }; /* Mocked task data */

    service.deleteTask(taskData).subscribe();

    const req = httpMock.expectOne(`${service.apiURL}/${taskData._id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

});
