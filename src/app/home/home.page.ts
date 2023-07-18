import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../models/task.model';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tasks: Task[] = [];

  constructor(private router: Router, private listService: ListService) {}

  ngOnInit() {
    this.tasks = this.listService.getTasks();
  }

  getTaskStatusClass(status: string) {
    if (status === 'Pendiente') {
      return 'task-pending';
    } else if (status === 'Resuelto') {
      return 'task-resolved';
    } else if (status === 'En Proceso') {
      return 'task-in-progress';
    } else {
      return '';
    }
  }
}
