import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogAddTaskComponent } from './dialog-add-task/dialog-add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public dialog: MatDialog, public router: Router) {}

  openDialog() {
    this.dialog.open(DialogAddTaskComponent, {
      width: '50%',
    });
  }
}
