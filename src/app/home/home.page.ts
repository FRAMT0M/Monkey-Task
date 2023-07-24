import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tasks: Task[] = [];
  selectedDepartment: string = 'Todos';
  departments: string[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.tasks = this.listService.getTasks();
    this.departments = this.listService.getDepartments();
  }

  getTaskStatusClass(status: string) {
    // Agrega aquí la lógica para devolver la clase CSS según el estado de la tarea (pendiente, en progreso, completada, etc.).
    // Ejemplo:
    // if (status === 'Pendiente') {
    //   return 'task-pending';
    // } else if (status === 'En progreso') {
    //   return 'task-in-progress';
    // } else if (status === 'Completada') {
    //   return 'task-completed';
    // } else {
    //   return '';
    // }
  }

  onDeleteTask(task: Task) {
    // Agrega aquí la lógica para eliminar una tarea.
    // Por ejemplo:
    // this.listService.deleteTask(task);
    // Actualiza la lista de tareas después de eliminar la tarea si es necesario.
    // this.tasks = this.listService.getTasks();
  }
}
