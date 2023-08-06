export interface Task {
  id: number;
  name: string;
  time: Date;
  status: string;
  department: string;
  imageData: string; // Asegúrate de tener esta línea en tu definición
}
