import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task.model';
import { ListService } from '../app/list.service'; // Asegúrate de que la ruta sea correcta para el servicio ListService

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.page.html',
  styleUrls: ['./add-edit-item.page.scss'],
})
export class AddEditItemPage implements OnInit {
  task: Task = {
    id: 0,
    name: '',
    time: new Date(),
    status: 'Pendiente',
    department: '',
  };

  departments: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService
  ) {}

  ngOnInit() {
    this.departments = ['Departamento 1', 'Departamento 2', 'Departamento 3', 'Departamento 4'];
  }

  onSave() {
    this.listService.addTask(this.task);
    this.router.navigate(['/home']);
  }

  onCancel() {
    this.router.navigate(['/home']);
  }
}
