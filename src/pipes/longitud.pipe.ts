import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LongitudPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'longitud',
})
export class LongitudPipe implements PipeTransform {
  transform(value:any, limite:string) : any {
    let limitetexto = parseInt(limite);
    //si la longitud del valor es mayor al limite que le pasamos por parametro
    //devolvera el valor con los puntos suspensivos, si es menor, devolvera el valor original
    return value.length > limitetexto ? value.substring(0,limitetexto) + "..."  :   value;
  }
}
