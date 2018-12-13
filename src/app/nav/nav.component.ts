import { Component, OnInit  } from '@angular/core';  
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle = "Aplikasi Monitoring Sawit"

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
    });
  }

}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'about.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}