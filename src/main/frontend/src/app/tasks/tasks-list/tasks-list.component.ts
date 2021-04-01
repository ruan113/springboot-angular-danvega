import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from "../task.model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  @Input() public tasks: Task[] = [];
  @Output() onTaskChange = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    // this.tasks.push(new Task(1, "Task 1", true, "07/08/21"))
    // this.tasks.push(new Task(2, "Task 2", false, "07/08/21"))
    // this.tasks.push(new Task(3, "Task 3", false, "07/08/21"))
  }

  getDueDateLabel(task: Task) {
    return task.completed ? "badge badge-success" : "badge badge-primary";
  }

  onTaskChanged(event, task: Task) {
    let aux = {...task}
    aux.completed = event.target.checked;
    this.onTaskChange.emit(aux)
  }
}
