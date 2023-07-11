import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared/shared.service';
import { TaskInterface } from 'src/app/shared/types/task.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasksData$!: Observable<TaskInterface[]>;
  pendingTasks: TaskInterface[] = [];

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.tasksData$ = this.sharedService.tasksData$;
    this.tasksData$.subscribe((tasksData) => {
      this.pendingTasks = tasksData.filter(task => !task.completed);
    });
  }
}
