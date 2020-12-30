import { Pipe, PipeTransform } from '@angular/core';
import { UtileService } from '../utile.service';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {

  constructor(private u: UtileService) {}

  transform(value: number, separator: string): string {
    return this.u.numberSeparator(value, separator);
  }

}
