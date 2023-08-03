import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController
import { Task } from '../models/task.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-gerente', // Cambia el selector a 'app-gerente'
  templateUrl: './gerente.page.html',
  styleUrls: ['./gerente.page.scss'],
})
export class GerentePage implements OnInit { // Cambia el nombre de la clase a GerentePage
  tasks: Task[] = [];

  newTask: Task = {
    id: 0,
    name: '',
    time: new Date(),
    status: 'Pendiente',
    department: '',
  };

  constructor(private listService: ListService, private navCtrl: NavController) {} // Inyecta NavController

  ngOnInit() {
    this.loadTasks(); // Cambia 'this.tasks = this.listService.getAllTasks();' por 'this.loadTasks();'
  }

  getTaskStatusClass(status: string): string {
    if (status === 'Pendiente') {
      return 'task-pending';
    } else if (status === 'En progreso') {
      return 'task-in-progress';
    } else if (status === 'Completada') {
      return 'task-completed';
    } else {
      return 'task-default';
    }
  }

  onDeleteTask(task: Task) {
    this.listService.deleteTask(task);
    this.loadTasks(); // Cambia 'this.tasks = this.listService.getAllTasks();' por 'this.loadTasks();'
  }

  onAddTask() {
    this.newTask.id = this.generateUniqueId();
    this.listService.addTask(this.newTask);
    this.newTask = {
      id: 0,
      name: '',
      time: new Date(),
      status: 'Pendiente',
      department: '',
    };
    this.loadTasks(); // Cambia 'this.tasks = this.listService.getAllTasks();' por 'this.loadTasks();'

    // Navegar a la página gerente después de agregar la tarea
    this.navCtrl.navigateForward('/gerente');
  }

  private generateUniqueId(): number {
    return Date.now();
  }

  private loadTasks() {
    this.tasks = this.listService.getAllTasks();
  }
}
