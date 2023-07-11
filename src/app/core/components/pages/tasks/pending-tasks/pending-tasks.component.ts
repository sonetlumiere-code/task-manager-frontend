import { Component, Input } from '@angular/core';
import { TaskInterface } from 'src/app/shared/types/task.interface';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.scss']
})
export class PendingTasksComponent {
  @Input() pendingTasks!: TaskInterface[];

}
