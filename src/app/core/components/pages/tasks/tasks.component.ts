import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  ) { }

  ngOnInit(): void {
    this.tasksData$ = this.sharedService.tasksData$;
    this.tasksData$.subscribe((tasksData) => {
      this.completedTasks = tasksData.filter(task => task.completed);
      this.pendingTasks = tasksData.filter(task => !task.completed);
    });
  }

}
