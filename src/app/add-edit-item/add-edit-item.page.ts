import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { ListService } from '../list.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
    imageData: '', // Agrega esta propiedad para almacenar los datos de la imagen
  };

  selectedDepartment: string = '';
  photoDataUrl: string = ''; // Agrega esta propiedad para almacenar la URL de la imagen capturada

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
    'Animación',
  ];

  constructor(
    private listService: ListService,
    private router: Router,
    private camera: Camera
  ) {}

  ngOnInit() {}

  onSave() {
    this.task.department = this.selectedDepartment;

    if (this.task.id === 0) {
      this.listService.addTask(this.task);
    } else {
      // Utilizamos el mismo método saveTask para actualizar la tarea existente
      this.listService.saveTask(this.task);
    }

    this.router.navigate(['/home']);
  }

  onCancel() {
    this.task = {
      id: 0,
      name: '',
      time: new Date(),
      status: 'Pendiente',
      department: '',
      imageData: '', // Asegúrate de reiniciar también la propiedad imageData
    };
    this.selectedDepartment = '';
    this.photoDataUrl = ''; // Asegúrate de reiniciar también la propiedad photoDataUrl
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData es la base64-encoded image data
        // Asignamos la imagen capturada a la propiedad imageData
        this.task.imageData = 'data:image/jpeg;base64,' + imageData;
        this.photoDataUrl = this.task.imageData; // Asignamos también la imagen a la propiedad photoDataUrl
      },
      (err) => {
        // Manejo de errores
        console.error('Error al capturar la imagen:', err);
      }
    );
  }
}
