import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material/material.module';
import { AddTaskButtonComponent } from './components/buttons/add-task-button/add-task-button.component';
import { DialogModalComponent } from './components/modals/dialog-modal/dialog-modal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AddTaskButtonComponent,
    DialogModalComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AddTaskButtonComponent,
    DialogModalComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
