import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLeft'
})
export class TimeLeftPipe implements PipeTransform {

  nbr: number;

  transform(value: Date): unknown {
  //   this.nbr = (new Date().getTime() - value.getTime());
  //   if (Math.abs(this.nbr) > (1000*3600*24*365)) {
  //     this.nbr = Math.trunc(Math.abs(this.nbr) / (1000*3600*24*365));
  //     return this.nbr + ' ans';
  //   }
  //   if (Math.abs(this.nbr) > (3600*24*30)) {
  //     this.nbr = Math.trunc( Math.abs(this.nbr) / (1000*3600*24*30));
  //     return this.nbr + ' mois';
  //   }
  //   if (Math.abs(this.nbr) > (3600*24)) {
  //     this.nbr = Math.trunc(this.nbr / 1000*3600*24);
  //     return this.nbr + ' jours';
  //   }
  //   if (Math.abs(this.nbr) > 3600) {
  //     this.nbr = Math.trunc(Math.abs(this.nbr) / 1000*3600);
  //     return this.nbr + ' heures';
  //   }
  //   if (Math.abs(this.nbr) > 60) {
  //     this.nbr = Math.trunc(Math.abs(this.nbr) / 1000*60);
  //     return this.nbr + ' minutes';
  //   }
  //   return  this.nbr + ' secondes';
  // }

  const currentTime = new Date();
  const diff = Math.abs(currentTime.getTime() - value.getTime());

  const y = Math.floor(diff/1000/3600/24/365);
  if(y>0) return y + ' ans';
  const ms = Math.floor(diff/1000/3600/24/30)
  if(ms>0) return ms + ' mois'
  const d = Math.floor(diff/1000/3600/24);
  if(d>0) return d + ' jours';
  const h = Math.floor(diff/1000/3600);
  if(h>0) return h + ' heures';
  const m = Math.floor(diff/1000/60);
  if(m>0) return m + ' mns';
  const s = Math.floor(diff/1000/3600);
  return s + ' s';

  }

}
