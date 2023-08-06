import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-jefes-departamentos',
  templateUrl: './jefes-departamentos.component.html',
  styleUrls: ['./jefes-departamentos.component.scss']
})
export class JefesDepartamentosComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasksByDepartment('Mantenimiento').subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  getTaskStatusClass(status: string): string {
    // Implementa la lógica para devolver la clase CSS adecuada según el estado de la tarea
    if (status === 'Pendiente') {
      return 'task-pending';
    } else if (status === 'En progreso') {
      return 'task-in-progress';
    } else {
      return 'task-completed';
    }
  }

  onDeleteTask(task: Task): void {
    // Implementa la lógica para eliminar la tarea
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
