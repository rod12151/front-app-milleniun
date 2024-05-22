 export class ValidacionInput{

    static filtrarNumeros(event: any): void {
      const inputValue = event.target.value;
      const numericInput = inputValue.replace(/[^0-9]/g, ''); // Filtra solo los números
      event.target.value = numericInput; // Asigna el valor filtrado de nuevo al campo de entrada
    }
     static filtrarLetras(event: any) {
        const inputValue = event.target.value;
        const alphaInput = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]/g, ''); // Filtra solo las letras y caracteres con acentos
        event.target.value = alphaInput; // Asigna el valor filtrado de nuevo al campo de entrada
      }
 }