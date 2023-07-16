import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list: any[];
  listService: any;

  constructor() { 
    this.list = [[]];
  }

  getList(index: number) {
    let list = localStorage.getItem('todo-list-'+index);
    if (list !== 'undefined' && list !== null) {
      this.list[index] = JSON.parse(list);
    }
    if (index >= this.list.length) this.list.push([]);
    return this.list[index];
  }

  saveList(listIndex: number) {
    localStorage.setItem('todo-list-'+listIndex, JSON.stringify(this.list[listIndex]));
  }

  getItem(listIndex: number, itemIndex: number) {
    return this.list[listIndex][itemIndex];
  }

  setItem(listIndex: number, item: any, itemIndex?: number) {
    if (itemIndex === undefined) this.list[listIndex].push(Object.assign({}, item));
    else this.list[listIndex][itemIndex] = Object.assign({}, item);
    this.saveList(listIndex);  
  }

  deleteItem(listIndex: number, itemIndex: number) {
    this.list[listIndex].splice(itemIndex, 1);
    this.saveList(listIndex);
  }

  deleteList(listIndex: number) {
    this.list[listIndex].length = 0;
    this.saveList(listIndex);    
  }

  moveItem(listIndex: number, from: number, to: number) {
    let element = this.list[listIndex][from];
    this.list[listIndex].splice(from, 1);
    this.list[listIndex].splice(to, 0, element);
    this.saveList(listIndex);    
  }
  addItem(newItem: any) {
    const listIndex = 0; // Índice de la lista en la que deseas agregar la tarea (puedes ajustarlo según tu estructura de datos)
    
    const taskItem = {
      date: newItem.date,
      task: newItem.task,
      department: newItem.department,
      status: 'Pendiente' // Estado inicial de la tarea (puedes ajustarlo según tus necesidades)
    };
  
    // Agregar la tarea a la lista correspondiente en el servicio
    this.listService.getList(listIndex).push(taskItem);
    this.listService.saveList(listIndex);
  }
  
}
