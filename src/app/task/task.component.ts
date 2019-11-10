import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TaskService } from '../Services/task.service';
import { TaskSchema } from '../Interface/task';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // what will data to be shown in a table
  displayedColumns: string[] = ['_id', 'title', 'isCompleted','Action'];
  dataSource:MatTableDataSource<TaskSchema>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // for filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //---------
  
  constructor(
    private taskService:TaskService,
    private snackbar:MatSnackBar
    ) {

   }

// we imported task servces and TaskSchema to use services -------------
  ngOnInit() {
    // comming data frm the api we will store in responseData
    // this.taskService.Task().subscribe(responseData=>{
    //   this.dataSource = new MatTableDataSource<TaskSchema>(responseData);
    //  console.log(responseData);
    //   // this line for the paginator
    //   this.dataSource.paginator = this.paginator;
    //   console.log(responseData);

    // })
    this.getTaskList();
  }
  //----------------------------
 getTaskList(){
   // comming data frm the api we will store in responseData
    this.taskService.Task().subscribe(responseData=>{
      this.dataSource = new MatTableDataSource<TaskSchema>(responseData);
     console.log(responseData);
      // this line for the paginator
      this.dataSource.paginator = this.paginator;
        console.log(responseData);
        // for sorting data in a table
        this.dataSource.sort = this.sort;
    })
}
  //--------this for the change status------
  changeStatus(element){
    console.log(element);
    element.isCompleted = element.isCompleted == true ? false:true;
    this.taskService.changeStatus(element).subscribe(responseData=>{
      this.snackbar.open(responseData.messgae,'close',{
        duration:5000
      })
      console.log(responseData.messgae);
    });
  }
  //-----------
  deleteTask(element) {
    // console.log(element);
    let check = confirm('Are you sure?');
    console.log(check);
    if(check) {
    this.taskService.DeleteTask(element._id).subscribe(responseData=>{
     this.snackbar.open(responseData.messgae,'close',{
       duration:5000
     })
    //  by writing this we don't need to reload the page and see changes
     this.getTaskList();
    });
   
  }
}

// this is for the add task so we dont need to refresh page to see changes
// for add Task
RefreshTaskList(event) {
  console.log('Event',event);
  this.getTaskList();
}

}


