import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tasks: any[] = [];

  constructor(private router: Router, private listService: ListService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.listService.getTasks();
  }

  getTaskColor(status: string) {
    switch (status) {
      case 'Completado':
        return 'success';
      case 'Pendiente':
        return 'danger';
      case 'En Proceso':
        return 'warning';
      default:
        return '';
    }
  }

  navigateToAddEditItemPage() {
    this.router.navigate(['/add-edit-item']);
  }
}
