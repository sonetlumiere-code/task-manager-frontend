import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { APITaskService } from 'src/app/core/services/api-task.service';
import { SharedService } from 'src/app/shared/services/shared/shared.service';
import { NewTaskInterface } from 'src/app/shared/types/task.interface';

interface DialogData {
  title: string;
}

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent implements OnInit {
  addTaskForm!: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private apiTaskService: APITaskService,
    private sharedService: SharedService,
    private dialogRef: MatDialogRef<AddTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.addTaskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['']
    });
  }

  saveTask(): void {
    this.formSubmitted = true;
    if (this.addTaskForm.valid) {
      const newTask: NewTaskInterface = {
        ...this.addTaskForm.value
      };
      console.log({ newTask });
      this.dialogRef.close(this.addTaskForm.value);

      this.apiTaskService.postTask(newTask).subscribe({
        next: (response) => {
          const currentTasksData = this.sharedService.tasksDataSubject.getValue();
          const updatedTasksData = [...currentTasksData, response];
          this.sharedService.updateTasksData(updatedTasksData);
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
