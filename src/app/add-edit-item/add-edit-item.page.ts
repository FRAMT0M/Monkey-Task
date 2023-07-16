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

  selectedDepartment: string = '';
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
      department: this.selectedDepartment
    };

    this.listService.addItem(newItem);
    this.router.navigate(['/home']);
  }
}
