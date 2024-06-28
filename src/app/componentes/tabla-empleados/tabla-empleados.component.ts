import { Component, Input } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';
import { Empleado } from '../../modelos/empleado.model';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.css']
})
export class TablaEmpleadosComponent {
  @Input() empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  eliminarEmpleado(id: number): void {
    this.empleadoService.eliminarEmpleado(id);
    this.empleados = this.empleados.filter(e => e.id !== id);
  }
}
