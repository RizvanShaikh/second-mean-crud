import { Component, OnInit,Inject,Output,EventEmitter, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TaskService } from '../../Services/task.service';
import {MatSnackBar} from '@angular/material/snack-bar';


export interface DialogData {
  title: string;  
}

@Component({
  selector: 'edite-add-task',
  templateUrl: './edite-task.component.html',
  styleUrls: ['./edite-task.component.css']
})
// for button
export class EditeTaskComponent implements OnInit {
  
  title: string;
  // here we are sending data child to parent thats why we wrote @Output
  @Output() AddTaskEvent = new EventEmitter(); 
  //here we want to import data to child component 
  @Input() ChildTask:any;
    // here all data in the ChildTask
  @Output() refreshEvent = new EventEmitter();
  

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    console.log(this.ChildTask.title);
    this.title= this.ChildTask.title;

    const dialogRef = this.dialog.open(EditeTaskDialogComponent, {
      width: '250px',
      data: {title: this.title,
             _id: this.ChildTask._id}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      console.log('The dialog was closed');
      console.log('Before Add Event');
        this.AddTaskEvent.emit();
    });
  }

  ngOnInit() {

  }

  TestEvent(){
    this.refreshEvent.emit('test');
  }

}

// for the dialoge
@Component({
  selector: 'edite-task-dialog',
  templateUrl: './edite-task-dialoge.component.html',
})
export class EditeTaskDialogComponent {

  @Output() TestEvent = new EventEmitter()
 
  constructor(
    public dialogRef: MatDialogRef<EditeTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service:TaskService,
    private snackbar:MatSnackBar,
      ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  EditeTask(data) {
    console.log(data);
      //  console.log(data); 
       this.service.EditeTask(data).subscribe(responseData=>{
        this.snackbar.open(responseData.messgae,'close',{
          duration:5000
        })
       });

       this.TestEvent.emit();
  }
  

}
//-- to be  remebered 17:15--
/* above we uses Output and EventEmitter because we will send data
  from child to parent in add task  */