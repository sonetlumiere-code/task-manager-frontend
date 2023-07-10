import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task-button',
  templateUrl: './add-task-button.component.html',
  styleUrls: ['./add-task-button.component.scss']
})
export class AddTaskButtonComponent {
  @Input() icon!: string;
  @Input() tooltip!: string;
  @Output() clickEvent = new EventEmitter<string>();

  handleClick() {
    this.clickEvent.emit();
  }
}
