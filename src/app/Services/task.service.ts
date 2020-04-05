import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskSchema } from '../Interface/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http:HttpClient) { }

  Task():Observable<TaskSchema[]>{
    // var rizwan  = this._http.get<TaskSchema[]>('http://localhost:3000/api/task');
    // return rizwan
    return  this._http.get<TaskSchema[]>('http://localhost:3000/api/task');
  }
  
  changeStatus(element):Observable<any>{
    // edite
    return this._http.put<any>(`http://localhost:3000/api/task/${element._id}`,element)
  }

  AddTask(data):Observable<any>{
    return this._http.post<any>(`http://localhost:3000/api/task/`,data)
  }
  EditeTask(data):Observable<any>{
    // return this._http.post<any>(`http://localhost:3000/api/task/`,data)
    return this._http.put<any>(`http://localhost:3000/api/task/${data._id}`,data)
  }

  DeleteTask(id):Observable<any>{
    console.log(id);
    return this._http.delete<any>(`http://localhost:3000/api/task/${id}`)
  }
}

/* all ways remeber whenever we uses a serveices we need to import 
http client from the angular core */