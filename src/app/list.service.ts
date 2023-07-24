import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private tasks: Task[] = [];

  constructor() {
    // Inicializamos el arreglo de tareas con algunos datos de ejemplo
    this.tasks = [
      {
        id: 1,
        name: 'Tarea 1',
        time: new Date(),
        status: 'Pendiente',
        department: 'Departamento 1',
      },
      {
        id: 2,
        name: 'Tarea 2',
        time: new Date(),
        status: 'En progreso',
        department: 'Departamento 2',
      },
      {
        id: 3,
        name: 'Tarea 3',
        time: new Date(),
        status: 'Completada',
        department: 'Departamento 3',
      },
    ];
  }

  // Retorna todas las tareas
  getTasks(): Task[] {
    return this.tasks;
  }

  // Agregamos esta función para eliminar una tarea
  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  // Otras funciones del servicio, si las tienes...
}
