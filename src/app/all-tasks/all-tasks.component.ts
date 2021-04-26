import { Component, OnInit } from '@angular/core';
import { Task } from '../services/models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {

  todasAsTarefas: Task[] = [];
  flag: string = "all-task";

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.onUpdateTasks()
    .subscribe(
      () =>{
      this.init();
      }
    );

    this.init();
  }

  private init(){
    this.listAllTask();
  }

  private listAllTask(){
    this.taskService
    .listAllTask()
    .subscribe(
      (tarefas: Task[]) =>{
        this.todasAsTarefas = tarefas;
      }
    )

  }


}
