import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatFechaService {
  private meses: string[] = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  /**
     * Formatea una fecha en string al formato "dd de MMMM de yyyy" en español.
     * @param fechaString - La fecha en formato string (e.g., "2024-06-02").
     * @returns La fecha formateada con día y mes en letras en español.
  */
  public formatearFechaEnLetras(fechaString: string): String {
    const fechaObjeto = new Date(fechaString);

    
    const dia = fechaObjeto.getUTCDate();
    const mes = fechaObjeto.getUTCMonth(); 
    const anio = fechaObjeto.getUTCFullYear();
    const fechaFormateada = `${dia} de ${this.meses[mes]}`;

    return fechaFormateada;
}

  constructor() { }
}
