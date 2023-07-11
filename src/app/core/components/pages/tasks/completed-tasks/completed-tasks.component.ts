import { Component, Input } from '@angular/core';
import { TaskInterface } from 'src/app/shared/types/task.interface';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent {
  @Input() completedTasks!: TaskInterface[];
}
