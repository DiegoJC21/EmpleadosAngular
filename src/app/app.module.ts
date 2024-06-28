import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RegistroEmpleadoComponent } from './componentes/registro-empleado/registro-empleado.component';
import { ListadoEmpleadosComponent } from './componentes/listado-empleados/listado-empleados.component';
import { TablaEmpleadosComponent } from './componentes/tabla-empleados/tabla-empleados.component';
import { EmpleadoService } from './servicios/empleado.service';
import { AppComponent } from './app.component'; // Importa AppComponent

@NgModule({
  declarations: [
    AppComponent, // Declara AppComponent
    RegistroEmpleadoComponent,
    ListadoEmpleadosComponent,
    TablaEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent], // Agrega AppComponent al bootstrap
  exports: [
    RegistroEmpleadoComponent,
    ListadoEmpleadosComponent,
    TablaEmpleadosComponent
  ]
})
export class AppModule { }
