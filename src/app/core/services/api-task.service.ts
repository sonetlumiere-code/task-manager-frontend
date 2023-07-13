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

  getTasks(): Observable<TaskInterface[]> {
    const url = `${this.apiURL}`;
    return this.http.get<TaskInterface[]>(url);
  }

  postTask(taskData: NewTaskInterface): Observable<TaskInterface> {
    const url = `${this.apiURL}`;
    const body = {
      ...taskData
    };
    return this.http.post<TaskInterface>(url, body);
  }

  updateTask(taskData: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiURL}/${taskData._id}`;
    const body = {
      ...taskData
    };
    return this.http.put<TaskInterface>(url, body);
  }

  deleteTask(taskData: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiURL}/${taskData._id}`;
    return this.http.delete<TaskInterface>(url);
  }

}
