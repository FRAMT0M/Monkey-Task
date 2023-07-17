import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private tasks: any[] = [];

  constructor() {}

  getTasks() {
    return this.tasks;
  }

  addItem(task: any) {
    this.tasks.push(task);
  }
}
