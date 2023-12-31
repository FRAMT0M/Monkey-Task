import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GerentePage } from './gerente.page';

const routes: Routes = [
  {
    path: '',
    component: GerentePage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GerentePage]
})
export class GerentePageModule {}
