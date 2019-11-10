import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskComponent } from './task/task.component';
import { TaskDynamicComponent } from './task-dynamic/task-dynamic.component';

// static table
import {
        MatTableModule,
        MatPaginatorModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSortModule
  } from '@angular/material';
  
import { HttpClientModule } from '@angular/common/http';
import { TaskService} from './Services/task.service';
import { DynamicDataComponent } from './dynamic-data/dynamic-data.component';
import { AddTaskComponent, AddTaskDialogComponent } from './task/add-task/add-task.component'
import { EditeTaskComponent, EditeTaskDialogComponent } from './task/edite-task/edite-task.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDynamicComponent,
    DynamicDataComponent,
    // this is dialog component
    AddTaskComponent,
    AddTaskDialogComponent,
    EditeTaskComponent,
    EditeTaskDialogComponent

   
  ],
  entryComponents:[AddTaskDialogComponent,EditeTaskDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSortModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* in declaration there will be component,
   in import there will be the all module  will be,
   providers there will be services
*/