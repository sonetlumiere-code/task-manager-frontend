import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { APITaskService } from './services/api-task.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task-manager-app';

  constructor(
    private apiTaskService: APITaskService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.apiTaskService.getTasks().pipe(
      tap((tasksData) => {
        console.log({ tasksData });
      })
    ).subscribe((tasksData) => {
      this.sharedService.updateTasksData(tasksData);
    });
  }

}
