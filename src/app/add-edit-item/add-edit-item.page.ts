import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.page.html',
  styleUrls: ['./add-edit-item.page.scss'],
})
export class AddEditItemPage {
  departments: string[] = [
    'Mantenimiento',
    'Ama de llaves',
    'Recepción',
    'Departamento de Calidad',
    'Alimentos y bebidas',
    'Cocina',
    'Administración',
    'Comercial',
    'Manager y Social Media',
    'Seguridad',
    'Vacation Club',
    'Animación'
  ];

  statuses: string[] = [
    'Pendiente',
    'En Proceso',
    'Completado'
  ];

  selectedDepartment: string = '';
  selectedStatus: string = '';
  item: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listService: ListService
  ) {}

  save() {
    if (!this.item.task) {
      console.error('La tarea no puede estar vacía.');
      return;
    }

    const newItem = {
      date: this.item.date || new Date().toISOString(),
      task: this.item.task,
      department: this.selectedDepartment,
      status: this.selectedStatus
    };

    this.listService.addItem(newItem);

    // Esperar un breve momento antes de redirigir a la página de inicio
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 100);
  }

  updateSelectedStatus(event: any) {
    this.selectedStatus = event.detail.value;
  }
}
