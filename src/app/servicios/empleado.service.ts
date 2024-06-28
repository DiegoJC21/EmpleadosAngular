import { Injectable } from '@angular/core';
import { Empleado } from '../modelos/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private readonly localStorageKey = 'empleados';

  constructor() { }

  obtenerEmpleados(): Empleado[] {
    const empleados = localStorage.getItem(this.localStorageKey);
    return empleados ? JSON.parse(empleados) : [];
  }

  guardarEmpleado(empleado: Empleado): void {
    const empleados = this.obtenerEmpleados();
    empleados.push(empleado);
    localStorage.setItem(this.localStorageKey, JSON.stringify(empleados));
  }

  eliminarEmpleado(id: number): void {
    let empleados = this.obtenerEmpleados();
    empleados = empleados.filter(e => e.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(empleados));
  }
}
