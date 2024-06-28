import { Component } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';
import { Empleado } from '../../modelos/empleado.model';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent {
  empleado: Empleado = {
    id: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: new Date(),
    sexo: ''
  };

  constructor(private empleadoService: EmpleadoService) {}

  registrarEmpleado(): void {
    this.empleadoService.guardarEmpleado(this.empleado);
    this.empleado = { id: 0, nombre: '', correo: '', telefono: '', fechaNacimiento: new Date(), sexo: '' };
  }
}
