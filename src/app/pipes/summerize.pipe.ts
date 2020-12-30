import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summerize'
})
export class SummerizePipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (value.length === length) {
      return value.substr(value.length, length);
    }
    return value;
  }

}
