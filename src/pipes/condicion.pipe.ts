import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CondicionPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'condicion',
})
export class CondicionPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value:Boolean) :string {
    return value ? 'SI' : 'NO';
  }
}
