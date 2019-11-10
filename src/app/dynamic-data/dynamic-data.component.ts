import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TaskService } from '../Services/task.service';
import { TaskSchema } from '../Interface/task';

@Component({
  selector: 'app-dynamic-data',
  templateUrl: './dynamic-data.component.html',
  styleUrls: ['./dynamic-data.component.css']
})
export class DynamicDataComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'title', 'isCompleted','Action'];
  dataSource:MatTableDataSource<TaskSchema>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private taskService:TaskService,private snackbar:MatSnackBar) {}
  
  ngOnInit() {
    this.taskService.Task().subscribe(responseData=>{
      this.dataSource = new MatTableDataSource<TaskSchema>(responseData);
      this.dataSource.paginator = this.paginator;
      console.log(responseData);
    })
  }

}
