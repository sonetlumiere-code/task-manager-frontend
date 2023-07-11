import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APITaskService } from 'src/app/core/services/api-task.service';
import { SharedService } from 'src/app/shared/services/shared/shared.service';
import { TaskInterface } from 'src/app/shared/types/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasksData$!: Observable<TaskInterface[]>;
  completedTasks: TaskInterface[] = [];
  pendingTasks: TaskInterface[] = [];

  constructor(
    private sharedService: SharedService,
    private apiTaskService: APITaskService
  ) { }

  ngOnInit(): void {
    this.tasksData$ = this.sharedService.tasksData$;
    this.tasksData$.subscribe((tasksData) => {
      this.completedTasks = tasksData.filter(task => task.completed);
      this.pendingTasks = tasksData.filter(task => !task.completed);
    });
  }

  completeTask(task: TaskInterface): void {
    task.completed = true;
    this.apiTaskService.updateTask(task).subscribe({
      next: (response) => {
        const currentTasksData = this.sharedService.tasksDataSubject.getValue();
        const updatedTasksData = currentTasksData.map(task => task._id === response._id ? response : task);
        this.sharedService.updateTasksData(updatedTasksData);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  deleteTask(task: TaskInterface): void {
    this.apiTaskService.deleteTask(task).subscribe({
      next: (response) => {
        console.log(response);
        const currentTasksData = this.sharedService.tasksDataSubject.getValue();
        const updatedTasksData = currentTasksData.filter(task => task._id !== response._id);
        this.sharedService.updateTasksData(updatedTasksData);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
