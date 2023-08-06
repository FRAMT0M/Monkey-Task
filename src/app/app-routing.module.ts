import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service'; // Importar el guardia de ruta

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    // canActivate: [AuthService], // Agregar el guardia de ruta para proteger el acceso
  },
  {
    path: 'add-edit-item',
    loadChildren: () => import('./add-edit-item/add-edit-item.module').then(m => m.AddEditItemPageModule),
  },
  {
    path: 'jefes-departamentos', // Ruta para la página de jefes departamentos
    loadChildren: () => import('./jefes-departamentos/jefes-departamentos.module').then(m => m.JefesDepartamentosModule),
  },
  {
    path: '', // Ruta raíz, aquí podrías redirigir al inicio de sesión si se desea
    redirectTo: 'login', // Redirigir al inicio de sesión si no se especifica una ruta
    pathMatch: 'full',
  },
  {
    path: 'login', // Ruta para la página de inicio de sesión
    loadChildren: () => import('./login/login.module').then(m => m.LoginComponentModule),
  },
  {
    path: 'gerente',
    loadChildren: () => import('./gerente/gerente.module').then(m => m.GerentePageModule),
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
