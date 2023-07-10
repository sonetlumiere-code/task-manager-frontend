import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
    private dialogRef: MatDialogRef<AddTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.addTaskForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
    });
  }

  saveTask(): void {
    this.formSubmitted = true;
    if (this.addTaskForm.valid) {
      const request: NewTaskInterface = {
        ...this.addTaskForm.value
      };
      console.log({ request });

      this.dialogRef.close(this.addTaskForm.value);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
