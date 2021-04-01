import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "./task.model";

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<any> {
    return this.http.get<any>('/api/tasks');
  }

  saveTask(task: Task): Observable<any> {
    return this.http.post('/api/tasks/save', task);
  }
}
