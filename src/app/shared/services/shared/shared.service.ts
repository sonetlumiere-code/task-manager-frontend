import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskInterface } from '../../types/task.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public tasksDataSubject = new BehaviorSubject<TaskInterface[]>([]);
  tasksData$ = this.tasksDataSubject.asObservable();

  updateTasksData(tasksData: TaskInterface[]) {
    this.tasksDataSubject.next(tasksData);
  }
}
