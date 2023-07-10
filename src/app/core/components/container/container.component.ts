import { Component } from '@angular/core';
import { AddTaskModalComponent } from '../modals/add-task-modal/add-task-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  constructor(
    public dialog: MatDialog,
  ) { }

  openCreateTaskModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'dialog-responsive';
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      title: 'New Class'
    };
    const dialogRef = this.dialog.open(AddTaskModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      console.log('Dialog result:', data);
    });
  }

}
