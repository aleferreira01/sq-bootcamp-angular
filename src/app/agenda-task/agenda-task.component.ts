import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Task } from '../services/models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-agenda-task',
  templateUrl: './agenda-task.component.html',
  styleUrls: ['./agenda-task.component.scss']
})

export class AgendaTaskComponent implements OnInit {

  @Input() tasks: Task[] = [];
  @Input() flag: string = "";

  constructor(private taskServe: TaskService) { }

  ngOnInit(): void {
  }

  done(task: Task, event: MatCheckboxChange) {
    this.taskServe.alterTask(task.id, task).subscribe();
  }

  deleteTask(taskId: number | undefined) {
    this.taskServe.deleteTask(taskId).subscribe();
  }

  isGreaterOrEqualReminderDate(date: Date): boolean {

    const upComingDate = new Date();
    upComingDate.setHours(0,0,0,0);
    upComingDate.setDate(upComingDate.getDate() + 2);

    const taskDate = new Date(date);
    taskDate.setHours(0,0,0,0);

    return taskDate.getTime() >= upComingDate.getTime() ||
      this.flag === "all-task";

  }

}
