import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Task} from "../task.model";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.scss']
})
export class TasksAddComponent implements OnInit {

  @Output() onTaskAdd = new EventEmitter();

  taskName = '';

  constructor() { }

  ngOnInit(): void {
  }

  onTaskAdded(event) {
    this.taskName = '';
    this.onTaskAdd.emit({
      newValue: new Task(event.target.value, false, this.getTodayAsString()),
      callBack: this.clearTaskName.bind(this)
    })
  }

  clearTaskName() {
    this.taskName = '';
  }

  getTodayAsString() {
    const date = new Date();
    return date.toLocaleDateString();
  }

}
