import {Component, OnInit} from '@angular/core';
import {TaskService} from "./task.service";
import {Task} from "./task.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.initializeTaskList();
  }

  initializeTaskList() {
    this.taskService.getTasks().subscribe((tasks: any[]) => this.tasks = tasks, error => {
      this.tasks = [];
      console.log("Não foi possivel obter a lista de tasks através do servidor.")
    })
  }

  updateTask(task: Task) {
    this.taskService.saveTask(task).subscribe(response => {
      const index = this.getTaskIndex(task.id);
      if (index) {
        this.tasks[index] = task;
        console.log(`a task ${response.id} foi alterada, novo valor: `, response)
      }
    });
  }

  addTask(event) {
    this.taskService.saveTask(event.newValue).subscribe((response: Task) => {
      this.tasks.push(response);
      console.log(`Uma nova task foi adicionada`);
      event.callback();
    });
  }

  getTaskIndex(taskId): number {
    const found = this.tasks.find((it: Task) => it.id === taskId)
    return found !== -1 ? this.tasks.indexOf(found) : null;
  }
}
