import { Injectable } from '@angular/core';
import { Task } from './models/task.model'; // Asegúrate de que la ruta sea correcta para el modelo Task

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private tasks: Task[] = [];

  constructor() {}

  addTask(task: Task) {
    this.tasks.push(task);
  }

  // Agrega otros métodos para gestionar las tareas si es necesario

  getAllTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}
