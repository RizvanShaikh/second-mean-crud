import { Component, OnInit,Inject,Output,EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TaskService } from '../../Services/task.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

export interface DialogData {
  title: string;
  
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
// for button
export class AddTaskComponent implements OnInit {
  
  title: string;
  // here we are sending data child to parent thats why we wrote @Output
  @Output() AddTaskEvent = new EventEmitter(); 

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '250px',
      data: {title: this.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Before Add Event');
        this.AddTaskEvent.emit();
    });
  }

  ngOnInit() {
  }

}

// for the dialoge
@Component({
  selector: 'add-task-dialog',
  templateUrl: './add-task-dialoge.component.html',
})
export class AddTaskDialogComponent {
 
  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service:TaskService,
    private snackbar:MatSnackBar
      ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  AddTask(data) {
    
       console.log(data); 
       this.service.AddTask(data).subscribe(responseData=>{
        this.snackbar.open(responseData.messgae,'close',{
          duration:5000
        })
       
       });
  }
  

}
//-- to be  remebered 17:15--
/* above we uses Output and EventEmitter because we will send data
  from child to parent in add task  */