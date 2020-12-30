import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtileService {

  constructor() { }

  numberSeparator(nbre: number, sep: string){
    return nbre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  }
}
