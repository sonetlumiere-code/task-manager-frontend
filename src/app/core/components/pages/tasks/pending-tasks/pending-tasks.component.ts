import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { APITaskService } from 'src/app/core/services/api-task.service';
import { SharedService } from 'src/app/shared/services/shared/shared.service';
import { TaskInterface } from 'src/app/shared/types/task.interface';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.scss']
})
export class PendingTasksComponent {
  @Input() pendingTasks!: TaskInterface[];

  tasksData$!: Observable<TaskInterface[]>;

  constructor(
    private sharedService: SharedService,
    private apiTaskService: APITaskService,
    private snackBar: MatSnackBar
  ) { }

  completeTask(task: TaskInterface): void {
    task.completed = true;
    this.apiTaskService.updateTask(task).subscribe({
      next: (response) => {
        this.snackBar.open('Tarea actualizada', '', { duration: 4000 });
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
        this.snackBar.open('Tarea eliminada', '', { duration: 4000 });
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
