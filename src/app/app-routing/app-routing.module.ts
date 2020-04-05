import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from '../task/task.component';
import { TaskDynamicComponent } from '../task-dynamic/task-dynamic.component';
import { DynamicDataComponent } from '../dynamic-data/dynamic-data.component';
import { TestComponent } from '../test/test.component';

const routes: Routes = [
  { path: 'task', component: TaskComponent },
  { path: 'task-dynamic', component: TaskDynamicComponent },
  { path: 'dynamic-data', component: DynamicDataComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }