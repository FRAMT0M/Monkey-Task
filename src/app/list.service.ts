import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private tasks: Task[] = [];

  constructor() {}

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  saveTask(task: Task): void {
    // Aquí podrías implementar la lógica para guardar la tarea en una base de datos o realizar alguna otra acción necesaria
    // Por ejemplo, si tienes una API, podrías hacer una llamada POST para guardar la tarea en el servidor.
    // Por simplicidad, en este servicio, simplemente agregamos la tarea a la lista de tareas utilizando el método addTask.
    this.addTask(task);
  }
}