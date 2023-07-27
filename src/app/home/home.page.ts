import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { ListService } from '../app/list.service'; // Asegúrate de que la ruta sea correcta para el servicio ListService

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
    if (status === 'Pendiente') {
      return 'task-pending';
    } else if (status === 'En progreso') {
      return 'task-in-progress';
    } else if (status === 'Completada') {
      return 'task-completed';
    } else {
      return 'task-default';
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
