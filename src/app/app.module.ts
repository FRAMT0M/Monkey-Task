import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListService } from './list.service';
import { TaskService } from './task.service'; // Asegúrate de haber agregado esta línea
import { JefesDepartamentosModule } from './jefes-departamentos/jefes-departamentos.module'; // Agrega esta línea

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, JefesDepartamentosModule], // Agrega JefesDepartamentosModule aquí
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ListService,
    TaskService // Asegúrate de haber agregado TaskService aquí
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
