// jefes-departamentos.module.ts
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { JefesDepartamentosComponent } from './jefes-departamentos.component';

@NgModule({
  declarations: [JefesDepartamentosComponent],
  imports: [IonicModule, CommonModule],
  exports: [JefesDepartamentosComponent]
})
export class JefesDepartamentosModule {}
