import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';

import { Task } from './../models/task.model';
import { TaskArrayService } from './../services/task-array.service';

@Component({
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit, OnDestroy {
  task: Task;

  constructor(
    private taskArrayService: TaskArrayService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.task = new Task(null, '', null, null);

    // it is not necessary to save subscription to route.paramMap
    // it handles automatically
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.taskArrayService.getTask(+params.get('id'))))
      .subscribe(
        task => this.task = {...task},
        err => console.log(err)
    );
  }

  ngOnDestroy(): void {
  }

  saveTask() {
    const task = {...this.task};

    if (task.id) {
      this.taskArrayService.updateTask(task);
    } else {
      this.taskArrayService.addTask(task);
    }
  }

  goBack(): void {
  }
}
