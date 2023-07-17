import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  tasks: any[] = [];

  constructor(private router: Router, private listService: ListService) {}

  ngOnInit() {
    // Obtener las tareas del servicio
    this.tasks = this.listService.getTasks();
  }

  getStatusColor(status: string) {
    switch (status) {
      case 'Pendiente':
        return 'warning';
      case 'En Proceso':
        return 'primary';
      case 'Completado':
        return 'success';
      default:
        return 'medium';
    }
  }

  getCompletedTasksCount() {
    return this.tasks.filter(task => task.status === 'Completado').length;
  }

  getPendingTasksCount() {
    return this.tasks.filter(task => task.status === 'Pendiente').length;
  }

  getInProgressTasksCount() {
    return this.tasks.filter(task => task.status === 'En Proceso').length;
  }

  addTask() {
    // Redireccionar a la página de agregar/editar tarea
    this.router.navigate(['/add-edit-item']);
  }
}
