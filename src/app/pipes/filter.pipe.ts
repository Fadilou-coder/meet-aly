import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sheach: string, property: string): any {
    if(value.length === 0 || sheach.length === 0){
      return value;
    }

    const resultArray = [];
    for(const item of value) {
      // if (item.property === sheach) {
      //   resultArray.push(item);
      // }
      if (item[property].includes(sheach)) {
          resultArray.push(item);
      }
    }
    return resultArray;
  }

}
