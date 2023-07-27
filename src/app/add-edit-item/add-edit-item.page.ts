import { Component } from '@angular/core';
import { Task } from '../models/task.model'; // Corregimos la ruta de importación
import { ListService } from '../list.service'; // Corregimos la ruta de importación
import { Router } from '@angular/router'; // Importamos el Router para redireccionar a otra página

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.page.html',
  styleUrls: ['./add-edit-item.page.scss'],
})
export class AddEditItemPage {
  task: Task = {
    id: 0,
    name: '',
    time: new Date(),
    status: 'Pendiente',
    department: '',
  };

  departments: string[] = [];

  constructor(
    private listService: ListService,
    private router: Router // Inyectamos el Router en el constructor
  ) {}

  ngOnInit() {
    this.departments = ['Departamento 1', 'Departamento 2', 'Departamento 3', 'Departamento 4'];
  }

  onSave() {
    // Llama al método saveTask del ListService para guardar la tarea
    this.listService.saveTask(this.task);

    // Agrega aquí la lógica necesaria después de guardar la tarea
    // Redireccionamos a la página de inicio después de guardar la tarea
    this.router.navigate(['/home']);
  }

  onCancel() {
    // Restablecer los valores del formulario a sus valores originales
    this.task = {
      id: 0,
      name: '',
      time: new Date(),
      status: 'Pendiente',
      department: '',
    };
  }
}
