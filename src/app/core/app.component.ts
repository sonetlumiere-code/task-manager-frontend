import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { APITaskService } from './services/api-task.service';
import { SharedService } from '../shared/services/shared/shared.service';
import { SpinnerService } from '../shared/services/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spinnerState$!: Observable<boolean>;

  constructor(
    private apiTaskService: APITaskService,
    private sharedService: SharedService,
    private spinnerService: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.getTasks();
    this.spinnerState$ = this.spinnerService.spinnerState$;
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
