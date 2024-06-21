import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }
  extraterFechaHora(localDataTime: string): { fecha: string, hora: string } {
    const dateObj = new Date(localDataTime);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const year = dateObj.getFullYear();

    // Extraer hora en formato de 12 horas con AM/PM
    const hora = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    // Construir la fecha en formato de letras
    const fecha = `${day} de ${month} de ${year}`;

    return { fecha, hora };


  }

  convertirFechaISO(date: Date, time: string): string {
    const date2 = this.dateaString(date)

    const [year, month, day] = date2.split('-').map(Number);
    let [hora, minutos] = time.split(':').map(Number);


    const dateObj = new Date(Date.UTC(year, month - 1, day, hora, minutos, 0));

    return dateObj.toISOString();


  }
  private getMonthNumber(month: string): number {
    // Función para obtener el número del mes basado en su nombre
    const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return monthNames.findIndex(m => m === month.toLowerCase()) + 1;
  }

  private dateaString(date: any) {
    if (date instanceof Date) {

      const diaInicio = (date.getDate())?.toString().padStart(2, '0');
      const mesInicio = ((date.getMonth()) + 1)?.toString().padStart(2, '0');
      const anioInicio = date.getFullYear();


      return (`${anioInicio}-${mesInicio}-${diaInicio}`);


    } else {
      return ''

    }
  }

}
