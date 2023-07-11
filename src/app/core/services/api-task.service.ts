import { Injectable } from '@angular/core';
import { NewTaskInterface, TaskInterface } from '../../shared/types/task.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APITaskService {
  apiURL = 'https://task-manager-server-8l4o.onrender.com/tasks';

  constructor(
    private http: HttpClient
  ) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getTasks(): Observable<any> {
    const url = `${this.apiURL}`;
    return this.http.get(url);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postTask(taskData: NewTaskInterface): Observable<any> {
    const url = `${this.apiURL}`;
    const body = {
      ...taskData
    };
    return this.http.post(url, body);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateTask(taskData: TaskInterface): Observable<any> {
    const url = `${this.apiURL}/${taskData._id}`;
    const body = {
      ...taskData
    };
    return this.http.put(url, body);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteTask(taskData: TaskInterface): Observable<any> {
    const url = `${this.apiURL}/${taskData._id}`;
    return this.http.delete(url);
  }

}
