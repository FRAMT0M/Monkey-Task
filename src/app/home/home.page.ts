import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  tasks: Task[] = [];

  newTask: Task = {
    id: 0,
    name: '',
    time: new Date(),
    status: 'Pendiente',
    department: '',
  };

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.tasks = this.listService.getAllTasks();
  }

  getTaskStatusClass(status: string): string {
    if (status === 'completed') {
      return 'task-completed';
    } else if (status === 'pending') {
      return 'task-pending';
    } else {
      return 'task-default';
    }
  }

  getTaskStatusColor(status: string): string {
    if (status === 'completed') {
      return '#28a745'; // Verde
    } else if (status === 'pending') {
      return '#ffcc00'; // Amarillo
    } else {
      return '#6c757d'; // Gris
    }
  }

  onDeleteTask(task: Task) {
    this.listService.deleteTask(task);
    this.tasks = this.listService.getAllTasks();
  }

  onAddTask() {
    this.newTask.id = this.generateUniqueId();
    this.listService.addTask(this.newTask);
    this.newTask = {
      id: 0,
      name: '',
      time: new Date(),
      status: 'Pendiente',
      department: '',
    };
    this.tasks = this.listService.getAllTasks();
  }

  private generateUniqueId(): number {
    // Generar un ID único basado en la fecha y hora actual en milisegundos
    return Date.now();
  }
}
