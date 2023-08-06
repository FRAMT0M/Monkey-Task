import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  constructor() {
    // Inicializa tareas de ejemplo (puedes reemplazarlo con llamadas a una API)
    this.tasks.next([
      { id: 1, name: 'Tarea 1', department: 'Departamento A', time: new Date(), status: 'Pendiente' },
      { id: 2, name: 'Tarea 2', department: 'Departamento B', time: new Date(), status: 'En progreso' }
      // Agrega más tareas de ejemplo aquí
    ]);
  }

  getTasks(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  getTasksByDepartment(department: string): Observable<Task[]> {
    return this.tasks.pipe(
      map(tasks => tasks.filter(task => task.department === department))
    );
  }

  addTask(task: Task): void {
    const currentTasks = this.tasks.value;
    const updatedTasks = [...currentTasks, task];
    this.tasks.next(updatedTasks);
  }

  // Implementa los métodos para actualizar y eliminar tareas según tus necesidades
}

export interface Task {
  id: number;
  name: string;
  department: string;
  time: Date;
  status: string;
}
