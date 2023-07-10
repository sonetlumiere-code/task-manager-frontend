import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material/material.module';
import { AddTaskButtonComponent } from './components/buttons/add-task-button/add-task-button.component';
import { DialogModalComponent } from './components/modals/dialog-modal/dialog-modal.component';

@NgModule({
  declarations: [
    AddTaskButtonComponent,
    DialogModalComponent
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
    DialogModalComponent
  ]
})
export class SharedModule { }
